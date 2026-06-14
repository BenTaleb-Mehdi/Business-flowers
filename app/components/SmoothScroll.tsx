"use client";

import { useEffect, useRef } from "react";
// CORRECTION : Ajoutez des guillemets autour de 'lenis'
import Lenis from 'lenis'; 

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialisation de Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Boucle d'animation
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Nettoyage
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}