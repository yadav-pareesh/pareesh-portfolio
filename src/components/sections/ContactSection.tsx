import { useState } from "react"
import { motion } from "framer-motion"
import {
  Mail, MapPin, FileText, Download, Eye,
  Check, Copy, ArrowUpRight, Sparkles, Send, Clock,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GithubIcon, LinkedinIcon } from "@/components/Icons"
import { PERSONAL, SOCIAL_LINKS } from "@/constants"

export function ContactSection() {
  const [copied, setCopied] = useState(false)
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const openMailClient = (e: React.FormEvent) => {
    e.preventDefault()
    const url = `mailto:${PERSONAL.email}?subject=${encodeURIComponent(
      subject || "Project Collaboration Inquiry"
    )}&body=${encodeURIComponent(message)}`
    window.location.href = url
  }

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-3xl mx-auto mb-16 space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-primary/30 bg-primary/5 text-primary">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          {PERSONAL.availability}
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
          Let's Start a Conversation.
        </h2>

        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Whether you're exploring full-stack engineering opportunities, architecting
          real-time systems, or building a new product from scratch, I'd love to connect.
        </p>
      </motion.div>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: contact info */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <Card className="border-border/60 bg-card/40 backdrop-blur-xs shadow-xs">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-bold">Contact Channels</CardTitle>
              <CardDescription>
                Reach out directly via email or connect on social platforms.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              {/* Email row */}
              <div className="group flex items-center justify-between p-3.5 rounded-xl border border-border/50 bg-background/50 hover:border-primary/40 hover:bg-muted/40 transition-all">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Email</p>
                    <a
                      href={`mailto:${PERSONAL.email}`}
                      className="text-sm font-medium hover:underline text-foreground block truncate"
                    >
                      {PERSONAL.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  title="Copy email"
                  aria-label="Copy email address"
                  className="ml-2 shrink-0 h-8 w-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                >
                  {copied
                    ? <Check className="h-4 w-4 text-emerald-500" />
                    : <Copy className="h-4 w-4" />}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-xl border border-border/50 bg-background/50 hover:border-primary/40 hover:bg-muted/40 transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:scale-105 transition-transform shrink-0">
                    <LinkedinIcon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">LinkedIn</p>
                    <span className="text-sm font-medium text-foreground">Connect on LinkedIn</span>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </a>

              {/* GitHub */}
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-xl border border-border/50 bg-background/50 hover:border-primary/40 hover:bg-muted/40 transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:scale-105 transition-transform shrink-0">
                    <GithubIcon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">GitHub</p>
                    <span className="text-sm font-medium text-foreground">Browse Repositories</span>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </a>

              {/* Location */}
              <div className="flex items-center justify-between p-3.5 rounded-xl border border-border/40 bg-muted/20">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Location</p>
                    <p className="text-sm font-medium text-foreground">{PERSONAL.location}</p>
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs font-mono font-normal shrink-0">
                  UTC +5:30
                </Badge>
              </div>

              <p className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
                <Clock className="h-3.5 w-3.5 shrink-0" />
                Typically responds within 24 hours.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right: message form + resume */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Message composer */}
          <Card className="border-border/60 bg-card/40 backdrop-blur-xs shadow-xs">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Send className="h-4 w-4 text-primary" />
                Send a Direct Message
              </CardTitle>
              <CardDescription>
                Draft your inquiry here — it opens in your mail client.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={openMailClient} className="space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="subj" className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    id="subj"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Full-Stack Engineering Role / Project Inquiry"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border/60 bg-background text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="body" className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="body"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project, timeline, or what you're looking to build..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border/60 bg-background text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  Compose in Email Client
                </button>
              </form>
            </CardContent>
          </Card>

          {/* Resume card */}
          <Card className="border-border/60 bg-card/40 backdrop-blur-xs shadow-xs">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-sm text-foreground">Curriculum Vitae</h4>
                      <Badge variant="secondary" className="text-[10px] py-0 px-2 gap-1 font-normal">
                        <Sparkles className="h-2.5 w-2.5 text-amber-500" /> PDF
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Employment record, technical proficiencies &amp; projects.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={PERSONAL.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg text-xs font-medium border border-border/60 bg-background hover:bg-muted text-foreground transition-colors"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    View
                  </a>
                  <a
                    href={PERSONAL.resumeUrl}
                    download="Pareesh_Yadav_Resume.pdf"
                    className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
