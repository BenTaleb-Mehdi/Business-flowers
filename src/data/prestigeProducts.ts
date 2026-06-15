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
title: { 
  fr: "Flacons de Parfum Personnalisés", 
  en: "Personalized Perfume Bottles", 
  es: "Frascos de Perfume Personalizados", 
  ar: "قوارير عطر مخصصة" 
},    subtitle: { fr: "Cadeau d'invité raffiné", en: "Refined guest gift", es: "Regalo refinado", ar: "هدية ضيوف أنيقة" },
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
    id: "fioles-henna-serghina",
    price: "35",
    images: ["/images/products/Traditions/image1.jpeg"], // Dakhhel s-smiya dyal tsawira hna
    category: { fr: "Traditions", en: "Traditions", es: "Tradiciones", ar: "تقاليد" },
    title: { 
      fr: "Fioles en verre avec poudre de Henné et serghina", 
      en: "Glass Vials with Henna Powder and Serghina", 
      es: "Viales de vidrio con polvo de Henna y Serghina", 
      ar: "قوارير زجاجية بمسحوق الحناء والسرغينة" 
    },
    subtitle: { fr: "Authenticité marocaine", en: "Moroccan authenticity", es: "Autenticidad marroquí", ar: "أصالة مغربية" },
    description: {
      fr: "De magnifiques petites fioles en verre remplies de poudre de henné traditionnelle et de serghina parfumée. Un souvenir authentique et parfumé pour vos cérémonies.",
      en: "Beautiful small glass vials filled with traditional henna powder and scented serghina. An authentic and fragrant souvenir for your ceremonies.",
      es: "Hermosos pequeños viales de vidrio llenos de polvo de henna tradicional y serghina perfumada. Un recuerdo auténtico y fragante para tus ceremonias.",
      ar: "قوارير زجاجية صغيرة ورائعة مليئة بمسحوق الحناء التقليدي والسرغينة المعطرة. تذكار أصيل يعبق بالروائح الزكية لمناسباتكم.",
    },
    features: {
      fr: ["Verre transparent élégant", "Henné naturel & Serghina", "Souvenir 100% traditionnel"],
      en: ["Elegant clear glass", "Natural Henna & Serghina", "100% traditional souvenir"],
      es: ["Elegante vidrio transparente", "Henna natural y Serghina", "Recuerdo 100% tradicional"],
      ar: ["زجاج شفاف أنيق", "حناء طبيعية وسرغينة", "تذكار تقليدي بامتياز"],
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
    images: [
      "/images/products/Sets Cadeaux/image1.jpeg",
      "/images/products/Sets Cadeaux/image2.jpeg",
      "/images/products/Sets Cadeaux/image3.jpeg",
    ],
    category: { fr: "Sets Cadeaux", en: "Gift Sets", es: "Sets de Regalo", ar: "مجموعات هدايا" },
    title: { fr: "Kit Henna Day", en: "Henna Day Kit", es: "Kit Henna Day", ar: "مجموعة يوم الحناء" },
    subtitle: { fr: "Élégance & Tradition", en: "Elegance & Tradition", es: "Elegancia y Tradición", ar: "الأناقة والتقاليد" },
    description: {
      fr: "Un ensemble raffiné présenté sur une carte personnalisée, comprenant un élégant chouchou en satin . Le cadeau d'invité parfait pour sublimer votre journée de henné.",
      en: "A refined set presented on a personalized card, featuring an elegant satin scrunchie . The perfect guest favor to elevate your henna day.",
      es: "Un conjunto refinado presentado en una tarjeta personalizada, que incluye un elegante coletero de satén. El detalle perfecto para realzar tu día de henna.",
      ar: "مجموعة راقية مقدمة على بطاقة مخصصة، تتضمن ربطة شعر أنيقة من الساتان . هدية الضيوف المثالية لتخليد ذكرى يوم الحناء الخاص بك.",
    },
    features: {
      fr: ["Chouchou en satin soyeux", "Carte de présentation sur mesure"],
      en: ["Silky satin scrunchie", "Custom presentation card"],
      es: ["Coletero de satén sedoso", "Tarjeta de presentación a medida"],
      ar: ["ربطة شعر من الساتان الحريري", "بطاقة تقديم مخصصة بالكامل"],
    },
  },
  {
    id: "eventail-bridal",
    price: "65",
    images: ["/images/products/Accessoires/image7.jpeg","/images/products/Accessoires/image6.jpeg","/images/products/Accessoires/image5.jpeg","/images/products/Accessoires/image8.jpeg"],
    category: { fr: "Accessoires", en: "Accessories", es: "Accesorios", ar: "إكسسوارات" },
   title: { 
  fr: "Carte de remerciement avec Éventail de bois", 
  en: "Thank You Card with Wooden Fan", 
  es: "Tarjeta de Agradecimiento con Abanico de Madera", 
  ar: "بطاقة شكر مع مروحة خشبية" 
},
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
    id: "chocolat-papillon-sema",
    price: "40",
    images: ["/images/products/Chocolats/image3.jpeg","/images/products/Chocolats/image2.jpeg","/images/products/Chocolats/image1.jpeg"],
    category: { fr: "Chocolats", en: "Chocolates", es: "Chocolates", ar: "شوكولاتة" },
title: { 
  fr: "Chocolat personnalisé Spéciale touche pour chaque occasion", 
  en: "Personalized Chocolate: A Special Touch for Every Occasion", 
  es: "Chocolate Personalizado: Un Toque Especial para Cada Ocasión", 
  ar: "شوكولاتة مخصصة: لمسة خاصة لكل مناسبة" 
},    subtitle: { fr: "Douceur délicate", en: "Delicate sweetness", es: "Dulzura delicada", ar: "حلاوة رقيقة" },
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
  },
  
  {
    id: "boites-mariage-champetre",
    price: "70",
    images: ["/images/products/Dragées/image1.jpeg","/images/products/Dragées/image2.jpeg"],
    category: { fr: "Mariage", en: "Wedding", es: "Boda", ar: "زفاف" },
    title: { 
      fr: "Dragées Personnalisées", 
      en: "Personalized Dragées", 
      es: "Confites Personalizados", 
      ar: "دراجيه (ملبس) مخصصة" 
    },
    subtitle: { fr: "Esprit champêtre", en: "Rustic spirit", es: "Espíritu rústico", ar: "طابع ريفي" },
    description: {
      fr: "Boîtes de dragées rustiques avec fleurs séchées, parfaites pour une touche authentique.",
      en: "Rustic dragées boxes with dried flowers, perfect for an authentic touch.",
      es: "Cajas de confites rústicas con flores secas, perfectas para un toque auténtico.",
      ar: "علب دراجيه ريفية مع زهور مجففة، مثالية للمسة أصيلة.",
    },
    features: {
      fr: ["Fleurs séchées", "Design rustique", "Noms personnalisés"],
      en: ["Dried flowers", "Rustic design", "Custom names"],
      es: ["Flores secas", "Diseño rústico", "Nombres personalizados"],
      ar: ["زهور مجففة", "تصميم ريفي", "أسماء مخصصة"],
    },
  },
  {
    id: "carte-remerciement-chocolat",
    price: "45",
    images: ["/images/products/Cartes/image1.jpeg","/images/products/Cartes/image2.jpeg","/images/products/Cartes/image3.jpeg","/images/products/Cartes/image5.jpeg","/images/products/Cartes/image6.jpeg"], // Dakhhel s-smiya dyal tsawira hna
    category: { fr: "Cartes", en: "Cards", es: "Tarjetas", ar: "بطاقات" },
    title: { 
      fr: "Carte de remerciement élégante avec chocolat", 
      en: "Elegant Thank You Card with Chocolate", 
      es: "Elegante Tarjeta de Agradecimiento con Chocolate", 
      ar: "بطاقة شكر أنيقة مع شوكولاتة" 
    },
    subtitle: { fr: "Gourmandise & Gratitude", en: "Sweetness & Gratitude", es: "Dulzura y Gratitud", ar: "حلاوة وامتنان" },
    description: {
      fr: "Une carte de remerciement au design élégant, accompagnée d'un délicieux chocolat personnalisé pour ravir vos invités.",
      en: "An elegantly designed thank you card, accompanied by a delicious personalized chocolate to delight your guests.",
      es: "Una tarjeta de agradecimiento con un diseño elegante, acompañada de un delicioso chocolate personalizado para deleitar a tus invitados.",
      ar: "بطاقة شكر بتصميم أنيق، مرفقة بقطعة شوكولاتة لذيذة ومخصصة لإسعاد ضيوفكم.",
    },
    features: {
      fr: ["Papier de qualité", "Chocolat premium", "Design personnalisable"],
      en: ["High-quality paper", "Premium chocolate", "Customizable design"],
      es: ["Papel de alta calidad", "Chocolate premium", "Diseño personalizable"],
      ar: ["ورق عالي الجودة", "شوكولاتة فاخرة", "تصميم قابل للتخصيص"],
    },
  },
  {
    id: "bougie-parfumee-rose",
    price: "50",
    images: ["/images/products/Bougies/image1.jpeg"], 
    category: { fr: "Bougies", en: "Candles", es: "Velas", ar: "شموع" },
    title: { 
      fr: "Bougie parfumée en forme rose", 
      en: "Rose-shaped Scented Candle", 
      es: "Vela perfumada en forma de rosa", 
      ar: "شمعة معطرة على شكل وردة" 
    },
    subtitle: { fr: "Ambiance romantique", en: "Romantic atmosphere", es: "Ambiente romántico", ar: "أجواء رومانسية" },
    description: {
      fr: "Magnifique bougie parfumée sculptée en forme de rose, avec des détails soignés. Un cadeau d'invité parfait pour embaumer leurs intérieurs.",
      en: "Beautiful scented candle sculpted in the shape of a rose, with careful details. A perfect guest gift to fragrance their homes.",
      es: "Hermosa vela perfumada esculpida en forma de rosa, con detalles cuidados. Un regalo perfecto para perfumar los hogares de tus invitados.",
      ar: "شمعة معطرة جميلة منحوتة بدقة على شكل وردة. هدية مثالية لتعطير منازل ضيوفكم.",
    },
    features: {
      fr: ["Cire naturelle", "Parfum délicat", "Design floral détaillé"],
      en: ["Natural wax", "Delicate scent", "Detailed floral design"],
      es: ["Cera natural", "Aroma delicado", "Diseño floral detallado"],
      ar: ["شمع طبيعي", "عطر رقيق", "تصميم زهري دقيق"],
    },
  },
  {
    id: "bouteille-miel-elegante",
    price: "55",
    images: ["/images/products/Miel/image1.jpeg"], 
    category: { fr: "Miel", en: "Honey", es: "Miel", ar: "عسل" },
    title: { 
      fr: "Bouteille de miel avec un design élégant", 
      en: "Honey Bottle with Elegant Design", 
      es: "Botella de miel con diseño elegante", 
      ar: "قارورة عسل بتصميم أنيق" 
    },
    subtitle: { fr: "Douceur dorée", en: "Golden sweetness", es: "Dulzura dorada", ar: "حلاوة ذهبية" },
    description: {
      fr: "Une jolie petite bouteille remplie d'un miel pur et délicieux, ornée d'un ruban et d'une étiquette personnalisée. Un cadeau naturel et raffiné pour remercier vos invités.",
      en: "A pretty little bottle filled with pure, delicious honey, adorned with a ribbon and a personalized tag. A natural and refined gift to thank your guests.",
      es: "Una bonita botellita llena de miel pura y deliciosa, adornada con una cinta y una etiqueta personalizada. Un regalo natural y refinado para agradecer a tus invitados.",
      ar: "قارورة صغيرة وجميلة مليئة بالعسل الصافي واللذيذ، مزينة بشريط وبطاقة مخصصة. هدية طبيعية وراقية لشكر ضيوفكم.",
    },
    features: {
      fr: ["Miel pur", "Design élégant", "Étiquette personnalisable"],
      en: ["Pure honey", "Elegant design", "Customizable tag"],
      es: ["Miel pura", "Diseño elegante", "Etiqueta personalizable"],
      ar: ["عسل صافي", "تصميم أنيق", "بطاقة قابلة للتخصيص"],
    },
  },
  {
    id: "boite-cadeau-bougie-bubble",
    price: "60",
    images: ["/images/products/Coffrets/image1.jpeg"], // Dakhhel s-smiya dyal tsawira hna
    category: { fr: "Coffrets", en: "Gift Boxes", es: "Cajas de Regalo", ar: "صناديق هدايا" },
    title: { 
      fr: "Boîte Cadeau Bougie Bubble décorée de fleurs séchées", 
      en: "Gift Box with Bubble Candle and Dried Flowers", 
      es: "Caja de Regalo con Vela Bubble y Flores Secas", 
      ar: "صندوق هدية مع شمعة فقاعات وزهور مجففة" 
    },
    subtitle: { fr: "Charme chic & bohème", en: "Chic & boho charm", es: "Encanto chic y bohemio", ar: "سحر أنيق وبوهيمي" },
    description: {
      fr: "Un magnifique coffret cadeau contenant une bougie tendance en forme de bulles (bubble candle), délicatement ornée de fleurs séchées pour une touche unique et chaleureuse.",
      en: "A beautiful gift box containing a trendy bubble candle, delicately adorned with dried flowers for a unique and warm touch.",
      es: "Una hermosa caja de regalo que contiene una vela de tendencia en forma de burbujas, delicadamente adornada con flores secas para un toque único y cálido.",
      ar: "صندوق هدايا رائع يحتوي على شمعة فقاعات عصرية، مزينة بعناية بزهور مجففة لتضفي لمسة دافئة وفريدة من نوعها.",
    },
    features: {
      fr: ["Bougie forme Bubble", "Fleurs séchées naturelles", "Coffret prêt à offrir"],
      en: ["Bubble shaped candle", "Natural dried flowers", "Ready-to-gift box"],
      es: ["Vela en forma de burbuja", "Flores secas naturales", "Caja lista para regalar"],
      ar: ["شمعة بشكل فقاعات", "زهور طبيعية مجففة", "صندوق جاهز للإهداء"],
    },
  },
  {
    id: "chocolat-personnalise-crochet",
    price: "45",
    images: ["/images/products/Chocolats/image5.jpeg"], // Dakhhel s-smiya dyal tsawira hna
    category: { fr: "Chocolats", en: "Chocolates", es: "Chocolates", ar: "شوكولاتة" },
    title: { 
      fr: "Chocolat personnalisé décoré en crochet", 
      en: "Personalized Chocolate Decorated with Crochet", 
      es: "Chocolate Personalizado Decorado con Crochet", 
      ar: "شوكولاتة مخصصة مزينة بالكروشيه" 
    },
    subtitle: { fr: "Touche artisanale", en: "Artisanal touch", es: "Toque artesanal", ar: "لمسة حرفية" },
    description: {
      fr: "Un délicieux chocolat enveloppé avec soin et sublimé par de magnifiques décorations en crochet fait main. Le cadeau parfait mêlant gourmandise et artisanat.",
      en: "A delicious chocolate carefully wrapped and enhanced by beautiful handmade crochet decorations. The perfect gift blending sweetness and craftsmanship.",
      es: "Un delicioso chocolate envuelto con cuidado y realzado por hermosas decoraciones de crochet hechas a mano. El regalo perfecto que mezcla dulzura y artesanía.",
      ar: "شوكولاتة لذيذة مغلفة بعناية ومزينة بتفاصيل رائعة من الكروشيه المصنوع يدوياً. الهدية المثالية التي تجمع بين الحلاوة والحرفية التقليدية.",
    },
    features: {
      fr: ["Crochet fait main", "Chocolat de qualité", "Personnalisation sur mesure"],
      en: ["Handmade crochet", "High quality chocolate", "Custom personalization"],
      es: ["Crochet hecho a mano", "Chocolate de alta calidad", "Personalización a medida"],
      ar: ["كروشيه مصنوع يدوياً", "شوكولاتة عالية الجودة", "تخصيص حسب الطلب"],
    },
  },
  {
    id: "carte-remerciement-parfum",
    price: "55",
    images: ["/images/products/Cartes/image4.jpeg"], // Dakhhel s-smiya dyal tsawira hna
    category: { fr: "Cartes", en: "Cards", es: "Tarjetas", ar: "بطاقات" },
    title: { 
      fr: "Carte de remerciement avec bouteille de parfum", 
      en: "Thank You Card with Perfume Bottle", 
      es: "Tarjeta de Agradecimiento con Botella de Perfume", 
      ar: "بطاقة شكر مع قارورة عطر" 
    },
    subtitle: { fr: "Élégance parfumée", en: "Scented elegance", es: "Elegancia perfumada", ar: "أناقة معطرة" },
    description: {
      fr: "Une carte de remerciement raffinée accompagnée d'une miniature de parfum élégante. Un souvenir inoubliable pour remercier vos invités avec classe.",
      en: "A refined thank you card accompanied by an elegant miniature perfume. An unforgettable souvenir to thank your guests with class.",
      es: "Una refinada tarjeta de agradecimiento acompañada de una elegante miniatura de perfume. Un recuerdo inolvidable para agradecer a tus invitados con clase.",
      ar: "بطاقة شكر راقية مرفقة بقارورة عطر صغيرة وأنيقة. تذكار لا يُنسى لشكر ضيوفكم بأسلوب مميز وفخم.",
    },
    features: {
      fr: ["Carte personnalisée", "Miniature de parfum", "Cadeau luxueux"],
      en: ["Personalized card", "Miniature perfume", "Luxurious gift"],
      es: ["Tarjeta personalizada", "Miniatura de perfume", "Regalo lujoso"],
      ar: ["بطاقة مخصصة", "قارورة عطر صغيرة", "هدية فاخرة"],
    },
  },


  
];