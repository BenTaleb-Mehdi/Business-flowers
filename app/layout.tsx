import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LOCAL_BUSINESS_SCHEMA } from "@/src/data/content";
import { LanguageProvider } from "@/app/components/LanguageProvider";
import FloatingContact from "@/app/components/FloatingContact";
// Import your global Navbar and Footer
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SmoothScroll from "./components/SmoothScroll";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Maison Layal | Dragées, Chocolats & Invitations de Luxe Maroc",
  description: "Créations de prestige pour mariages raffinés à Tanger et Tétouan. Dragées personnalisées, chocolats fins et faire-part de luxe sur mesure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${plusJakarta.variable} ${cormorant.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900 font-sans" suppressHydrationWarning>
        <SmoothScroll>
        <LanguageProvider>
          {/* Global Navigation */}
          <Navbar />

          {/* Main Content Area */}
          <main className="flex-1">
            {children}
          </main>

          {/* Global Footer */}
          <Footer />
        </LanguageProvider>
        </SmoothScroll>
            <FloatingContact />
      </body>
    </html>
  );
}