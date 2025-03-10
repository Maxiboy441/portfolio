import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { CV } from "@/components/CV";
import Footer from "@/components/Footer";
import { Bento } from "@/components/Bento";
import { Gallery } from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";

const navItems = [
  { name: "About", link: "#about" },
  { name: "Curriculum Vitae", link: "#cv" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
  { name: "Gallery", link: "#gallery" },
];

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} className="bg-black-400 hidden sm:flex" />
        
        <div id="about" />
        <Hero />

        <div id="cv" />
        <CV />

        {/* IDEA: If testamonials, use Animated Testamonials*/}

        <div id="projects" />
        <Projects />

        <div id="contact" />
        <Bento />

        <div className="pb-12 hidden sm:block" id="gallery">
          <Gallery />
        </div>

        <div className="pb-12"/>

        <ContactForm />

      </div>


      <Footer />
    </main>
  );
}
