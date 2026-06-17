import Hero from "./components/Hero";
import BrandStory from "./components/BrandStory";
import Categories from "./components/Categories";
import Collection from "./components/Collection";
import Process from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import InstagramGallery from "./components/InstagramGallery";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">

      {/* ── BACKGROUND FIXE (Zewa9a Royal BIEN VISIBLE) ── */}
      <div className="fixed inset-0 w-screen h-screen bg-[#FCFAF8] pointer-events-none z-[-1] overflow-hidden">
        
        {/* 1. CADRE HAUTE COUTURE */}
        <div className="absolute top-2 left-2 right-2 bottom-2 md:top-4 md:left-4 md:right-4 md:bottom-4 border border-[#6A4C4C] opacity-[0.15] md:opacity-[0.20]" />
        <div className="absolute top-4 left-4 right-4 bottom-4 md:top-6 md:left-6 md:right-6 md:bottom-6 border border-[#6A4C4C] opacity-[0.08] md:opacity-[0.12]" />

        {/* 2. ZAKHRAFA "SCEAU DE LUXE" (Plus épaisse et plus visible) */}
        
        {/* Motif en haut à gauche */}
        {/* Opacité montée à 20% sur PC et 12% sur mobile pour être bien claire */}
        <svg 
          className="absolute -top-16 -left-16 w-[250px] h-[250px] opacity-[0.12] md:-top-32 md:-left-32 md:w-[600px] md:h-[600px] text-[#6A4C4C] md:opacity-[0.20] transition-all duration-500" 
          viewBox="0 0 200 200" fill="none" stroke="currentColor" 
        >
          <g transform="translate(100, 100)">
            {/* Cercles extérieurs plus épais */}
            <circle cx="0" cy="0" r="80" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="72" strokeWidth="0.5" />
            
            {/* Fleur principale (4 pétales parfaits) */}
            <path d="M 0,-72 C 25,-72 35,-35 72,0 C 35,35 25,72 0,72 C -25,72 -35,35 -72,0 C -35,-35 -25,-72 0,-72 Z" strokeWidth="1.5" />
            
            {/* Étoile florale intérieure (Diagonale) */}
            <path d="M 0,-55 C 15,-55 20,-20 55,0 C 20,20 15,55 0,55 C -15,55 -20,20 -55,0 C -20,-20 -15,-55 0,-55 Z" transform="rotate(45)" strokeWidth="1" />
            
            {/* Centre détaillé (Cœur du sceau) */}
            <circle cx="0" cy="0" r="15" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="8" strokeWidth="0.5" />
            <path d="M 0,-8 L 0,8 M -8,0 L 8,0" strokeWidth="0.5" />
          </g>
        </svg>

        {/* Motif en bas à droite */}
        <svg 
          className="absolute -bottom-20 -right-20 w-[300px] h-[300px] opacity-[0.10] md:-bottom-40 md:-right-40 md:w-[700px] md:h-[700px] text-[#6A4C4C] md:opacity-[0.15] rotate-180 transition-all duration-500" 
          viewBox="0 0 200 200" fill="none" stroke="currentColor" 
        >
          <g transform="translate(100, 100)">
            {/* Cercles extérieurs plus épais */}
            <circle cx="0" cy="0" r="80" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="72" strokeWidth="0.5" />
            
            {/* Fleur principale (4 pétales parfaits) */}
            <path d="M 0,-72 C 25,-72 35,-35 72,0 C 35,35 25,72 0,72 C -25,72 -35,35 -72,0 C -35,-35 -25,-72 0,-72 Z" strokeWidth="1.5" />
            
            {/* Étoile florale intérieure (Diagonale) */}
            <path d="M 0,-55 C 15,-55 20,-20 55,0 C 20,20 15,55 0,55 C -15,55 -20,20 -55,0 C -20,-20 -15,-55 0,-55 Z" transform="rotate(45)" strokeWidth="1" />
            
            {/* Centre détaillé (Cœur du sceau) */}
            <circle cx="0" cy="0" r="15" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="8" strokeWidth="0.5" />
            <path d="M 0,-8 L 0,8 M -8,0 L 8,0" strokeWidth="0.5" />
          </g>
        </svg>

        {/* 3. GLOWS (Lumières douces) */}
        <div className="absolute top-[-10vh] left-[-10vw] w-[80vw] md:w-[45vw] h-[80vw] md:h-[45vw] bg-[#E8DEDA] rounded-full blur-[80px] md:blur-[100px] opacity-50" />
        <div className="absolute bottom-[-10vh] right-[-10vw] w-[80vw] md:w-[50vw] h-[80vw] md:h-[50vw] bg-[#F5EBE9] rounded-full blur-[100px] md:blur-[140px] opacity-50" />
        
      </div>

      {/* ── CONTENU DE LA PAGE ── */}
      <div className="relative z-10">
        <Hero />
        <BrandStory />
        <Categories />
        <Collection />
        <Process />
        <Testimonials />
        <InstagramGallery />
        <Footer />
      </div>

    </main>
  );
}