// ============================================================
// Rich Blog Article Data — 4 Languages
// Used by /blog (list) and /blog/[slug] (detail)
// ============================================================

import { BLOG_IMAGES } from "./content";

export interface ArticleSection {
  heading: string;
  body: string;
}

export interface BlogArticle {
  id: number;
  slug: string;
  category: { fr: string; en: string; es: string; ar: string };
  date: { fr: string; en: string; es: string; ar: string };
  readTime: number; // minutes
  author: string;
  image: string;
  title: { fr: string; en: string; es: string; ar: string };
  intro: { fr: string; en: string; es: string; ar: string };
  sections: {
    fr: ArticleSection[];
    en: ArticleSection[];
    es: ArticleSection[];
    ar: ArticleSection[];
  };
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 1,
    slug: "tendances-florales-mariages-2026",
    category: {
      fr: "Inspiration",
      en: "Inspiration",
      es: "Inspiración",
      ar: "إلهام",
    },
    date: {
      fr: "12 Juin 2026",
      en: "June 12, 2026",
      es: "12 de Junio 2026",
      ar: "١٢ يونيو ٢٠٢٦",
    },
    readTime: 5,
    author: "Maison Layal",
    image: BLOG_IMAGES.trends,
    title: {
      fr: "Les tendances florales pour les mariages de 2026",
      en: "Floral Trends for 2026 Weddings",
      es: "Tendencias florales para bodas de 2026",
      ar: "أحدث صيحات الزهور لحفلات زفاف 2026",
    },
    intro: {
      fr: "L'année 2026 inaugure une nouvelle ère florale — une fusion délicate entre l'héritage marocain et l'esthétique minimaliste contemporaine. Nos créateurs vous dévoilent les grandes tendances qui définiront les mariages de cette saison.",
      en: "2026 ushers in a new floral era — a delicate fusion between Moroccan heritage and contemporary minimalist aesthetics. Our designers reveal the major trends that will define weddings this season.",
      es: "2026 inaugura una nueva era floral — una delicada fusión entre el patrimonio marroquí y la estética minimalista contemporánea. Nuestros diseñadores revelan las principales tendencias que definirán las bodas de esta temporada.",
      ar: "يفتح عام 2026 عهداً زهرياً جديداً — مزيجاً رقيقاً بين الإرث المغربي والجماليات المعاصرة البسيطة. يكشف لنا مصمموّنا عن أبرز الاتجاهات التي ستحدد حفلات زفاف هذا الموسم.",
    },
    sections: {
      fr: [
        {
          heading: "Le retour des tons terracotta et saumon",
          body: "La palette terracotta s'impose cette saison avec une intensité nouvelle. Le saumon pâle, le corail profond et le brun chaud s'associent à des feuillages argentés pour créer des compositions à la fois modernes et intemporelles. Ces teintes évoquent les couchers de soleil sur les médinas marocaines et apportent une chaleur incomparable aux réceptions en plein air.",
        },
        {
          heading: "La fleur séchée : élégance pérenne",
          body: "Loin d'être éphémère, la fleur séchée s'est imposée comme une tendance durable. Pampas, limonium, lavande et roses délicatement déshydratées trouvent leur place dans les bouquets de mariée et les centres de table. Leur avantage ? Ils peuvent être conservés comme souvenirs, bien au-delà de la fête.",
        },
        {
          heading: "Le bouquet asymétrique : liberté artistique",
          body: "Fini les bouquets parfaitement symétriques. En 2026, la tendance est au bouquet structuré mais organique — des tiges de différentes longueurs, des textures contrastées, une composition qui semble à la fois naturelle et intentionnelle. Nos artisans maîtrisent cet équilibre délicat qui donne l'impression d'une cueillette champêtre soigneusement mise en scène.",
        },
        {
          heading: "L'intégration des herbes aromatiques",
          body: "Romarin, eucalyptus, thym citronné et menthe fraîche ne sont plus réservés à la cuisine. Intégrés aux compositions florales, ils ajoutent une dimension olfactive unique à votre décoration de mariage. Imaginez entrer dans une salle où le parfum des fleurs se mêle aux senteurs méditerranéennes — une expérience sensorielle inoubliable.",
        },
      ],
      en: [
        {
          heading: "The Return of Terracotta and Salmon Tones",
          body: "The terracotta palette is asserting itself this season with new intensity. Pale salmon, deep coral, and warm brown combine with silver foliage to create compositions that are both modern and timeless. These hues evoke sunsets over Moroccan medinas and bring incomparable warmth to outdoor receptions.",
        },
        {
          heading: "Dried Flowers: Enduring Elegance",
          body: "Far from being ephemeral, dried flowers have established themselves as a lasting trend. Pampas grass, limonium, lavender, and delicately dehydrated roses find their place in bridal bouquets and table centerpieces. Their advantage? They can be preserved as keepsakes, long after the celebration.",
        },
        {
          heading: "The Asymmetric Bouquet: Artistic Freedom",
          body: "Gone are perfectly symmetrical bouquets. In 2026, the trend is toward structured yet organic arrangements — stems of varying lengths, contrasting textures, a composition that feels both natural and intentional. Our artisans master this delicate balance that gives the impression of a carefully staged countryside gathering.",
        },
        {
          heading: "Integrating Aromatic Herbs",
          body: "Rosemary, eucalyptus, lemon thyme, and fresh mint are no longer reserved for the kitchen. Integrated into floral compositions, they add a unique olfactory dimension to your wedding décor. Imagine entering a hall where the scent of flowers mingles with Mediterranean fragrances — an unforgettable sensory experience.",
        },
      ],
      es: [
        {
          heading: "El regreso de los tonos terracota y salmón",
          body: "La paleta terracota se impone esta temporada con nueva intensidad. El salmón pálido, el coral profundo y el marrón cálido se combinan con follaje plateado para crear composiciones a la vez modernas e intemporales. Estos tonos evocan los atardeceres sobre las medinas marroquíes y aportan un calor incomparable a las recepciones al aire libre.",
        },
        {
          heading: "La flor seca: elegancia perenne",
          body: "Lejos de ser efímeras, las flores secas se han establecido como una tendencia duradera. La hierba de pampas, el limonium, la lavanda y las rosas delicadamente deshidratadas encuentran su lugar en los ramos de novia y en los centros de mesa. Su ventaja: pueden conservarse como recuerdos mucho después de la celebración.",
        },
        {
          heading: "El ramo asimétrico: libertad artística",
          body: "Se acabaron los ramos perfectamente simétricos. En 2026, la tendencia es hacia los arreglos estructurados pero orgánicos — tallos de diferentes longitudes, texturas contrastantes, una composición que parece a la vez natural e intencional. Nuestros artesanos dominan este delicado equilibrio.",
        },
        {
          heading: "La integración de hierbas aromáticas",
          body: "El romero, el eucalipto, el tomillo limón y la menta fresca ya no se reservan para la cocina. Integrados en las composiciones florales, añaden una dimensión olfativa única a la decoración de tu boda. Imagina entrar en una sala donde el perfume de las flores se mezcla con los aromas mediterráneos.",
        },
      ],
      ar: [
        {
          heading: "عودة ألوان التيراكوتا والسلمون",
          body: "تفرض لوحة التيراكوتا نفسها هذا الموسم بكثافة جديدة. يتحد السلمون الشاحب والمرجاني العميق والبني الدافئ مع الأوراق الفضية لإنشاء تركيبات عصرية وخالدة في آنٍ واحد. تستحضر هذه الألوان غروب الشمس على المدن المغربية العتيقة.",
        },
        {
          heading: "الأزهار المجففة: أناقة دائمة",
          body: "بعيداً عن أن تكون عابرة، أثبتت الأزهار المجففة أنها اتجاه دائم. تجد أعشاب البامباس والليمونيوم والخزامى والورد المجفف بعناية مكانها في باقات العرائس ومراكز المائدة. ميزتها؟ يمكن الاحتفاظ بها ذكرى لأوقات طويلة بعد الاحتفال.",
        },
        {
          heading: "الباقة غير المتماثلة: الحرية الفنية",
          body: "ودّعنا الباقات المتناسقة تماماً. في عام 2026، الاتجاه نحو التنسيقات المهيكلة والعضوية — سيقان بأطوال متفاوتة وأنسجة متباينة وتركيبة تبدو طبيعية ومقصودة في آنٍ واحد. يتقن حرفيونا هذا التوازن الدقيق.",
        },
        {
          heading: "دمج الأعشاب العطرية",
          body: "لم يعد إكليل الجبل والأوكالبتوس وزعتر الليمون والنعناع الطازج حكراً على المطبخ. مدمجةً في التركيبات الزهرية، تضيف بُعداً شمياً فريداً لديكور حفل زفافك. تخيل دخول قاعة تمتزج فيها عطور الأزهار مع روائح البحر المتوسط.",
        },
      ],
    },
  },

  {
    id: 2,
    slug: "comment-choisir-dragees-mariage",
    category: {
      fr: "Guide",
      en: "Guide",
      es: "Guía",
      ar: "دليل",
    },
    date: {
      fr: "5 Juin 2026",
      en: "June 5, 2026",
      es: "5 de Junio 2026",
      ar: "٥ يونيو ٢٠٢٦",
    },
    readTime: 6,
    author: "Maison Layal",
    image: BLOG_IMAGES.dragees,
    title: {
      fr: "Comment choisir ses dragées de mariage ?",
      en: "How to Choose Your Wedding Dragées?",
      es: "¿Cómo elegir los confites de boda?",
      ar: "كيف تختار حلوى الملبس لحفل زفافك؟",
    },
    intro: {
      fr: "Les dragées sont bien plus qu'une simple friandise — elles sont le souvenir que vos invités emporteront avec eux. Couleur, saveur, emballage... Chaque détail compte. Notre guide vous aide à faire le choix parfait.",
      en: "Dragées are far more than a simple treat — they are the memory your guests will take with them. Color, flavor, packaging... every detail matters. Our guide helps you make the perfect choice.",
      es: "Los confites son mucho más que un simple dulce — son el recuerdo que tus invitados se llevarán consigo. Color, sabor, presentación... cada detalle importa. Nuestra guía te ayuda a elegir a la perfección.",
      ar: "الملبس أكثر بكثير من مجرد حلوى — إنه الذكرى التي سيحملها ضيوفك معهم. اللون والمذاق والتغليف... كل التفاصيل مهمة. دليلنا يساعدك على اتخاذ الخيار المثالي.",
    },
    sections: {
      fr: [
        {
          heading: "Harmonie des couleurs avec votre thème",
          body: "La première règle est simple : vos dragées doivent s'inscrire dans la palette chromatique de votre mariage. Pour un mariage en blanc et or, optez pour des dragées nacrées ou dorées. Pour un mariage champêtre, les tons rosés, lavande et vert sauge créeront une harmonie visuelle parfaite. N'hésitez pas à mélanger deux ou trois teintes complémentaires.",
        },
        {
          heading: "Le choix de la confiserie : amande ou chocolat ?",
          body: "La dragée traditionnelle contient une amande entière enrobée de sucre — un symbole de fertilité et de prospérité dans la tradition marocaine. Mais les tendances actuelles ouvrent de nouvelles possibilités : noisettes, amandes pralinées, ganaches au chocolat noir, ou même des variétés sans gluten. Chez Maison Layal, nous proposons des dégustations privées pour vous aider à choisir.",
        },
        {
          heading: "L'emballage : votre première impression",
          body: "Un emballage soigné transforme une simple dragée en souvenir précieux. Petits sachets en tulle, boîtes rigides personnalisées, pochettes en satin brodées... L'emballage doit refléter l'esprit de votre mariage. Nous recommandons d'y intégrer un élément personnalisé : vos initiales en dorure, un ruban aux couleurs de votre mariage, ou une étiquette calligraphiée.",
        },
        {
          heading: "La quantité : comment calculer ?",
          body: "Prévoyez en moyenne 5 à 7 dragées par invité, soit environ 50 à 70 grammes par personne. Pour un mariage de 100 personnes, comptez entre 5 et 7 kg de dragées. Nous vous conseillons de commander 10% supplémentaires pour anticiper les imprévus. Nos équipes peuvent vous préparer un devis personnalisé en fonction de vos besoins.",
        },
      ],
      en: [
        {
          heading: "Color Harmony with Your Theme",
          body: "The first rule is simple: your dragées should fit within your wedding's color palette. For a white and gold wedding, opt for pearlescent or golden dragées. For a rustic wedding, pink, lavender, and sage green tones will create perfect visual harmony. Don't hesitate to mix two or three complementary shades.",
        },
        {
          heading: "Choosing the Confection: Almond or Chocolate?",
          body: "The traditional dragée contains a whole almond coated in sugar — a symbol of fertility and prosperity in Moroccan tradition. But current trends open new possibilities: hazelnuts, praline almonds, dark chocolate ganaches, or even gluten-free varieties. At Maison Layal, we offer private tastings to help you choose.",
        },
        {
          heading: "Packaging: Your First Impression",
          body: "Careful packaging transforms a simple dragée into a precious keepsake. Small tulle pouches, personalized rigid boxes, embroidered satin pochettes... The packaging should reflect the spirit of your wedding. We recommend incorporating a personalized element: your initials in gilding, a ribbon in your wedding colors, or a calligraphed label.",
        },
        {
          heading: "Quantity: How to Calculate?",
          body: "Plan for an average of 5 to 7 dragées per guest, approximately 50 to 70 grams per person. For a 100-person wedding, count 5 to 7 kg of dragées. We advise ordering 10% extra to anticipate unforeseen needs. Our teams can prepare a personalized quote based on your requirements.",
        },
      ],
      es: [
        {
          heading: "Armonía de colores con tu tema",
          body: "La primera regla es sencilla: los confites deben encajar en la paleta cromática de tu boda. Para una boda en blanco y dorado, opta por confites nacarados o dorados. Para una boda campestre, los tonos rosados, lavanda y verde salvia crearán una armonía visual perfecta.",
        },
        {
          heading: "Elegir la confitería: ¿almendra o chocolate?",
          body: "El confite tradicional contiene una almendra entera cubierta de azúcar — un símbolo de fertilidad y prosperidad en la tradición marroquí. Pero las tendencias actuales abren nuevas posibilidades: avellanas, almendras praliné, ganaches de chocolate negro, o incluso variedades sin gluten.",
        },
        {
          heading: "El envase: tu primera impresión",
          body: "Un envoltorio cuidado transforma un simple confite en un recuerdo preciado. Pequeñas bolsas de tul, cajas rígidas personalizadas, bolsitas de satén bordadas... El packaging debe reflejar el espíritu de tu boda. Recomendamos incluir un elemento personalizado: tus iniciales en dorado, un lazo en los colores de tu boda, o una etiqueta caligráfica.",
        },
        {
          heading: "La cantidad: ¿cómo calcularla?",
          body: "Prevé una media de 5 a 7 confites por invitado, es decir, unos 50 a 70 gramos por persona. Para una boda de 100 personas, cuenta entre 5 y 7 kg de confites. Te aconsejamos pedir un 10% extra para imprevistos. Nuestros equipos pueden prepararte un presupuesto personalizado.",
        },
      ],
      ar: [
        {
          heading: "تناسق الألوان مع موضوع حفلتك",
          body: "القاعدة الأولى بسيطة: يجب أن يتلاءم الملبس مع لوحة ألوان زفافك. لحفل أبيض وذهبي، اختر ملبساً لؤلئياً أو ذهبياً. لحفل ريفي، تخلق ألوان الوردي والخزامى والأخضر المريمي انسجاماً بصرياً مثالياً.",
        },
        {
          heading: "اختيار الحلوى: لوز أم شوكولاتة؟",
          body: "يحتوي الملبس التقليدي على حبة لوز كاملة مغطاة بالسكر — رمز للخصوبة والازدهار في التقاليد المغربية. لكن الاتجاهات الحالية تفتح إمكانيات جديدة: البندق ولوز البرالين وغاناش الشوكولاتة الداكنة وحتى أنواع خالية من الغلوتين.",
        },
        {
          heading: "التغليف: انطباعك الأول",
          body: "يحوّل التغليف العناية حبة الملبس البسيطة إلى تذكار ثمين. أكياس صغيرة من التول وصناديق صلبة مخصصة وحقائب الساتان المطرزة... يجب أن يعكس التغليف روح زفافك. نوصي بدمج عنصر مخصص: أحرفك الأولى بالتذهيب أو شريط بألوان حفلتك.",
        },
        {
          heading: "الكمية: كيف تحسبها؟",
          body: "خطط لمتوسط ٥ إلى ٧ حبات ملبس لكل ضيف، أي ما يقارب ٥٠ إلى ٧٠ غراماً للشخص. لحفل من ١٠٠ شخص، احسب ٥ إلى ٧ كيلوغرامات من الملبس. ننصحك بطلب ١٠٪ إضافية لمواجهة المتطلبات غير المتوقعة.",
        },
      ],
    },
  },

  {
    id: 3,
    slug: "art-invitation-marocaine",
    category: {
      fr: "Tradition",
      en: "Tradition",
      es: "Tradición",
      ar: "تراث",
    },
    date: {
      fr: "28 Mai 2026",
      en: "May 28, 2026",
      es: "28 de Mayo 2026",
      ar: "٢٨ مايو ٢٠٢٦",
    },
    readTime: 7,
    author: "Maison Layal",
    image: BLOG_IMAGES.invitation,
    title: {
      fr: "L'art de l'invitation marocaine",
      en: "The Art of the Moroccan Invitation",
      es: "El arte de la invitación marroquí",
      ar: "فن الدعوة المغربية",
    },
    intro: {
      fr: "Dans la culture marocaine, le faire-part de mariage n'est pas un simple carton d'invitation — c'est la première manifestation du raffinement et du goût du couple. Découvrez l'histoire, les codes et les innovations qui font de l'invitation marocaine un véritable objet d'art.",
      en: "In Moroccan culture, the wedding invitation is not just a simple card — it is the first manifestation of the couple's refinement and taste. Discover the history, codes, and innovations that make the Moroccan invitation a true work of art.",
      es: "En la cultura marroquí, la invitación de boda no es una simple tarjeta — es la primera manifestación del refinamiento y buen gusto de la pareja. Descubre la historia, los códigos y las innovaciones que hacen de la invitación marroquí una verdadera obra de arte.",
      ar: "في الثقافة المغربية، دعوة الزفاف ليست مجرد بطاقة بسيطة — إنها أول تجلٍّ لذوق الزوجين وأناقتهما. اكتشف التاريخ والرموز والابتكارات التي تجعل الدعوة المغربية عملاً فنياً حقيقياً.",
    },
    sections: {
      fr: [
        {
          heading: "Un héritage calligraphique millénaire",
          body: "La tradition de l'invitation calligraphiée remonte à plusieurs siècles dans l'artisanat marocain. Les maîtres calligraphes de Fès et Marrakech ont longtemps été les gardiens de cet art délicat. Aujourd'hui, cette tradition se réinvente : la calligraphie arabe côtoie la typographie latine contemporaine pour créer des faire-part bilingues d'une beauté rare.",
        },
        {
          heading: "Les matériaux nobles : papier et textiles",
          body: "La qualité du support est primordiale. Le papier coton 300g, le vélin crème ou le papier texturé à la main confèrent une sensation de luxe dès la première touche. Certains couples optent pour des invitations en tissu brodé — une innovation qui marie l'artisanat textile marocain à la modernité. Les finitions comptent autant que le papier : dorure à chaud, embossage, découpe laser.",
        },
        {
          heading: "La structure de l'invitation marocaine",
          body: "L'invitation marocaine traditionnelle comprend plusieurs éléments distincts : le faire-part principal, le carton de réponse, le plan d'accès, et parfois un fascicule présentant le programme de la cérémonie. Chaque élément est soigneusement coordonné dans un ensemble cohérent. L'enveloppe elle-même est considérée comme un élément de design à part entière.",
        },
        {
          heading: "Les tendances contemporaines",
          body: "En 2026, les couples marocains n'hésitent plus à mélanger les influences. L'arabesque traditionnelle coexiste avec le minimalisme scandinave, le zellige géométrique dialogue avec la typographie sans-serif. Chez Maison Layal, nous créons des invitations sur mesure qui honorent la tradition tout en affirmant une esthétique résolument moderne et personnelle.",
        },
      ],
      en: [
        {
          heading: "A Millennial Calligraphic Heritage",
          body: "The tradition of the calligraphed invitation dates back several centuries in Moroccan craftsmanship. The master calligraphers of Fez and Marrakech have long been the guardians of this delicate art. Today, this tradition is reinventing itself: Arabic calligraphy stands alongside contemporary Latin typography to create bilingual invitations of rare beauty.",
        },
        {
          heading: "Noble Materials: Paper and Textiles",
          body: "The quality of the medium is paramount. 300g cotton paper, cream vellum, or handmade textured paper confer a sense of luxury from the very first touch. Some couples opt for embroidered fabric invitations — an innovation that marries Moroccan textile craftsmanship with modernity. Finishes matter as much as the paper: hot gilding, embossing, laser cutting.",
        },
        {
          heading: "The Structure of the Moroccan Invitation",
          body: "The traditional Moroccan invitation includes several distinct elements: the main invitation, the RSVP card, directions, and sometimes a booklet presenting the ceremony program. Each element is carefully coordinated into a coherent ensemble. The envelope itself is considered a design element in its own right.",
        },
        {
          heading: "Contemporary Trends",
          body: "In 2026, Moroccan couples no longer hesitate to mix influences. Traditional arabesques coexist with Scandinavian minimalism, geometric zellige dialogues with sans-serif typography. At Maison Layal, we create bespoke invitations that honor tradition while asserting a resolutely modern and personal aesthetic.",
        },
      ],
      es: [
        {
          heading: "Un patrimonio caligráfico milenario",
          body: "La tradición de la invitación caligráfica se remonta a varios siglos en la artesanía marroquí. Los maestros calígrafos de Fez y Marrakech han sido durante mucho tiempo los guardianes de este delicado arte. Hoy, esta tradición se reinventa: la caligrafía árabe convive con la tipografía latina contemporánea para crear invitaciones bilingües de rara belleza.",
        },
        {
          heading: "Materiales nobles: papel y textiles",
          body: "La calidad del soporte es primordial. El papel de algodón 300g, el vitela crema o el papel texturado a mano confieren una sensación de lujo desde el primer contacto. Algunos novios optan por invitaciones en tejido bordado — una innovación que une la artesanía textil marroquí con la modernidad.",
        },
        {
          heading: "La estructura de la invitación marroquí",
          body: "La invitación marroquí tradicional incluye varios elementos distintos: la invitación principal, la tarjeta de respuesta, las indicaciones y a veces un folleto que presenta el programa de la ceremonia. Cada elemento está cuidadosamente coordinado en un conjunto coherente.",
        },
        {
          heading: "Las tendencias contemporáneas",
          body: "En 2026, las parejas marroquíes no dudan en mezclar influencias. La arabesca tradicional coexiste con el minimalismo escandinavo, el zellige geométrico dialoga con la tipografía sans-serif. En Maison Layal, creamos invitaciones a medida que honran la tradición afirmando una estética decididamente moderna y personal.",
        },
      ],
      ar: [
        {
          heading: "إرث خطي عريق",
          body: "يعود تقليد الدعوة المخطوطة بخط اليد إلى قرون عديدة في الحرف المغربية. ظل الخطاطون المهرة في فاس ومراكش حراساً لهذا الفن الرقيق. اليوم، يتجدد هذا التقليد: يتجاور الخط العربي مع الطباعة اللاتينية المعاصرة لإنشاء دعوات ثنائية اللغة ذات جمال نادر.",
        },
        {
          heading: "المواد النبيلة: الورق والمنسوجات",
          body: "جودة الوسيط أمر بالغ الأهمية. يمنح ورق القطن ٣٠٠ جرام أو الرق الكريمي أو الورق المصنوع يدوياً إحساساً بالفخامة من أول لمسة. يختار بعض الأزواج دعوات القماش المطرز — ابتكار يجمع بين الحرف النسيجية المغربية والحداثة.",
        },
        {
          heading: "هيكل الدعوة المغربية",
          body: "تشمل الدعوة المغربية التقليدية عدة عناصر متمايزة: الدعوة الرئيسية وبطاقة الرد والاتجاهات وأحياناً كتيباً يقدم برنامج الحفل. تُنسَّق كل عنصر بعناية في مجموعة متناسقة. تُعدّ الظرف نفسه عنصراً تصميمياً بحد ذاته.",
        },
        {
          heading: "الاتجاهات المعاصرة",
          body: "في عام 2026، لا يتردد الأزواج المغاربة في مزج التأثيرات. تتعايش الزخارف التقليدية مع البساطة الاسكندنافية، ويتحاور الزليج الهندسي مع الطباعة العصرية. في ميزون ليال، نبتكر دعوات مخصصة تُكرّم التراث وتُؤكد جمالية حديثة وشخصية.",
        },
      ],
    },
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((a) => a.slug === slug);
}

export function getRelatedArticles(currentSlug: string): BlogArticle[] {
  return BLOG_ARTICLES.filter((a) => a.slug !== currentSlug).slice(0, 2);
}
