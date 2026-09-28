import { ArrowRight, Code2, Server, Database, Layers, Cloud, type LucideIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PERSONAL, TECH_STACK } from "@/constants"

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Server,
  Database,
  Layers,
  Cloud,
}

export default function Home() {

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <Badge className="mb-4" variant="secondary">
          {PERSONAL.availability}
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Hi, I'm <span className="text-primary">{PERSONAL.name}</span>
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl">
          {PERSONAL.tagline}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link to="/projects">
            <Button size="lg">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline">
              Let's Talk
            </Button>
          </Link>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-8">
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TECH_STACK.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap]
              const isLast = index === TECH_STACK.length - 1
              return (
                <Card
                  key={item.category}
                  className={`transition-all duration-300 hover:border-primary/40 hover:shadow-md ${
                    isLast ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2.5 mb-4">
                      {Icon && (
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" />
                        </div>
                      )}
                      <h3 className="font-semibold text-base tracking-tight">
                        {item.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="font-normal text-xs py-1 px-2.5 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}