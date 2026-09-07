import { Card, CardContent } from "@/components/ui/card"

export default function Resume() {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-5xl mx-auto">
        <Card className="h-[80vh] shadow-lg">
          <CardContent className="p-0 h-full">
            {/* Change this src to the path of your PDF in your public folder */}
            <iframe src="/resume.pdf" className="w-full h-full rounded-lg" title="Resume" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}