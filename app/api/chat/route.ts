import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// ── IMPORTATION DES DONNÉES DE VOS PRODUITS ──────────────────
// On importe les produits pour que Gemini puisse lire les détails, prix et caractéristiques
import { HAND_TOUCH_PRODUCTS } from "@/src/data/prestigeProducts";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const lastMessage = messages[messages.length - 1];
    const previousMessages = messages.slice(0, -1);

    let history = previousMessages.map((msg: any) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));

    if (history.length > 0 && history[0].role === "model") {
      history.shift();
    }

    // Préparation de la chaîne de texte contenant le catalogue de produits pour l'IA
    const catalogString = JSON.stringify(HAND_TOUCH_PRODUCTS, null, 2);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: `
        ROLE & PERSONNALITÉ :
        Tu es le concierge virtuel exclusif de 'Hand Touch', une marque marocaine de compositions florales, coffrets de chocolats et dragées de très haut de gamme pour mariages, fiançailles, baptêmes et cadeaux d'entreprise. 
        Ton ton est poli, raffiné, professionnel, attentionné et chaleureux. 
        Utilise le vouvoiement lorsque c'est approprié dans la langue cible.

        RÈGLE DE LANGUE ABSOLUE :
        Tu dois TOUJOURS répondre dans la langue exacte utilisée par le client (Français, Anglais, Espagnol, Arabe, ou Darija/Marocain écrit en lettres latines ou arabes). 
        Si le client parle en Darija (ex: "bghit n3raf tman dyal..."), réponds-lui chaleureusement en Darija.

        CONNAISSANCE DES PRODUITS (À LIRE POUR RÉPONDRE) :
        Voici le catalogue officiel de nos produits actuellement disponibles. Base-toi uniquement sur ces informations pour donner les prix, titres, sous-titres et caractéristiques :
        ${catalogString}

        CONSIGNES DE RÉPONSE :
        1. Sois concis et élégant dans tes réponses. Utilise des listes à puces si le client demande des détails ou des caractéristiques.
        2. Les prix affichés dans les données sont en euros (€). Présente-les clairement.
        3. Si un client montre un intérêt pour un modèle spécifique présent dans le catalogue, invite-le poliment à cliquer sur le bouton "Commander ce modèle" présent sur la fiche du produit ou à cliquer sur l'icône WhatsApp à droite pour finaliser sa personnalisation avec l'équipe de l'atelier.
      `,
    });

    const chat = model.startChat({
      history: history,
    });

    const result = await chat.sendMessage(lastMessage.content);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("Erreur API Gemini:", error);
    return NextResponse.json(
      {
        error:
          "Désolé, je rencontre une difficulté technique. Veuillez nous contacter via WhatsApp.",
      },
      { status: 500 },
    );
  }
}
