// Centralized content file for the luxury Moroccan wedding landing page.
// All copy, image paths, metadata, and configurations are stored here.

export const BRAND_NAME = "Hand Touch";
export const TARGET_PHONE_NUMBER = "+212632650030"; // Format: CCXXXXXXXXX (without +, spaces or dashes for WhatsApp link)

// Centralized Contact & Address Information
export const CONTACT_EMAIL = "contact@handtouch.ma";
export const CONTACT_PHONE_DISPLAY = "+212 6 32 65 00 30";

export const INSTAGRAM_URL = "https://www.instagram.com/hand__touch18";
export const FACEBOOK_URL = "https://web.facebook.com/hand.touche";





export const SEO_METADATA = {
  title: "Hand touch | Luxury Event Favors & Custom Gifts",
  description: "Premium personalized gifts, custom wedding favors, and elegant souvenirs delivered across Morocco. Experience the art of gifting with Hand touch.",
  keywords: [
    "custom favors",
    "hand touch",
    "personalized gifts",
    "wedding souvenirs",
    "gift boxes",
    "Morocco"
  ],
  locale: "fr_FR",
  url: "https://handtouch.ma",
};

// JSON-LD Local Business Schema targeting major cities
export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": BRAND_NAME,
  "image": "https://handtouch.ma/hero_lifestyle.png",
  "@id": "https://handtouch.ma/#localbusiness",
  "url": "https://handtouch.ma",
  "telephone": TARGET_PHONE_NUMBER,
  "priceRange": "$$$",
  "address": [
    {
      "@type": "PostalAddress",
      "addressCountry": "MA"
    }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "35.7595",
    "longitude": "-5.8340"
  },
 
  "sameAs": [
    INSTAGRAM_URL,
    FACEBOOK_URL
  ]
};

export const NAVBAR_CONTENT = {
  logoText: BRAND_NAME,
  links: [
    { label: "Home", href: "/" },
    { label: "Boutique", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" }
  ],
  ctaText: "Order Now",
};

export const HERO_CONTENT = {
  title: "Hand Touch",
  subtitle: "Luxury bespoke favors and personalized gifts for your most memorable moments.",
  ctaPrimary: "Create Your Custom Box",
  ctaSecondary: "Explore Collections",
  imagePath: "/images/hero-image-3.png",
  imageAlt: "Elegant personalized gifts and event favors in a beautiful setting"
};

export const ABOUT_CONTENT = {
  heroImage: "/images/about/image1.png",
  heroImageAlt: "Luxury bespoke gift boxes collection",
  atelierImage: "/images/about/image2.png",
  atelierImageAlt: "Handcrafted personalized henna ceremony favors"
};

export const BLOG_IMAGES = {
  trends: "/images/blog/image1.png",
  dragees: "/images/blog/image2.png",
  invitation: "/images/blog/image3.png",
};


export interface ProductItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  images: string[]; // <-- Changed from imagePath to an array of images
  features: string[];
  category: string; // <-- Added for the sidebar filter
  price: string;
}

export const PROCESS_CONTENT = {
  title: "Our Creative Journey",
  subtitle: "From inspiration to delivery",
  steps: [
    {
      number: "01",
      title: "Inspiration & Design",
      description: "Choose your theme, colors, and personalization details with our design consultants."
    },
    {
      number: "02",
      title: "Crafting & Assembly",
      description: "Our artisans meticulously craft and assemble each custom favor by hand."
    },
    {
      number: "03",
      title: "Delivery & Delight",
      description: "We deliver the beautifully packaged gifts to your door, ready to impress your guests."
    }
  ]
};

export const ORDER_FORM_CONTENT = {
  title: "Tell Us Your Vision",
  subtitle: "Provide details of your event and we’ll craft a personalized proposal.",
  fields: {
    nameLabel: "Full Name",
    namePlaceholder: "Siham & Youssef (Wedding) or Miral (Baby Shower)",
    dateLabel: "Event Date",
    cityLabel: "City",
    cityOptions: [
      { value: "tanger", label: "Tanger" },
      { value: "tetouan", label: "Tétouan" },
      { value: "autre", label: "Other City (Morocco)" }
    ],
    productsLabel: "Desired Services",
    notesLabel: "Special Requests",
    notesPlaceholder: "Color theme, engraving details, custom text...",
    submitText: "Send Request via WhatsApp"
  }
};

export const FOOTER_CONTENT = {
  brand: BRAND_NAME,
  tagline: "Luxury custom favors for every celebration.",
  targeting: "Serving Tanger, Tétouan, and across Morocco.",
  links: [
    { label: "Collections", href: "#collection" },
    { label: "Our Story", href: "#" },
    { label: "Legal", href: "#" },
    { label: "Contact", href: "#order" }
  ],
  copyright: `© ${new Date().getFullYear()} ${BRAND_NAME}. All rights reserved.`
};

// Helper function to build custom WhatsApp API URL
export function generateWhatsAppLink(formData: {
  name: string;
  date: string;
  city: string;
  products: string[];
  notes: string;
}): string {
  const productsString = formData.products.length > 0 
    ? formData.products.join(", ") 
    : "Non spécifié";
  
  const text = `Bonjour ${BRAND_NAME},\n\nJe souhaite réserver des cadeaux d'invités personnalisés pour mon événement. Voici les détails :\n\n👤 *Nom* : ${formData.name}\n📅 *Date* : ${formData.date}\n📍 *Ville* : ${formData.city}\n🎁 *Services/Produits* : ${productsString}\n📝 *Notes* : ${formData.notes || "Aucune"}\n\nMerci de me recontacter avec votre proposition.`;

  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${TARGET_PHONE_NUMBER}?text=${encodedText}`;
}