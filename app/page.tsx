import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import  SkillsSection  from "@/components/skills-section"
import { Projects } from "@/components/projects"
import  {Skills} from "@/components/skills"
import MastersFrontendSection from "@/components/masters-frontend-section"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"



export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <SkillsSection />
      <MastersFrontendSection />
       <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}