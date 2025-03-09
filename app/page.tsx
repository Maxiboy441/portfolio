import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { CV } from "@/components/CV";
import Footer from "@/components/Footer";
import { Bento } from "@/components/Bento";

const navItems = [
  { name: "About", link: "#about" },
  { name: "Curriculum Vitae", link: "#cv" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
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

        {/* IDEA: Bento Grid, maybe use the Codeblock component inside of one item */}

        {/* IDEA: If testamonials, use Animated Testamonials*/}

        {/* IDEA: Workflow with Canvas Reveal Effect, Concept -> Code -> Review/Test ...... look for a alternative, Canvas Reveal Effect has bugs*/}

        <div id="projects" />
        <Projects />

        <div id="contact" />
        <Bento />

        <div className="pb-12"/>

      </div>


      <Footer />
    </main>
  );
}
