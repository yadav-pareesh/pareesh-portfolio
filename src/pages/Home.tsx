import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { ContactSection } from "@/components/sections/ContactSection"

function scrollTo(id: string) {
  if (id === "hero") {
    window.scrollTo({ top: 0, behavior: "smooth" })
    window.history.replaceState(null, "", "/")
    return
  }
  const el = document.getElementById(id)
  if (el) {
    const navOffset = 72
    const elementPosition = el.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - navOffset
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
    window.history.replaceState(null, "", `#${id}`)
  }
}

export default function Home() {
  const { hash } = useLocation()

  // Scroll to anchor when navigated here with a hash (e.g. from /about redirect)
  useEffect(() => {
    if (!hash) return
    const id = hash.slice(1)
    const timer = setTimeout(() => scrollTo(id), 80)
    return () => clearTimeout(timer)
  }, [hash])

  return (
    <div className="relative w-full">
      <HeroSection onNavigate={scrollTo} />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
