import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main >
      <div className="snap-y snap-mandatory z-0">
        <section id="hero" className="snap-center">
          <Hero />
        </section>
        <section id="about">
          <Intro />
        </section>
        <Skills />
        <Portfolio />
      </div>
    </main>
  )
}
