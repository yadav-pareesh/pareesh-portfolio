import { motion } from "framer-motion"
import { Briefcase, Calendar, Building2, ShieldCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { WORK_EXPERIENCE } from "@/constants"

const METRICS = [
  { label: "Uptime Maintained",  value: "99.7%"  },
  { label: "Latency Reduction",  value: "35%"    },
  { label: "Bundle Size Saved",  value: "25%"    },
  { label: "Socket Sync Latency",value: "<200ms" },
  { label: "Shipped Features",   value: "15+"    },
]

const TECHNOLOGIES = [
  "React", "Node.js", "Express", "PostgreSQL",
  "Socket.io", "Redux", "AWS", "Zero-Downtime CI/CD",
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
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
            Work Experience
          </Badge>
          <div className="h-px bg-border/60 flex-1 max-w-[80px]" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Production Experience.{" "}
          <br className="hidden sm:inline" />
          <span className="text-muted-foreground font-normal">Delivering scale and reliability.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl">
          3+ years of end-to-end engineering ownership across high-concurrency real-time systems.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l border-border/60 ml-2 sm:ml-4">
        <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-xs ring-4 ring-primary/10" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Card className="border-border/60 bg-card/40 backdrop-blur-xs overflow-hidden shadow-sm hover:border-primary/40 transition-all">
            {/* Company / role header */}
            <div className="p-6 sm:p-8 border-b border-border/40 bg-muted/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                    {WORK_EXPERIENCE.role}
                  </h3>
                  <Badge variant="secondary" className="font-semibold text-xs py-0.5">
                    {WORK_EXPERIENCE.duration}
                  </Badge>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5 font-medium text-foreground">
                    <Building2 className="h-4 w-4 text-primary" />
                    {WORK_EXPERIENCE.company}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="h-4 w-4" />
                    {WORK_EXPERIENCE.project} ({WORK_EXPERIENCE.projectDescription})
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {WORK_EXPERIENCE.startDate} – {WORK_EXPERIENCE.endDate}
                  </span>
                </div>
              </div>

              <span className="self-start md:self-center inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="h-3.5 w-3.5" />
                Full-Cycle Tenured
              </span>
            </div>

            <CardContent className="p-6 sm:p-8 space-y-8">
              {/* Metrics strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 p-4 rounded-xl bg-muted/30 border border-border/40">
                {METRICS.map((m) => (
                  <div key={m.label} className="text-center p-2">
                    <div className="text-lg sm:text-xl font-bold tracking-tight text-foreground">{m.value}</div>
                    <div className="text-[11px] sm:text-xs text-muted-foreground mt-0.5 font-medium">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Key Accomplishments & Responsibilities
                </h4>
                <ul className="space-y-3.5">
                  {WORK_EXPERIENCE.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-border/40">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {TECHNOLOGIES.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs font-normal py-1 px-2.5 bg-background border-border/60">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
