import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LOCAL_BUSINESS_SCHEMA } from "@/src/data/content";

// Import your global Navbar and Footer
import Navbar from "@/app/components/Navbar"; // <-- Check this path matches your folder structure
import Footer from "@/app/components/Footer"; // <-- Check this path matches your folder structure

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
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />
      </head>
      {/* Changed background to white for the minimalist editorial style */}
      <body className="min-h-full flex flex-col bg-white text-gray-900 font-sans">
        
        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Area (flex-1 ensures the footer stays at the bottom of short pages) */}
        <main className="flex-1">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
        
      </body>
    </html>
  );
}