import { Hero } from "@/src/components/sections/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted font-sans">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-28 px-16 bg-background sm:items-start">
        <section id="hero" className="min-h-screen py-20 w-full">
          <Hero />
        </section>

        {/* About - Stats + Summary */}
        <section id="about" className="py-20 bg-muted/30 w-full">
          {/* <About /> */}
          <div>about</div>
        </section>

        {/* Experience - Timeline */}
        <section id="experience" className="py-20 w-full">
          {/* <Experience /> */}
          <div>experience</div>
        </section>

        {/* Skills - Grid */}
        <section id="skills" className="py-20 bg-muted/30 w-full">
          {/* <Skills /> */}
          <div>skills</div>
        </section>

        {/* Projects - Gallery */}
        <section id="projects" className="py-20 w-full">
          {/* <Projects /> */}
          <div>projects</div>
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
