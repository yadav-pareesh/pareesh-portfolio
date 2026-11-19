import { motion, useReducedMotion } from "framer-motion"
import { Mail, ArrowRight } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/Icons"
import { PERSONAL, SOCIAL_LINKS } from "@/constants"

interface HeroSectionProps {
  onNavigate: (id: string) => void
}

const METRICS = [
  { value: "3+",    label: "Years Experience"    },
  { value: "99.7%", label: "Production Uptime"   },
  { value: "35%",   label: "Query Optimization"  },
  { value: "8+",    label: "Shipped Projects"     },
]

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const reduced = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] opacity-80" />

        {reduced ? (
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        ) : (
          <>
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px]"
            />
            <motion.div
              animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px]"
            />
          </>
        )}
      </div>

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Availability pill */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border border-border/80 bg-background/80 backdrop-blur-md shadow-xs text-foreground/90 hover:border-primary/40 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            {PERSONAL.availability}
            <span className="text-muted-foreground/60">•</span>
            <span className="text-muted-foreground font-normal">{PERSONAL.location}</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Hi, I'm {PERSONAL.name}
          </h1>
          <p className="text-lg sm:text-2xl font-medium text-foreground/80 tracking-tight max-w-2xl mx-auto">
            {PERSONAL.title} &amp; Systems Craftsman
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed text-pretty"
        >
          {PERSONAL.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <button
            onClick={() => onNavigate("projects")}
            className="inline-flex items-center gap-2 px-6 h-11 rounded-full text-sm font-semibold bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:bg-primary/90 transition-all group cursor-pointer"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center gap-2 px-6 h-11 rounded-full text-sm font-medium border border-border/80 bg-background/60 backdrop-blur-sm hover:bg-accent/60 text-foreground transition-all cursor-pointer"
          >
            <Mail className="h-4 w-4 text-muted-foreground" />
            Let's Talk
          </button>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex items-center gap-3"
        >
          {[
            { href: SOCIAL_LINKS.github,   label: "GitHub",   Icon: GithubIcon   },
            { href: SOCIAL_LINKS.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
            { href: SOCIAL_LINKS.email,    label: "Email",    Icon: Mail         },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="p-2.5 rounded-full border border-border/60 bg-background/60 hover:bg-accent hover:border-border text-muted-foreground hover:text-foreground transition-all duration-200"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </motion.div>

        {/* Metrics strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-3 border-y border-border/40 py-5 bg-card/20 backdrop-blur-xs rounded-2xl px-4"
        >
          {METRICS.map(({ value, label }, idx) => (
            <div
              key={label}
              className={`text-center p-2 ${idx > 0 ? "border-l border-border/30" : ""} ${idx === 2 ? "border-l-0 sm:border-l" : ""}`}
            >
              <div className="text-2xl sm:text-3xl font-bold tracking-tight">{value}</div>
              <div className="text-xs text-muted-foreground mt-0.5 font-medium">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12"
        >
          <button
            onClick={() => onNavigate("about")}
            className="group flex flex-col items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            aria-label="Scroll to About section"
          >
            <span className="tracking-widest uppercase text-[10px] font-semibold opacity-70">
              Scroll to explore
            </span>
            <div className="w-5 h-8 rounded-full border border-border/80 flex items-start justify-center p-1 group-hover:border-primary/50 transition-colors">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 bg-muted-foreground rounded-full"
              />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
