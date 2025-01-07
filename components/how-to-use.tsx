import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Video, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export function HowToUse() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">How to Use AlgoVidya</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-3">
        <div className="flex flex-col items-center text-center">
          <BookOpen className="w-12 h-12 text-primary mb-2" />
          <h3 className="text-lg font-semibold mb-2">1. Browse Questions</h3>
          <p className="text-sm text-muted-foreground mb-4">Explore our curated list of DSA questions organized by difficulty and topic.</p>
          <Link href="/questions">
            <Button variant="outline">View Questions</Button>
          </Link>
        </div>
        <div className="flex flex-col items-center text-center">
          <Video className="w-12 h-12 text-primary mb-2" />
          <h3 className="text-lg font-semibold mb-2">2. Study Solutions</h3>
          <p className="text-sm text-muted-foreground mb-4">Click on a question to view detailed solutions and video explanations.</p>
          <Link href="/questions/1">
            <Button variant="outline">Sample Question</Button>
          </Link>
        </div>
        <div className="flex flex-col items-center text-center">
          <CheckCircle className="w-12 h-12 text-primary mb-2" />
          <h3 className="text-lg font-semibold mb-2">3. Track Progress</h3>
          <p className="text-sm text-muted-foreground mb-4">Mark questions as completed and monitor your learning journey.</p>
          <Link href="/solved-questions">
            <Button variant="outline">View Progress</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

