import Intro from "@/components/Intro";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main >
      <div>
        <Intro />
        <Skills />
        <Portfolio />
      </div>
    </main>
  )
}
