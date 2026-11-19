import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, FolderGit2, Check, Film, LayoutGrid } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { PROJECTS, type Project } from "@/constants"
import { ProjectFilmGallery } from "./ProjectFilmGallery"

type FilterKey = "all" | "fullstack" | "devtools"
type ViewMode = "reel" | "grid"

const FILTER_TABS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "fullstack", label: "Real-Time & Full-Stack" },
  { key: "devtools", label: "Dev Tools & Systems" },
]

export function ProjectsSection() {
  const [viewMode, setViewMode] = useState<ViewMode>("reel")
  const [filter, setFilter] = useState<FilterKey>("all")

  const filtered = filter === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10"
      >
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="outline" className="text-xs font-semibold uppercase tracking-wider text-primary border-primary/20">
            Selected Projects
          </Badge>
          <div className="h-px bg-border/60 flex-1 max-w-[80px]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Featured Work.{" "}
              <br className="hidden sm:inline" />
              <span className="text-muted-foreground font-normal">
                Production apps, utilities &amp; experiments.
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl">
              Each project represents a distinct technical challenge—from WebRTC
              peer-to-peer data channels to monorepo package architecture.
            </p>
          </div>

          {/* View mode toggle */}
          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <div className="flex items-center gap-1 p-1 rounded-xl bg-muted/50 border border-border/60 backdrop-blur-xs">
              <button
                type="button"
                onClick={() => setViewMode("reel")}
                className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  viewMode === "reel"
                    ? "text-primary-foreground font-semibold shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {viewMode === "reel" && (
                  <motion.div
                    layoutId="view-mode-pill"
                    className="absolute inset-0 bg-primary rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Film className="w-3.5 h-3.5" />
                <span>Film Reel</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  viewMode === "grid"
                    ? "text-primary-foreground font-semibold shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {viewMode === "grid" && (
                  <motion.div
                    layoutId="view-mode-pill"
                    className="absolute inset-0 bg-primary rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid Index</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main View Area */}
      {viewMode === "reel" ? (
        <ProjectFilmGallery />
      ) : (
        <div className="space-y-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-muted/40 border border-border/60 backdrop-blur-xs w-fit">
            {FILTER_TABS.map((tab) => {
              const count =
                tab.key === "all"
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.category === tab.key).length
              const isActive = filter === tab.key
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setFilter(tab.key)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? "text-primary-foreground font-semibold shadow-xs"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="project-tab-active"
                      className="absolute inset-0 bg-primary rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {tab.label}
                  <span className={`ml-1.5 text-[10px] opacity-75 ${isActive ? "text-primary-foreground" : "text-muted-foreground"}`}>
                    ({count})
                  </span>
                </button>
              )
            })}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isFlagship = index === 0

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${isFlagship ? "md:col-span-2" : ""}`}
    >
      <Card className="flex-1 flex flex-col border-border/60 bg-card/40 backdrop-blur-xs hover:border-primary/40 hover:bg-card/70 transition-all duration-300 group overflow-hidden shadow-xs hover:shadow-md">
        {/* Image - 1920/876 aspect ratio with full visibility */}
        <div className="relative aspect-[1920/876] w-full p-1.5 sm:p-2 bg-black/30 dark:bg-black/60 border-b border-border/40 flex items-center justify-center overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            onError={(e) => {
              const t = e.target as HTMLImageElement
              t.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect width='800' height='450' fill='%2318181b'/%3E%3Ctext x='50%25' y='50%25' font-family='system-ui' font-weight='600' font-size='22' fill='%2371717a' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(project.title)}%3C/text%3E%3C/svg%3E`
            }}
            className="w-full h-full object-contain rounded-md"
          />
        </div>

        {/* Details */}
        <div className="p-6 sm:p-7 space-y-4 flex-1">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
          </div>

          {/* Tech chips */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs py-0.5 px-2.5 rounded-md bg-muted/60 text-foreground/80 border border-border/40 font-mono"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Highlights */}
          <div className="pt-2 border-t border-border/40 space-y-1.5">
            <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">
              Key Highlights
            </p>
            <ul className="space-y-1.5">
              {project.features.slice(0, 3).map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action links — <a> tags styled as buttons, no nesting */}
        <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-border/30 flex flex-wrap items-center gap-3">
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Live Demo
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg text-xs font-medium border border-border/60 bg-background hover:bg-muted text-foreground transition-colors"
            >
              <FolderGit2 className="h-3.5 w-3.5 text-muted-foreground" />
              Source Code
            </a>
          )}
        </div>
      </Card>
    </motion.div>
  )
}
