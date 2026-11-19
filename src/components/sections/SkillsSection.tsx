import { motion } from "framer-motion"
import { Code2, Server, Database, Layers, Cloud, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { TECH_STACK } from "@/constants"

const categoryIcons = {
  "Frontend Development": Code2,
  "Backend Development": Server,
  "Databases & ORMs": Database,
  "State Management": Layers,
  "Tools, Cloud & DevOps": Cloud,
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16"
      >
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="outline" className="text-xs font-semibold uppercase tracking-wider text-primary border-primary/20">
            Skills & Stack
          </Badge>
          <div className="h-px bg-border/60 flex-1 max-w-[80px]" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Technical Arsenal. <br className="hidden sm:inline" />
          <span className="text-muted-foreground font-normal">Modern, scalable, and type-safe.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl">
          Core technologies, frameworks, and cloud tooling I leverage to build mission-critical web applications.
        </p>
      </motion.div>

      {/* Grid of categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {TECH_STACK.map((item, idx) => {
          const Icon = categoryIcons[item.category as keyof typeof categoryIcons] || Sparkles
          const isFullWidth = idx === TECH_STACK.length - 1

          return (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={isFullWidth ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <Card className="h-full border-border/50 bg-card/30 backdrop-blur-xs hover:border-primary/40 hover:bg-card/60 transition-all duration-300 group shadow-xs">
                <CardContent className="p-6">
                  {/* Category Title & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="font-semibold text-foreground text-base tracking-tight">
                        {item.category}
                      </h3>
                    </div>
                    <span className="text-xs text-muted-foreground font-medium px-2 py-0.5 rounded-full bg-muted/60">
                      {item.skills.length} techs
                    </span>
                  </div>

                  {/* Badges / Chips */}
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.04, y: -1 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Badge
                          variant="secondary"
                          className="font-normal text-xs sm:text-sm py-1.5 px-3 bg-muted/50 text-foreground/90 border border-border/40 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all cursor-default select-none shadow-2xs"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

