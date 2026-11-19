import { motion } from "framer-motion"
import { Cpu, Zap, Activity, Heart, CheckCircle2, type LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PERSONAL } from "@/constants"
import heroImg from "@/assets/hero.png"

type Pillar = { icon: LucideIcon; title: string; desc: string }

const PILLARS: Pillar[] = [
  {
    icon: Activity,
    title: "Real-Time Systems",
    desc: "Specialized in building sub-200ms real-time collaboration engines, WebSockets, and P2P WebRTC data streams.",
  },
  {
    icon: Zap,
    title: "Performance First",
    desc: "Proven track record slashing API latency by 35% through SQL query optimization and shaving 25% off client bundle sizes.",
  },
  {
    icon: Cpu,
    title: "End-to-End Ownership",
    desc: "From system architecture and database design to CI/CD, maintaining 99.7% uptime across 3 continuous years.",
  },
  {
    icon: Heart,
    title: "Engineering Philosophy",
    desc: "Passionate about clean abstractions, developer ergonomics, zero-dependency modules, and resilient fault tolerance.",
  },
]

type ProfileRow = { label: string; value: string; emerald?: boolean }

const PROFILE_ROWS: ProfileRow[] = [
  { label: "Focus",        value: "Full-Stack & Real-Time"        },
  { label: "Experience",   value: "3+ Years (Production)"         },
  { label: "Availability", value: PERSONAL.availability, emerald: true },
  { label: "Interests",    value: "Open Source, Systems, Chess"   },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16"
      >
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="outline" className="text-xs font-semibold uppercase tracking-wider text-primary border-primary/20">
            About Me
          </Badge>
          <div className="h-px bg-border/60 flex-1 max-w-[80px]" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Engineering with purpose,{" "}
          <br className="hidden sm:inline" />
          <span className="text-muted-foreground font-normal">resilience, and craft.</span>
        </h2>
      </motion.div>

      {/* Bio + Profile grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
        {/* Left: Bio */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <div className="p-6 sm:p-8 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm space-y-5 text-base sm:text-lg text-muted-foreground">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
              A developer obsessed with performance and scalable architectures.
            </h3>

            {PERSONAL.bio.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">{paragraph}</p>
            ))}

            <div className="pt-2 border-t border-border/40 flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-foreground/80 font-medium">
              {["Real-Time Specialist", "Full-Stack Architecture", "99.7% Production SLA"].map((tag) => (
                <span key={tag} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <div className="w-full rounded-2xl border border-border/60 bg-card/30 p-6 sm:p-8 backdrop-blur-sm space-y-6">
            {/* Avatar row */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={heroImg}
                  alt={PERSONAL.name}
                  className="w-16 h-16 rounded-2xl object-cover border border-border shadow-xs"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-background rounded-full" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-lg">{PERSONAL.name}</h4>
                <p className="text-sm text-muted-foreground">{PERSONAL.title}</p>
                <p className="text-xs text-muted-foreground/75 mt-0.5">{PERSONAL.location}</p>
              </div>
            </div>

            {/* Detail rows */}
            <div className="space-y-2.5 pt-2 border-t border-border/40 text-sm">
              {PROFILE_ROWS.map(({ label, value, emerald }, idx) => (
                <div
                  key={label}
                  className={`flex justify-between items-center py-1 ${
                    idx < PROFILE_ROWS.length - 1 ? "border-b border-border/30" : ""
                  }`}
                >
                  <span className="text-muted-foreground">{label}</span>
                  <span className={`font-medium ${"emerald" in { emerald } && emerald ? "text-emerald-500" : "text-foreground"}`}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Pillars */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {PILLARS.map((pillar) => {
          const Icon = pillar.icon
          return (
            <Card
              key={pillar.title}
              className="border-border/50 bg-card/30 hover:bg-card/70 hover:border-border transition-all duration-300 group"
            >
              <CardContent className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-foreground text-base tracking-tight">{pillar.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
              </CardContent>
            </Card>
          )
        })}
      </motion.div>
    </section>
  )
}
