"use client"; // Um sicherzustellen, dass der Code nur auf der Client-Seite ausgeführt wird

declare global {
  interface Window {
    umami?: {
      track: (event: string) => void;
    };
  }
}

import { useEffect } from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { CV } from "@/components/CV";
import Footer from "@/components/Footer";
import { Bento } from "@/components/Bento";
import { Gallery } from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import TechStack from "@/components/TechStack";

const navItems = [
  { name: "About", link: "#about" },
  { name: "Curriculum Vitae", link: "#cv" },
  { name: "Projects", link: "#projects" },
  { name: "Dev Skills", link: "#dev-skills" },
  { name: "Contact", link: "#contact" },
  { name: "Gallery", link: "#gallery" },
];

export default function Home() {
  useEffect(() => {
    const trackedDepths = new Set<number>(); // Set zur Vermeidung mehrfacher Events

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      const scrollPercent = Math.round((scrollPosition / pageHeight) * 100);

      // Track bei 25%, 50%, 75%, und 100% der Seite
      [25, 50, 75, 100].forEach((depth) => {
        if (scrollPercent >= depth && !trackedDepths.has(depth)) {
          trackedDepths.add(depth);
          if (typeof window.umami !== "undefined") {
            window.umami.track(`${depth}% Scroll erreicht`);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup: Event Listener entfernen, wenn die Komponente unmontiert wird
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} className="bg-black-400 hidden sm:flex" />
        
        <div id="about" />
        <Hero />

        <div id="cv" />
        <CV />

        <div id="projects" />
        <Projects />

        <div id="dev-skills" />
        <Bento />
        <TechStack />
        
        <div className="pb-12" id="contact"/>
        <ContactForm />
        <div className="pb-12"/>

        <div className="pb-12 hidden sm:block" id="gallery">
          <Gallery />
        </div>

        <div className="pb-12"/>
      </div>

      <Footer />
    </main>
  );
}
