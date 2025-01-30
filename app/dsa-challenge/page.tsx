"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ChevronRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { questions } from "@/data/questions"
import { useProgress } from "@/hooks/use-progress"

const challengeDurations = [7, 15, 30, 45]

export default function DSAChallengePage() {
  const [selectedDuration, setSelectedDuration] = useState<number | null>(null)
  const { progress } = useProgress()

  const generateChallengeQuestions = (duration: number) => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, duration)
  }

  const challengeQuestions = selectedDuration ? generateChallengeQuestions(selectedDuration) : []

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">DSA Challenge</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Select Challenge Duration</h2>
        <div className="flex space-x-4">
          {challengeDurations.map((duration) => (
            <Button
              key={duration}
              variant={selectedDuration === duration ? "default" : "outline"}
              onClick={() => setSelectedDuration(duration)}
            >
              {duration} Days
            </Button>
          ))}
        </div>
      </div>
      {selectedDuration && (
        <Card className="bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900 dark:to-indigo-900">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center">
                <Calendar className="mr-2" />
                {selectedDuration}-Day DSA Challenge
              </span>
              <Badge variant="secondary">
                {progress.completedQuestions.filter((id) => challengeQuestions.some((q) => q.id === id)).length} /{" "}
                {selectedDuration} Completed
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {challengeQuestions.map((question, index) => (
                <li
                  key={question.id}
                  className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-md"
                >
                  <div className="flex items-center">
                    <span className="font-semibold mr-2">Day {index + 1}:</span>
                    <span>{question.title}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{question.difficulty}</Badge>
                    {progress.completedQuestions.includes(question.id) && <CheckCircle className="text-green-500" />}
                    <Button asChild size="sm">
                      <Link href={`/questions/${question.id}`}>
                        Solve <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

