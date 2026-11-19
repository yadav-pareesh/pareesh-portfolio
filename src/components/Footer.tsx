import { ArrowUp, Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/Icons"
import { SOCIAL_LINKS, PERSONAL } from "@/constants"

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-10 mt-20 bg-muted/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Brand */}
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-7 h-7 rounded-lg bg-primary text-primary-foreground font-bold flex items-center justify-center text-xs shadow-2xs">
              PY
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                © {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Built with React 19, TypeScript &amp; Tailwind CSS.
              </p>
            </div>
          </div>

          {/* Social + back to top */}
          <div className="flex items-center gap-3">
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
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}

            <div className="h-4 w-px bg-border/60 mx-1" />

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-border/60 hover:bg-muted text-foreground transition-all cursor-pointer"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
