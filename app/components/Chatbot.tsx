"use client";

import { useState, useRef, useEffect } from "react";

// Structure d'un message (identique à ce que demande l'API Gemini/OpenAI)
type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Messages initiaux
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: "assistant", 
      content: "Bonjour ! Bienvenue chez Hand Touch. ✨\n\nComment puis-je vous aider avec nos collections aujourd'hui ?" 
    }
  ]);

  // Défilement automatique vers le bas quand un nouveau message arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  // Fonction pour envoyer le message (Prête pour Gemini 2.5 Flash)
// Fonction pour envoyer le message
  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      // Appel à notre nouvelle route API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      });
      
      if (!response.ok) throw new Error("Erreur réseau");

      const data = await response.json();
      
      // Ajout de la réponse de Gemini dans le chat
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply || data.error }]);
      
    } catch (error) {
      console.error("Erreur API Chatbot:", error);
      setMessages((prev) => [...prev, { 
        role: "assistant", 
        content: "Désolé, je suis momentanément indisponible. N'hésitez pas à nous écrire directement sur WhatsApp !" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[9999] flex flex-col items-start gap-4">
      
      {/* ── FENÊTRE DU CHATBOT ── */}
      <div 
        className={`absolute bottom-[60px] left-0 w-[320px] sm:w-[350px] bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] origin-bottom-left ${
          isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-[#1A1A1A] p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-yellow-400' : 'bg-green-400 animate-pulse'}`} />
            <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-white">
              Concierge IA
            </span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Corps des messages */}
        <div className="h-[350px] bg-[#F9F7F6] p-5 flex flex-col gap-4 overflow-y-auto hide-scrollbar">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div 
                className={`max-w-[85%] p-4 text-xs leading-relaxed whitespace-pre-wrap ${
                  msg.role === "user" 
                    ? "bg-[#6A4C4C] text-white rounded-tl-xl rounded-tr-xl rounded-bl-xl shadow-md" 
                    : "bg-white text-gray-600 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-sm border border-gray-100"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          
          {/* Indicateur de frappe (Loading) */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-sm border border-gray-100 flex gap-1.5 items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Formulaire d'envoi */}
        <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex items-center gap-3">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            placeholder="Écrivez votre message..." 
            className="flex-1 text-xs text-gray-900 outline-none bg-transparent placeholder-gray-400 font-serif italic disabled:opacity-50"
          />
          <button 
            type="submit"
            disabled={!input.trim() || isLoading}
            className="w-8 h-8 flex items-center justify-center bg-[#F9F7F6] rounded-full text-gray-900 hover:bg-[#6A4C4C] hover:text-white transition-colors disabled:opacity-50 disabled:hover:bg-[#F9F7F6] disabled:hover:text-gray-900"
          >
            <svg className="w-3 h-3 translate-x-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
      </div>

      {/* ── BOUTON CHATBOT (À GAUCHE) ── */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen ? "bg-[#6A4C4C] text-white" : "bg-[#1A1A1A] text-white hover:scale-105"
        }`}
        title="Ouvrir le chat"
      >
        {isOpen ? (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}