import { ExternalLink, FolderGit2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { PROJECTS } from "@/constants"

export default function Projects() {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight">My Projects</h1>
          <p className="mt-2 text-muted-foreground">
            A selection of projects I've built over the years
          </p>
          <Separator className="mt-4 max-w-xs mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <Card key={project.title} className="flex flex-col">
                <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='24' fill='%2394a3b8' text-anchor='middle' dy='.3em'%3E${project.title}%3C/text%3E%3C/svg%3E`
                    }}
                />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button size="sm">
                  <a className="flex items-center" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button size="sm" variant="outline">
                  <a className="flex items-center" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <FolderGit2 className="mr-2 h-4 w-4" />
                    Source
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}