import { useState, useEffect } from "react"
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight, FileText } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"
import { PERSONAL } from "@/constants"
import { useActiveSection } from "@/hooks/useActiveSection"

const NAV_ITEMS = [
  { id: "about",      label: "About"      },
  { id: "skills",     label: "Skills"     },
  { id: "experience", label: "Experience" },
  { id: "projects",   label: "Projects"   },
  { id: "contact",    label: "Contact"    },
] as const

// Stable array reference — defined once outside the component
const NAV_IDS = NAV_ITEMS.map((i) => i.id) as string[]

function scrollToSection(id: string) {
  if (window.location.pathname !== "/") {
    window.location.href = `/#${id}`
    return
  }

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

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useActiveSection(NAV_IDS)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNav = (id: string) => {
    const wasOpen = isOpen
    setIsOpen(false)
    if (wasOpen) {
      setTimeout(() => {
        scrollToSection(id)
      }, 100)
    } else {
      scrollToSection(id)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/60 shadow-xs py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav("hero")}
            className="group flex items-center gap-2.5 cursor-pointer focus:outline-none"
            aria-label="Scroll to top"
          >
            <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm shadow-xs group-hover:scale-105 transition-transform">
              PY
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                {PERSONAL.name}
              </span>
              <span className="text-[10px] text-muted-foreground hidden sm:block font-mono leading-none">
                {PERSONAL.title}
              </span>
            </div>
          </button>

          {/* Desktop nav pill */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full border border-border/50 bg-background/60 backdrop-blur-md shadow-2xs" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                    isActive ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-muted rounded-full -z-10 border border-border/60 shadow-2xs"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              )
            })}
          </nav>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PERSONAL.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-border/60 hover:bg-muted/60 text-foreground transition-all"
            >
              <FileText className="h-3.5 w-3.5 text-muted-foreground" />
              Resume
              <ArrowUpRight className="h-3 w-3 text-muted-foreground" />
            </a>
            <ModeToggle />
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2">
            <ModeToggle />
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-full cursor-pointer"
              onClick={() => setIsOpen((o) => !o)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-b border-border/60 bg-background/95 backdrop-blur-xl"
          >
            <div className="px-4 py-5 space-y-1.5 max-w-sm mx-auto">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNav(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                      isActive
                        ? "bg-primary text-primary-foreground font-semibold"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.label}
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />}
                  </button>
                )
              })}

              <div className="pt-3 border-t border-border/40">
                <a
                  href={PERSONAL.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-xs font-medium text-foreground py-2 px-3 rounded-lg hover:bg-muted transition-colors"
                >
                  <FileText className="h-4 w-4 text-primary" />
                  View Curriculum Vitae (PDF)
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
