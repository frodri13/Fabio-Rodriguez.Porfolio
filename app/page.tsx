import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <main >
      <div className="">
        <section id="hero" className="snap-center">
          <Hero />
        </section>
        <section id="about">
          <Intro />
        </section>
        <section id="work">
          <WorkExperience />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Portfolio />
        </section>
        
      </div>
    </main>
  )
}
