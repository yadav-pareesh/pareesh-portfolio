import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { SKILLS, PERSONAL, WORK_EXPERIENCE } from "@/constants"

export default function About() {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
          <Separator className="mt-4 max-w-xs mx-auto" />
        </div>

        <div className="space-y-8">
          {/* Bio */}
          <Card>
            <CardContent className="pt-6 space-y-4">
              {PERSONAL.bio.map((b,i)=>(<p key={i+1}>{b}</p>))}
            </CardContent>
          </Card>

          {/* Skills */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Technical Skills</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {Object.entries(SKILLS).map(([category, items]) => (
                <Card key={category}>
                  <CardContent className="pt-4">
                    <h3 className="font-medium capitalize mb-2">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience Summary */}
          <Card>
            <CardContent className="pt-4">
              <h3 className="font-medium mb-2">Work Experience</h3>
              <p className="text-sm text-muted-foreground">
                <strong>{WORK_EXPERIENCE.company}</strong> — {WORK_EXPERIENCE.role} ({WORK_EXPERIENCE.startDate} – {WORK_EXPERIENCE.endDate})
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Built and maintained SleekCMS, an enterprise content management
                system with real-time collaborative editing, serving multiple
                enterprise clients.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}