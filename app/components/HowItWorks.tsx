import { PROCESS_CONTENT } from "@/src/data/content";

export default function HowItWorks() {
  return (
    <section id="process" className="py-32 bg-white relative border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* ---------------- SECTION HEADER (Centered Minimalist) ---------------- */}
        <div className="text-center max-w-2xl mx-auto mb-24 flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-gray-400 mb-6">
            Notre Processus
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight mb-6">
            {PROCESS_CONTENT.title}
          </h2>
          <div className="w-8 h-[1px] bg-gray-300 mb-8" />
          <p className="text-sm text-gray-500 leading-relaxed font-light">
            {PROCESS_CONTENT.subtitle}
          </p>
        </div>

        {/* ---------------- PROCESS STEPS TIMELINE ---------------- */}
        <div className="relative mt-16">
          
          {/* Minimalist Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[45px] left-[15%] right-[15%] h-[1px] bg-gray-100 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 relative z-10">
            {PROCESS_CONTENT.steps.map((step, index) => (
              <div
                key={step.number}
                className="group flex flex-col items-center text-center bg-white"
              >
                {/* Large Editorial Step Number */}
                <div className="bg-white px-8 mb-8 transition-transform duration-700 ease-out group-hover:-translate-y-3">
                  <span className="font-serif italic text-6xl md:text-7xl text-gray-200 transition-colors duration-500 group-hover:text-[#6A4C4C]">
                    {/* Formats number as 01, 02, 03 */}
                    {String(step.number).padStart(2, '0')}
                  </span>
                </div>
                
                {/* Step Title (Wide tracking uppercase) */}
                <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-900 mb-4">
                  {step.title}
                </h3>
                
                {/* Step Description */}
                <p className="text-sm leading-relaxed text-gray-500 max-w-xs font-serif italic">
                  {step.description}
                </p>
                
                {/* Mobile-only connector dot (hidden on desktop) */}
                {index !== PROCESS_CONTENT.steps.length - 1 && (
                  <div className="w-[1px] h-12 bg-gray-100 mt-12 lg:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}