import { About } from "@/src/components/sections/About";
import Experience from "@/src/components/sections/Experience";
import { Hero } from "@/src/components/sections/Hero";
import Projects from "@/src/components/sections/Projects";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted font-sans">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-28 px-16 bg-background sm:items-start">
        <section id="hero" className="min-h-screen py-20 w-full">
          <Hero />
        </section>

        <section id="about" className="py-20 bg-muted/30 w-full">
          <About />
        </section>

        {/* Experience - Timeline */}
        <section id="experience" className="min-h-screen py-12  w-full">
          <Experience />
        </section>

        {/* Projects - Gallery */}
        <section id="projects" className="py-20 bg-muted/30 w-full">
          <Projects />
        </section>

        {/* Skills - Grid */}
        <section id="skills" className="py-20  w-full">
          {/* <Skills /> */}
          <div>skills</div>
        </section>

        {/* Contact - Form */}
        <section id="contact" className="py-20 bg-muted/30 w-full">
          {/* <Contact /> */}
          <div>contact</div>
        </section>
      </main>
    </div>
  );
}
