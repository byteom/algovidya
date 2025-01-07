'use client'

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { problemOfTheDay } from '@/data/problem-of-the-day'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export function ProblemOfTheDay() {
  if (!problemOfTheDay) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Problem of the Day</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">No problem available today. Please check back later.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Problem of the Day</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-xl font-semibold mb-2">{problemOfTheDay.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge>{problemOfTheDay.difficulty}</Badge>
          <Badge variant="outline">{problemOfTheDay.category}</Badge>
        </div>
        <p className="text-muted-foreground mb-4">{problemOfTheDay.description.slice(0, 150)}...</p>
        <div className="flex flex-wrap gap-2">
          <Link href={`/questions/${problemOfTheDay.id}`}>
            <Button>Solve Now</Button>
          </Link>
          {problemOfTheDay.platforms.map(platform => (
            problemOfTheDay.links && problemOfTheDay.links[platform] ? (
              <Link key={platform} href={problemOfTheDay.links[platform]} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  {platform} <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            ) : null
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

