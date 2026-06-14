// ============================================================
// Rich Prestige Products Data — 4 Languages
// Used by Collection.tsx and Products.tsx
// ============================================================

export interface MultilingualProductItem {
  id: string;
  price: string;
  images: string[];
  category: { fr: string; en: string; es: string; ar: string };
  title: { fr: string; en: string; es: string; ar: string };
  subtitle: { fr: string; en: string; es: string; ar: string };
  description: { fr: string; en: string; es: string; ar: string };
  features: {
    fr: string[];
    en: string[];
    es: string[];
    ar: string[];
  };
}

export const PRESTIGE_PRODUCTS: MultilingualProductItem[] = [
  {
    id: "coffret-dragees-prestige",
    price: "95",
    images: [
      "/images/products/products1.jpeg",
      "/images/products/products2.jpeg",
    ],
    category: {
      fr: "Dragées",
      en: "Dragées",
      es: "Confites",
      ar: "ملبس",
    },
    title: {
      fr: "Coffret Dragées Prestige",
      en: "Prestige Dragées Box",
      es: "Caja de Confites Prestige",
      ar: "علبة ملبس برستيج",
    },
    subtitle: {
      fr: "Tradition & Raffinement",
      en: "Tradition & Refinement",
      es: "Tradición y Refinamiento",
      ar: "تقاليد وأناقة",
    },
    description: {
      fr: "Une sélection exquise d'amandes de premier choix enrobées d'or, d'argent et de teintes pastel, présentée dans des coffrets en velours personnalisés avec vos initiales.",
      en: "An exquisite selection of premium almonds coated in gold, silver, and pastel hues, presented in custom velvet boxes personalized with your initials.",
      es: "Una exquisita selección de almendras de primera calidad recubiertas de oro, plata y tonos pastel, presentadas en cajas de terciopelo personalizadas con tus iniciales.",
      ar: "تشكيلة رائعة من اللوز الفاخر المغطى بالذهب والفضة وألوان الباستيل، مُقدمة في علب مخملية مخصصة بحروف اسميكم الأولى.",
    },
    features: {
      fr: ["Amandes Avola de Sicile", "Coffret en velours fait main", "Monogramme gravé à l'or chaud"],
      en: ["Avola almonds from Sicily", "Handmade velvet box", "Hot gold engraved monogram"],
      es: ["Almendras Avola de Sicilia", "Caja de terciopelo hecha a mano", "Monograma grabado en oro"],
      ar: ["لوز أفولا من صقلية", "علبة مخملية مصنوعة يدوياً", "نقش مذهب يدوي للأحرف"],
    },
  },
  {
    id: "coffret-chocolat-royal",
    price: "125",
    images: [
      "/images/products/products2.jpeg",
      "/images/products/products1.jpeg",
    ],
    category: {
      fr: "Chocolats",
      en: "Chocolates",
      es: "Chocolates",
      ar: "شوكولاتة",
    },
    title: {
      fr: "Coffret Chocolat Royal",
      en: "Royal Chocolate Box",
      es: "Caja de Chocolates Royal",
      ar: "صندوق شوكولاتة ملكي",
    },
    subtitle: {
      fr: "Fusion Gourmande",
      en: "Gourmet Fusion",
      es: "Fusión Gourmet",
      ar: "مزيج فاخر",
    },
    description: {
      fr: "Chocolats de prestige alliant le savoir-faire belge aux saveurs marocaines emblématiques (fleur d'oranger, éclats d'amandes grillées, safran de Taliouine).",
      en: "Prestige chocolates combining Belgian expertise with iconic Moroccan flavors (orange blossom, roasted almond slivers, Taliouine saffron).",
      es: "Chocolates de prestigio que combinan el saber hacer belga con sabores marroquíes icónicos (flor de azahar, almendras tostadas, azafrán de Taliouine).",
      ar: "شوكولاتة فاخرة تجمع بين الخبرة البلجيكية والنكهات المغربية الأصيلة (زهر البرتقال، رقائق اللوز المحمص، زعفران تاليوين).",
    },
    features: {
      fr: ["Cacao grand cru 70%", "Saveurs orientales exclusives", "Écrin en bois laqué"],
      en: ["Grand cru 70% cocoa", "Exclusive oriental flavors", "Lacquered wooden casket"],
      es: ["Cacao gran cru 70%", "Sabores orientales exclusivos", "Estuche de madera lacada"],
      ar: ["كاكاو فاخر ٧٠٪", "نكهات شرقية حصرية", "علبة خشبية مطلية"],
    },
  },
  {
    id: "faire-part-imperial",
    price: "150",
    images: [
      "/images/products/products1-detail.jpeg", 
      "/images/products/products2-open.jpeg"
    ],
    category: {
      fr: "Invitations",
      en: "Invitations",
      es: "Invitaciones",
      ar: "بطاقات دعوة",
    },
    title: {
      fr: "Faire-part Impérial",
      en: "Imperial Invitation",
      es: "Invitación Imperial",
      ar: "دعوة إمبراطورية",
    },
    subtitle: {
      fr: "Lettres de Noblesse",
      en: "Letters of Nobility",
      es: "Letras de Nobleza",
      ar: "حروف ملكية",
    },
    description: {
      fr: "Invitations haut de gamme sur papier coton épais, gaufrage d'art, calligraphie arabe sur mesure tracée à la plume, et cachet de cire personnalisé.",
      en: "High-end invitations on thick cotton paper, art embossing, bespoke Arabic calligraphy penned by hand, and personalized wax seal.",
      es: "Invitaciones de alta gama en papel de algodón grueso, gofrado artístico, caligrafía árabe personalizada y sello de cera.",
      ar: "دعوات راقية على ورق قطني سميك، نقش فني، خط عربي مصمم خصيصاً بالريشة، وختم شمعي مخصص.",
    },
    features: {
      fr: ["Papier coton 600g", "Calligraphie calligraphiée à la main", "Cachet de cire véritable"],
      en: ["600g cotton paper", "Hand-calligraphed writing", "Genuine wax seal"],
      es: ["Papel de algodón 600g", "Caligrafía hecha a mano", "Sello de cera auténtica"],
      ar: ["ورق قطني ٦٠٠ جرام", "خط عربي مخطوط يدوياً", "ختم شمعي حقيقي"],
    },
  },
];
