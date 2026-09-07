import { ArrowRight, Code, Database, Globe, Users, type LucideIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PERSONAL, HOME_SKILLS } from "@/constants"

const iconMap: Record<string, LucideIcon> = { Code, Database, Globe, Users }

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

      {/* Skills Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {HOME_SKILLS.map((skill) => {
              const Icon = iconMap[skill.icon as keyof typeof iconMap]
              if (!Icon) return null
              return (
                <Card key={skill.name} className="text-center">
                  <CardContent className="pt-6">
                    <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="text-sm font-medium">{skill.name}</p>
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