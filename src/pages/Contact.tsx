import { useState } from "react"
import { 
  Mail, 
  MapPin, 
  FileText, 
  Download, 
  Eye, 
  Check, 
  Copy, 
  ArrowUpRight, 
  Sparkles,
  Send
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GithubIcon, LinkedinIcon } from "@/components/Icons"
import { PERSONAL, SOCIAL_LINKS } from "@/constants"
import { Link } from "react-router-dom"

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <Badge variant="outline" className="px-3 py-1 text-xs border-primary/30 text-primary gap-1.5 shadow-sm inline-flex items-center">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </Badge>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Let&apos;s <span className="text-primary bg-clip-text">Connect</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto text-base sm:text-lg">
            Have an exciting project, question, or just want to chat tech? Reach out anytime!
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: Interactive Contact Info */}
          <Card className="border-border/60 bg-card/60 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Contact Information</CardTitle>
              <CardDescription>
                Reach out directly or connect with me through social channels.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Email Row with Copy to Clipboard */}
              <div className="group flex items-center justify-between p-3 rounded-xl border border-border/40 hover:border-border hover:bg-muted/40 transition-all">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:scale-105 transition-transform">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email</p>
                    <a
                      href={`mailto:${PERSONAL.email}`}
                      className="text-sm font-medium hover:underline text-foreground truncate block"
                    >
                      {PERSONAL.email}
                    </a>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground hover:text-foreground shrink-0"
                  onClick={handleCopyEmail}
                  title="Copy email"
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>

              {/* LinkedIn Row */}
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 rounded-xl border border-border/40 hover:border-border hover:bg-muted/40 transition-all"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="h-5 w-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">LinkedIn</p>
                    <span className="text-sm font-medium text-foreground truncate block">
                      Connect on LinkedIn
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* GitHub Row */}
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 rounded-xl border border-border/40 hover:border-border hover:bg-muted/40 transition-all"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:scale-105 transition-transform">
                    <GithubIcon className="h-5 w-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">GitHub</p>
                    <span className="text-sm font-medium text-foreground truncate block">
                      Check my repositories
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Location */}
              <div className="flex items-center justify-between p-3 rounded-xl border border-border/40 bg-muted/20">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Location</p>
                    <p className="text-sm font-medium">India (IST)</p>
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs">UTC +5:30</Badge>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Button className="w-full shadow-md gap-2" size="lg">
                  <a className="flex items-center gap-2" href={`mailto:${PERSONAL.email}`}>
                    <Send className="h-4 w-4" /> Compose an Email
                  </a>
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-2">
                  Typically responds within 24 hours.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Right Column: Resume Card */}
          <Card className="border-border/60 bg-card/60 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" /> Curriculum Vitae
                  </CardTitle>
                  <Badge variant="secondary" className="gap-1">
                    <Sparkles className="h-3 w-3 text-amber-500" /> Updated
                  </Badge>
                </div>
                <CardDescription>
                  Review my professional journey, projects, and technical skills.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Visual Document Mockup */}
                <div className="relative rounded-xl border border-dashed border-primary/30 bg-muted/30 p-6 flex flex-col items-center justify-center text-center group hover:bg-muted/50 transition-colors">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 shadow-inner group-hover:scale-110 transition-transform">
                    <FileText className="h-7 w-7" />
                  </div>
                  <h4 className="font-semibold text-sm">Resume / CV</h4>
                  <p className="text-xs text-muted-foreground mt-1 max-w-[240px]">
                    PDF format • Comprehensive view of work history & stack
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground pt-1">
                  <div className="rounded-lg bg-muted/40 p-2.5 text-center border border-border/30">
                    <span className="block font-semibold text-foreground">Format</span> PDF
                  </div>
                  <div className="rounded-lg bg-muted/40 p-2.5 text-center border border-border/30">
                    <span className="block font-semibold text-foreground">Status</span> Verified
                  </div>
                </div>
              </CardContent>
            </div>

            <CardContent className="pt-0">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="flex-1 gap-2">
                  <Link className="flex items-center gap-2" to="/resume">
                    <Eye className="h-4 w-4" /> View Online
                  </Link>
                </Button>

                <Button className="flex-1 gap-2">
                  <a className="flex items-center gap-2" href="/resume.pdf" download>
                    <Download className="h-4 w-4" /> Download PDF
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}