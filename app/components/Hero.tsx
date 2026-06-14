import Image from "next/image";
import { HERO_CONTENT } from "@/src/data/content";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* ---------------- TEXT SECTION ---------------- */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
            
            {/* Minimalist Eyebrow */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">
                Maison Layal
              </span>
              <div className="h-[1px] w-12 bg-gray-300 hidden sm:block" />
            </div>
            
            {/* Title - Large Editorial Serif */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-gray-900 leading-tight mb-6">
              {HERO_CONTENT.title}
            </h1>
            
            {/* Subtitle - Clean sans-serif */}
            <p className="text-sm text-gray-500 leading-relaxed max-w-md mx-auto lg:mx-0 mb-10">
              {HERO_CONTENT.subtitle}
            </p>
            
            {/* Minimalist Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#order"
                className="w-full sm:w-auto text-center px-10 py-4 text-[10px] font-bold tracking-widest uppercase bg-[#6A4C4C] text-white hover:bg-gray-900 transition-colors duration-300"
              >
                {HERO_CONTENT.ctaPrimary}
              </a>
              <a
                href="#collection"
                className="w-full sm:w-auto text-center px-10 py-4 text-[10px] font-bold tracking-widest uppercase border border-gray-200 text-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                {HERO_CONTENT.ctaSecondary}
              </a>
            </div>

            {/* Cities - Clean tracking text instead of gold dots */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 pt-16 text-[9px] tracking-[0.2em] uppercase text-gray-400">
              <span className="hover:text-gray-900 transition-colors cursor-default">Tangier</span>
              <span className="hover:text-gray-900 transition-colors cursor-default">Tetouan</span>
              <span className="hover:text-gray-900 transition-colors cursor-default">Atelier Maroc</span>
            </div>
          </div>

          {/* ---------------- IMAGE SECTION ---------------- */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            
            {/* Clean Editorial Frame (replaces the Moroccan Arch) */}
            <div className="relative w-full max-w-[500px] aspect-[4/5] bg-[#F9F7F6] p-4 sm:p-8">
              
              {/* Inner Image Container */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={HERO_CONTENT.imagePath}
                  alt={HERO_CONTENT.imageAlt}
                  fill
                  priority
                  sizes="(max-w-7xl) 500px, 100vw"
                  className="object-cover transition-transform duration-[2s] hover:scale-105"
                />
              </div>
              
              {/* Subtle vertical text overlapping the frame (Aleksei style detail) */}
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-90 hidden lg:block origin-center">
                <span className="text-[9px] tracking-[0.3em] uppercase text-gray-400 font-bold whitespace-nowrap">
                  L'orfèvrerie du mariage
                </span>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}