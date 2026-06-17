import type { Metadata } from "next";
import { SEO_METADATA } from "@/src/data/content";
import BackgroundCanvas from "@/app/components/BackgroundCanvas";
import Hero from "@/app/components/Hero";
import Collection from "@/app/components/Collection";
import HowItWorks from "@/app/components/HowItWorks";
import { Analytics } from '@vercel/analytics/next';
import FloatingContact from "@/app/components/FloatingContact";
import Categories from "@/app/components/Categories";

export const metadata: Metadata = {
  title: SEO_METADATA.title,
  description: SEO_METADATA.description,
  keywords: SEO_METADATA.keywords,
  alternates: {
    canonical: SEO_METADATA.url,
  },
  openGraph: {
    title: SEO_METADATA.title,
    description: SEO_METADATA.description,
    url: SEO_METADATA.url,
    siteName: "Maison Layal",
    locale: SEO_METADATA.locale,
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-brand-pink-light">
      {/* Background drifting canvas */}
      <BackgroundCanvas />

      {/* Content layout */}
      <div className="flex-grow z-10 relative">
        <Hero />
        <Categories />
        <Collection />
        <HowItWorks />
        <Analytics />
      </div>

  
    </div>
  );
}
