// ============================================================
// Artisanat & Cadeaux Data — 4 Languages
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

export const HAND_TOUCH_PRODUCTS: MultilingualProductItem[] = [
  {
    id: "fiole-henna-prestige",
    price: "45",
    images: ["/images/products/Henna/image1.jpeg","/images/products/Henna/image2.jpeg","/images/products/Henna/image3.jpeg"],
    category: { fr: "Henna", en: "Henna", es: "Henna", ar: "حناء" },
    title: { fr: "Fiole Henna Prestige", en: "Prestige Henna Vial", es: "Vial de Henna Prestige", ar: "قارورة حناء برستيج" },
    subtitle: { fr: "Cadeau d'invité raffiné", en: "Refined guest gift", es: "Regalo refinado", ar: "هدية ضيوف أنيقة" },
    description: {
      fr: "Miniature élégante pour vos cérémonies de henné, décorée de fleurs séchées et personnalisée.",
      en: "Elegant miniature for your henna ceremonies, decorated with dried flowers and personalized.",
      es: "Elegante miniatura para tus ceremonias de henna, decorada con flores secas y personalizada.",
      ar: "قارورة أنيقة لحفلات الحناء، مزينة بالزهور المجففة ومخصصة.",
    },
    features: {
      fr: ["Verre premium", "Fleurs séchées naturelles", "Tag personnalisé"],
      en: ["Premium glass", "Natural dried flowers", "Personalized tag"],
      es: ["Vidrio premium", "Flores secas naturales", "Etiqueta personalizada"],
      ar: ["زجاج فاخر", "زهور طبيعية مجففة", "بطاقة مخصصة"],
    },
  },
  {
    id: "peigne-bois-boheme",
    price: "35",
    images: ["/images/products/Accessoires/image1.jpeg","/images/products/Accessoires/image2.jpeg","/images/products/Accessoires/image3.jpeg","/images/products/Accessoires/image4.jpeg"],
    category: { fr: "Accessoires", en: "Accessories", es: "Accesorios", ar: "إكسسوارات" },
    title: { fr: "Peigne en Bois Bohème", en: "Boho Wooden Comb", es: "Peine de Madera Boho", ar: "مشط خشبي بوهيمي" },
    subtitle: { fr: "Nature & Douceur", en: "Nature & Softness", es: "Naturaleza y Suavidad", ar: "الطبيعة والنعومة" },
    description: {
      fr: "Peigne en bois naturel orné d'un ruban délicat et de fleurs pour une touche champêtre.",
      en: "Natural wooden comb adorned with a delicate ribbon and flowers for a rustic touch.",
      es: "Peine de madera natural adornado con una cinta delicada y flores para un toque rústico.",
      ar: "مشط خشبي طبيعي مزين بشريط رقيق وزهور للمسة ريفية.",
    },
    features: {
      fr: ["Bois écologique", "Décoration artisanale", "Style bohème"],
      en: ["Eco-friendly wood", "Handcrafted decoration", "Boho style"],
      es: ["Madera ecológica", "Decoración artesanal", "Estilo bohemio"],
      ar: ["خشب صديق للبيئة", "زينة يدوية", "طابع بوهيمي"],
    },
  },
  {
    id: "kit-henna-day",
    price: "85",
    images: ["/images/products/Sets Cadeaux/image1.jpeg","/images/products/Sets Cadeaux/image2.jpeg","/images/products/Sets Cadeaux/image3.jpeg",],
    category: { fr: "Sets Cadeaux", en: "Gift Sets", es: "Sets de Regalo", ar: "مجموعات هدايا" },
    title: { fr: "Kit Henna Day", en: "Henna Day Kit", es: "Kit Henna Day", ar: "مجموعة يوم الحناء" },
    subtitle: { fr: "Élégance & Tradition", en: "Elegance & Tradition", es: "Elegancia y Tradición", ar: "الأناقة والتقاليد" },
    description: {
      fr: "Kit complet incluant un chouchou en satin et un peigne en bois, idéal pour offrir à vos invités.",
      en: "Complete kit including a satin scrunchie and wooden comb, perfect for your guests.",
      es: "Kit completo que incluye un coletero de satén y un peine de madera, perfecto para tus invitados.",
      ar: "مجموعة متكاملة تضم ربطة شعر (سكراونشي) ساتان ومشط خشبي، مثالية كهدايا للضيوف.",
    },
    features: {
      fr: ["Satin de haute qualité", "Peigne en bois", "Carte personnalisée"],
      en: ["High quality satin", "Wooden comb", "Custom card"],
      es: ["Satén de alta calidad", "Peine de madera", "Tarjeta personalizada"],
      ar: ["ساتان عالي الجودة", "مشط خشبي", "بطاقة مخصصة"],
    },
  },
  {
    id: "eventail-bridal",
    price: "65",
    images: ["/images/products/Accessoires/image7.jpeg","/images/products/Accessoires/image6.jpeg","/images/products/Accessoires/image5.jpeg"],
    category: { fr: "Accessoires", en: "Accessories", es: "Accesorios", ar: "إكسسوارات" },
    title: { fr: "Éventail Bridal", en: "Bridal Fan", es: "Abanico Bridal", ar: "مروحة العروس" },
    subtitle: { fr: "Fraîcheur & Style", en: "Freshness & Style", es: "Frescura y Estilo", ar: "الانتعاش والأناقة" },
    description: {
      fr: "Éventail en bois délicat personnalisé pour les fêtes de mariage.",
      en: "Delicate wooden fan personalized for bridal showers.",
      es: "Delicado abanico de madera personalizado para despedidas de soltera.",
      ar: "مروحة خشبية رقيقة مخصصة لحفلات العروس.",
    },
    features: {
      fr: ["Bois gravé", "Fleur décorative", "Tassel inclus"],
      en: ["Engraved wood", "Decorative flower", "Tassel included"],
      es: ["Madera grabada", "Flor decorativa", "Borla incluida"],
      ar: ["خشب منقوش", "زهرة مزينة", "شرابة متضمنة"],
    },
  },
  {
    id: "coffret-naissance-miral",
    price: "55",
    images: ["/images/products/Naissance/image3.jpeg","/images/products/Naissance/image2.jpeg","/images/products/Naissance/image1.jpeg","/images/products/Naissance/image4.jpeg","/images/products/Naissance/image5.jpeg","/images/products/Naissance/image6.jpeg","/images/products/Naissance/image7.jpeg","/images/products/Naissance/image8.jpeg"],
    category: { fr: "Naissance", en: "Baby Shower", es: "Baby Shower", ar: "استقبال مولود" },
    title: { fr: "Coffret Naissance Miral", en: "Miral Baby Favor", es: "Detalle Bebé Miral", ar: "هدية مولود ميرال" },
    subtitle: { fr: "Douceur de bébé", en: "Baby sweetness", es: "Dulzura de bebé", ar: "نعومة المولود" },
    description: {
      fr: "Coffret de bienvenue pour bébé sur le thème biche, élégant et personnalisé.",
      en: "Baby welcome gift box with fawn theme, elegant and personalized.",
      es: "Caja de regalo de bienvenida para bebé con temática de cervatillo, elegante y personalizada.",
      ar: "صندوق هدايا استقبال مولود بطابع الغزال، أنيق ومخصص.",
    },
    features: {
      fr: ["Thème personnalisé", "Design élégant", "Finitions dorées"],
      en: ["Personalized theme", "Elegant design", "Golden finishes"],
      es: ["Temática personalizada", "Diseño elegante", "Acabados dorados"],
      ar: ["طابع مخصص", "تصميم أنيق", "لمسات ذهبية"],
    },
  },
  {
    id: "chocolat-papillon-sema",
    price: "40",
    images: ["/images/products/Chocolats/image3.jpeg","/images/products/Chocolats/image2.jpeg","/images/products/Chocolats/image1.jpeg"],
    category: { fr: "Chocolats", en: "Chocolates", es: "Chocolates", ar: "شوكولاتة" },
    title: { fr: "Chocolat Papillon Sema", en: "Butterfly Chocolate Sema", es: "Chocolate Mariposa Sema", ar: "شوكولاتة الفراشة سما" },
    subtitle: { fr: "Douceur délicate", en: "Delicate sweetness", es: "Dulzura delicada", ar: "حلاوة رقيقة" },
    description: {
      fr: "Chocolats raffinés décorés de papillons dorés, parfaits pour tous vos événements.",
      en: "Refined chocolates decorated with golden butterflies, perfect for all your events.",
      es: "Chocolates refinados decorados con mariposas doradas, perfectos para todos tus eventos.",
      ar: "شوكولاتة راقية مزينة بفراشات ذهبية، مثالية لجميع مناسباتكم.",
    },
    features: {
      fr: ["Papillon doré", "Ruban satin", "Personnalisable"],
      en: ["Golden butterfly", "Satin ribbon", "Customizable"],
      es: ["Mariposa dorada", "Cinta de satén", "Personalizable"],
      ar: ["فراشة ذهبية", "شريط ساتان", "قابلة للتخصيص"],
    },
  }
  /*
  {
    id: "boites-mariage-champetre",
    price: "70",
    images: ["/images/hero-image-1.jpeg"],
    category: { fr: "Mariage", en: "Wedding", es: "Boda", ar: "زفاف" },
    title: { fr: "Boîtes Mariage", en: "Wedding Favors", es: "Detalles de Boda", ar: "هدايا الزفاف" },
    subtitle: { fr: "Esprit champêtre", en: "Rustic spirit", es: "Espíritu rústico", ar: "طابع ريفي" },
    description: {
      fr: "Boîtes de mariage rustiques avec fleurs séchées, parfaites pour une touche authentique.",
      en: "Rustic wedding boxes with dried flowers, perfect for an authentic touch.",
      es: "Cajas de boda rústicas con flores secas, perfectas para un toque auténtico.",
      ar: "علب زفاف ريفية مع زهور مجففة، مثالية للمسة أصيلة.",
    },
    features: {
      fr: ["Fleurs séchées", "Design rustique", "Noms personnalisés"],
      en: ["Dried flowers", "Rustic design", "Custom names"],
      es: ["Flores secas", "Diseño rústico", "Nombres personalizados"],
      ar: ["زهور مجففة", "تصميم ريفي", "أسماء مخصصة"],
    },
  },
  */
];