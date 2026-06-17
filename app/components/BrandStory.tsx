"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/components/LanguageProvider";
import type { Language } from "@/src/data/translations";

export default function BrandStory() {
  const { lang } = useLanguage();
  const l = lang as Language;

  const content = {
    fr: {
      subtitle: "L'Atelier Hand Touch",
      title: "L'Art de la Personnalisation",
      text1: "Chaque événement est unique, c'est pourquoi chaque création qui sort de notre atelier l'est tout autant. Nous sélectionnons les matières les plus nobles, des fleurs séchées délicates aux rubans de satin, pour donner vie à votre vision.",
      text2: "Derrière chaque coffret, chaque fiole et chaque ruban, il y a des heures de travail méticuleux et une passion infinie pour l'esthétique et le détail.",
      btn: "Découvrir notre histoire"
    },
    en: {
      subtitle: "The Hand Touch Atelier",
      title: "The Art of Personalization",
      text1: "Every event is unique, which is why every creation that leaves our atelier is just as unique. We select the finest materials, from delicate dried flowers to satin ribbons, to bring your vision to life.",
      text2: "Behind every box, every vial, and every ribbon, there are hours of meticulous work and an infinite passion for aesthetics and detail.",
      btn: "Discover our story"
    },
    es: {
      subtitle: "El Taller Hand Touch",
      title: "El Arte de la Personalización",
      text1: "Cada evento es único, por eso cada creación que sale de nuestro taller lo es también. Seleccionamos los materiales más nobles, desde delicadas flores secas hasta cintas de satén, para dar vida a tu visión.",
      text2: "Detrás de cada caja, cada vial y cada cinta, hay horas de trabajo meticuloso y una pasión infinita por la estética y el detalle.",
      btn: "Descubre nuestra historia"
    },
    ar: {
      subtitle: "مشغل Hand Touch",
      title: "فن التخصيص والإبداع",
      text1: "كل مناسبة هي فريدة من نوعها، ولهذا السبب فإن كل إبداع يخرج من مشغلنا هو كذلك. نختار أجود المواد، من الزهور المجففة الرقيقة إلى شرائط الساتان، لنجسد رؤيتكم على أرض الواقع.",
      text2: "وراء كل صندوق، وكل قارورة، وكل شريط، ساعات من العمل الدقيق وشغف لا حدود له بالجمال والتفاصيل.",
      btn: "اكتشف قصتنا"
    }
  };

  const c = content[l] || content.fr;

  return (
<section className="py-20 sm:py-32 bg-transparent relative z-10 overflow-hidden">
       <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* IMAGE ASYMÉTRIQUE */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full max-w-[500px] aspect-[4/5] mx-auto bg-[#F9F7F6] group overflow-hidden">
              <Image
                src="/images/brandstory/brandstory.png" // Mettez une photo de vos mains en train de travailler ou un beau détail
                alt="L'Atelier Hand Touch"
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
            </div>
            {/* Petit bloc déco */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 w-32 h-32 bg-[#E8DEDA] -z-10 hidden sm:block" />
          </div>

          {/* TEXTE */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
            <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-gray-400 mb-6">
              {c.subtitle}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-[1.1] mb-8">
              {c.title}
            </h2>
            <div className="w-12 h-[1px] bg-gray-900 mb-8 mx-auto lg:mx-0" />
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-serif italic mb-6">
              {c.text1}
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-serif italic mb-10">
              {c.text2}
            </p>
            <div>
              <Link
                href="/about"
                className="inline-block border-b border-gray-900 pb-1 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-900 hover:text-[#6A4C4C] hover:border-[#6A4C4C] transition-colors duration-300"
              >
                {c.btn}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}