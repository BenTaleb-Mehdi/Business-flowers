"use client";

import { useLanguage } from "@/app/components/LanguageProvider";
import type { Language } from "@/src/data/translations";

export default function Testimonials() {
  const { lang } = useLanguage();
  const l = lang as Language;

  const reviews = [
    {
      text: {
        fr: "La qualité des dragées et le soin apporté à la personnalisation ont rendu notre mariage magique. Un travail d'orfèvre !",
        en: "The quality of the dragées and the care taken in the personalization made our wedding magical. Masterful work!",
        es: "La calidad de los confites y el cuidado en la personalización hicieron que nuestra boda fuera mágica. ¡Un trabajo magistral!",
        ar: "جودة الدراجيه والاهتمام بالتخصيص جعلت زفافنا ساحراً. عمل متقن للغاية!"
      },
      author: "Meryem & Tariq",
      event: "Mariage, Tanger"
    },
    {
      text: {
        fr: "Nous avons commandé les coffrets cadeaux pour nos fiançailles. Tout était parfait, raffiné et d'une élégance rare.",
        en: "We ordered the gift boxes for our engagement. Everything was perfect, refined, and of rare elegance.",
        es: "Pedimos las cajas de regalo para nuestro compromiso. Todo fue perfecto, refinado y de una elegancia rara.",
        ar: "طلبنا صناديق الهدايا لخطوبتنا. كل شيء كان مثالياً، راقياً، وبأناقة نادرة."
      },
      author: "Sofia B.",
      event: "Fiançailles, Tétouan"
    },
    {
      text: {
        fr: "Un service exceptionnel et des chocolats délicieux. Nos invités ont été charmés par les détails faits main.",
        en: "Exceptional service and delicious chocolates. Our guests were charmed by the handmade details.",
        es: "Un servicio excepcional y chocolates deliciosos. Nuestros invitados quedaron encantados con los detalles hechos a mano.",
        ar: "خدمة استثنائية وشوكولاتة لذيذة جداً. ضيوفنا انبهروا بالتفاصيل المصنوعة يدوياً."
      },
      author: "Laila H.",
      event: "Événement Privé"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F9F7F6]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900">Mots Précieux</h2>
          <div className="w-8 h-[1px] bg-gray-300 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {reviews.map((review, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              {/* Icône de citation subtile */}
              <svg className="w-6 h-6 text-[#6A4C4C] opacity-40 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="font-serif italic text-base sm:text-lg text-gray-600 leading-relaxed mb-8 flex-1">
                "{review.text[l] || review.text.fr}"
              </p>
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-900 mb-1">
                  {review.author}
                </p>
                <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-gray-400">
                  {review.event}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}