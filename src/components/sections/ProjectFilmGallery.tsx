import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence, useReducedMotion, type PanInfo } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FolderGit2,
  Maximize2,
  X,
  Check,
  Film,
  Sparkles,
} from "lucide-react"
import { PROJECTS, type Project } from "@/constants"

interface ProjectFilmGalleryProps {
  onSelectProject?: (project: Project) => void
}

export function ProjectFilmGallery({ onSelectProject }: ProjectFilmGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [detailProject, setDetailProject] = useState<Project | null>(null)
  const [isAutoplay, setIsAutoplay] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const projectsCount = PROJECTS.length
  const currentProject = PROJECTS[activeIndex]

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projectsCount)
  }, [projectsCount])

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projectsCount) % projectsCount)
  }, [projectsCount])

  const goToSlide = (idx: number) => {
    setActiveIndex(idx)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't hijack if user is typing in an input
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) return

      if (e.key === "ArrowRight") {
        nextSlide()
      } else if (e.key === "ArrowLeft") {
        prevSlide()
      } else if (e.key === "Escape" && detailProject) {
        setDetailProject(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide, detailProject])

  // Optional Autoplay
  useEffect(() => {
    if (!isAutoplay || detailProject) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoplay, nextSlide, detailProject])

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const swipeThreshold = 50
    if (info.offset.x < -swipeThreshold || info.velocity.x < -400) {
      nextSlide()
    } else if (info.offset.x > swipeThreshold || info.velocity.x > 400) {
      prevSlide()
    }
  }

  return (
    <div className="relative w-full select-none" ref={containerRef}>
      {/* Film Header info bar */}
      <div className="flex items-center justify-between mb-6 px-1">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium">
            <Film className="w-3.5 h-3.5" />
            <span>MOTION REEL</span>
          </div>
          <span className="text-xs text-muted-foreground font-mono">
            FRAME {String(activeIndex + 1).padStart(2, "0")} / {String(projectsCount).padStart(2, "0")}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsAutoplay((v) => !v)}
            className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors border ${
              isAutoplay
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-muted/50 text-muted-foreground border-border/50 hover:text-foreground"
            }`}
          >
            {isAutoplay ? "AUTO: ON" : "AUTO: OFF"}
          </button>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous project frame"
              className="p-1.5 rounded-md border border-border/60 bg-background/80 hover:bg-muted text-foreground transition-all cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next project frame"
              className="p-1.5 rounded-md border border-border/60 bg-background/80 hover:bg-muted text-foreground transition-all cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 3D Coverflow Reel Stage */}
      <div className="relative h-[290px] sm:h-[380px] md:h-[460px] w-full flex items-center justify-center overflow-hidden py-4 [perspective:1200px]">
        {PROJECTS.map((project, index) => {
          // Calculate offset relative to active index
          let offset = index - activeIndex

          // Normalize for circular reel wrap if desired, or keep direct distance
          if (offset > projectsCount / 2) offset -= projectsCount
          if (offset < -projectsCount / 2) offset += projectsCount

          const isActive = offset === 0
          const isImmediate = Math.abs(offset) === 1
          const isVisible = Math.abs(offset) <= 2

          if (!isVisible) return null

          // 3D parameters based on distance from center
          const xPercent = offset * 56
          const rotateY = reduced ? 0 : offset * -24
          const scale = isActive ? 1 : isImmediate ? 0.84 : 0.72
          const z = isActive ? 0 : isImmediate ? -90 : -180
          const opacity = isActive ? 1 : isImmediate ? 0.6 : 0.25
          const zIndex = 30 - Math.abs(offset) * 10

          return (
            <motion.div
              key={project.id}
              onClick={() => {
                if (isActive) {
                  setDetailProject(project)
                  onSelectProject?.(project)
                } else {
                  goToSlide(index)
                }
              }}
              drag={isActive ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              animate={{
                x: `${xPercent}%`,
                rotateY,
                scale,
                z,
                opacity,
              }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 32,
                mass: 0.9,
              }}
              style={{
                zIndex,
                transformStyle: "preserve-3d",
              }}
              className={`absolute w-[92%] sm:w-[84%] md:w-[74%] max-w-3xl cursor-pointer touch-pan-y ${
                isActive ? "cursor-grab active:cursor-grabbing" : ""
              }`}
            >
              <div
                className={`group relative w-full rounded-2xl overflow-hidden border transition-all duration-300 bg-card/95 backdrop-blur-md ${
                  isActive
                    ? "border-primary/60 shadow-2xl ring-1 ring-primary/40"
                    : "border-border/60 shadow-md hover:border-border"
                }`}
              >
                {/* Window Titlebar Header (Outside the image) */}
                <div className="flex items-center justify-between px-3.5 py-2 border-b border-border/40 bg-muted/40 text-[11px] font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/70" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/70" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
                    <span className="ml-2 font-semibold text-foreground/80 tracking-tight hidden sm:inline">
                      {project.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-background/80 border border-border/50">
                      {project.category || "Fullstack"}
                    </span>
                    <span className="text-[10px] font-mono text-primary font-semibold">
                      {String(index + 1).padStart(2, "0")}/{String(projectsCount).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Full Unclipped Image Canvas - exactly 1920/876 aspect ratio with inner padding */}
                <div className="relative p-1.5 sm:p-2 bg-black/40 dark:bg-black/70 aspect-[1920/876] w-full flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading={Math.abs(offset) <= 1 ? "eager" : "lazy"}
                    onError={(e) => {
                      const t = e.target as HTMLImageElement
                      t.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect width='800' height='450' fill='%2318181b'/%3E%3Ctext x='50%25' y='50%25' font-family='system-ui' font-weight='600' font-size='22' fill='%2371717a' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(project.title)}%3C/text%3E%3C/svg%3E`
                    }}
                    className="w-full h-full object-contain rounded-lg transition-transform duration-300 pointer-events-none"
                  />

                  {/* Subtle inspect hover button - non-blocking overlay */}
                  {isActive && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[2px] rounded-lg">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-background/90 text-foreground font-medium text-xs shadow-lg border border-border/60">
                        <Maximize2 className="w-3.5 h-3.5 text-primary" />
                        Click to Inspect Full View
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Active Project Meta & Quick Actions */}
      <motion.div
        key={currentProject.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="mt-4 p-5 sm:p-6 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-md shadow-xs"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-primary">
                #{String(activeIndex + 1).padStart(2, "0")}
              </span>
              <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                {currentProject.title}
              </h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {currentProject.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {currentProject.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs py-0.5 px-2 rounded-md bg-muted/70 text-foreground/80 border border-border/40 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            {currentProject.liveUrl && currentProject.liveUrl !== "#" && (
              <a
                href={currentProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 h-9 rounded-xl text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-xs"
              >
                Live Demo
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {currentProject.githubUrl && currentProject.githubUrl !== "#" && (
              <a
                href={currentProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 h-9 rounded-xl text-xs font-semibold border border-border/60 bg-background hover:bg-muted text-foreground transition-all shadow-2xs"
              >
                <FolderGit2 className="w-3.5 h-3.5 text-muted-foreground" />
                Source Code
              </a>
            )}
            <button
              type="button"
              onClick={() => setDetailProject(currentProject)}
              className="inline-flex items-center gap-1.5 px-4 h-9 rounded-xl text-xs font-semibold border border-border/60 bg-muted/40 hover:bg-muted text-foreground transition-all cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              View Case Study
            </button>
          </div>
        </div>
      </motion.div>

      {/* Motion+ Cue Sheet / Filmstrip Navigator */}
      <div className="mt-6 pt-4 border-t border-border/40">
        <div className="flex items-center justify-between mb-2.5 px-1">
          <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-primary" />
            Filmstrip Cue Sheet
          </span>
          <span className="text-[11px] font-mono text-muted-foreground">
            Swipe or click frame to scrub
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none snap-x">
          {PROJECTS.map((project, idx) => {
            const isCurrent = idx === activeIndex
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`group relative shrink-0 snap-start flex items-center gap-2.5 p-1.5 pr-3 rounded-xl border text-left transition-all cursor-pointer ${
                  isCurrent
                    ? "bg-primary/10 border-primary shadow-xs ring-1 ring-primary/20"
                    : "bg-card/40 border-border/50 hover:bg-card hover:border-border"
                }`}
              >
                <div className="relative w-12 h-8 rounded-lg overflow-hidden border border-border/40 bg-muted shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                  {isCurrent && (
                    <div className="absolute inset-0 bg-primary/20 ring-1 ring-inset ring-primary" />
                  )}
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`text-[10px] font-mono font-bold leading-none ${
                        isCurrent ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-xs font-semibold tracking-tight truncate max-w-[110px] sm:max-w-[140px] ${
                        isCurrent ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {project.title}
                    </span>
                  </div>
                  <span className="text-[10px] text-muted-foreground/80 font-mono truncate max-w-[120px]">
                    {project.tech[0]}
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Cinematic Letterbox Detail Modal */}
      <AnimatePresence>
        {detailProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-background/80 backdrop-blur-xl overflow-y-auto"
            onClick={() => setDetailProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl rounded-2xl border border-border/80 bg-card shadow-2xl overflow-hidden my-auto"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-border/60 bg-muted/40">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-primary text-primary-foreground font-semibold">
                    FRAME CASE STUDY
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">
                    {detailProject.category?.toUpperCase() || "FULLSTACK"}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setDetailProject(null)}
                  className="p-1.5 rounded-lg border border-border/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  aria-label="Close detail view"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Full Unclipped Letterbox Hero Image */}
              <div className="relative w-full aspect-[1920/876] bg-black/95 p-2 sm:p-4 flex items-center justify-center border-b border-border/40">
                <img
                  src={detailProject.image}
                  alt={detailProject.title}
                  className="w-full h-full object-contain rounded-lg shadow-xl"
                />
              </div>

              {/* Content body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-primary">
                      CASE STUDY
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">•</span>
                    <span className="text-xs text-muted-foreground font-mono uppercase">
                      {detailProject.category || "Fullstack"}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-3">
                    {detailProject.title}
                  </h2>
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-primary mb-2">
                    Architectural Overview
                  </h4>
                  <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                    {detailProject.description}
                  </p>
                </div>

                {/* Key features checklist */}
                <div>
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Technical Highlights &amp; Accomplishments
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {detailProject.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-xl border border-border/40 bg-muted/20 text-xs sm:text-sm text-foreground/90"
                      >
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div>
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground mb-2.5">
                    Technologies &amp; Libraries
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {detailProject.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs py-1 px-3 rounded-lg bg-muted text-foreground border border-border/60 font-mono font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        const idx = PROJECTS.findIndex((p) => p.id === detailProject.id)
                        const prev = (idx - 1 + projectsCount) % projectsCount
                        setDetailProject(PROJECTS[prev])
                        setActiveIndex(prev)
                      }}
                      className="px-3 py-1.5 rounded-lg border border-border/60 text-xs font-medium hover:bg-muted transition-colors cursor-pointer"
                    >
                      ← Previous
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const idx = PROJECTS.findIndex((p) => p.id === detailProject.id)
                        const next = (idx + 1) % projectsCount
                        setDetailProject(PROJECTS[next])
                        setActiveIndex(next)
                      }}
                      className="px-3 py-1.5 rounded-lg border border-border/60 text-xs font-medium hover:bg-muted transition-colors cursor-pointer"
                    >
                      Next →
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    {detailProject.githubUrl && detailProject.githubUrl !== "#" && (
                      <a
                        href={detailProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 h-9 rounded-xl text-xs font-semibold border border-border/60 bg-background hover:bg-muted text-foreground transition-all"
                      >
                        <FolderGit2 className="w-3.5 h-3.5 text-muted-foreground" />
                        Repository
                      </a>
                    )}
                    {detailProject.liveUrl && detailProject.liveUrl !== "#" && (
                      <a
                        href={detailProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 h-9 rounded-xl text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm"
                      >
                        Launch Application
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
