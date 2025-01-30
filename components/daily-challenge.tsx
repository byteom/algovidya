"use client"

import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ChevronRight } from "lucide-react"
import Link from "next/link"
import { questions } from "@/data/questions"

export function DailyChallenge() {
  const [dailyQuestion, setDailyQuestion] = useState<(typeof questions)[0] | null>(null)

  useEffect(() => {
    const today = new Date().toDateString()
    const storedDate = localStorage.getItem("dailyChallengeDate")
    const storedQuestion = localStorage.getItem("dailyChallengeQuestion")

    if (storedDate === today && storedQuestion) {
      setDailyQuestion(JSON.parse(storedQuestion))
    } else {
      const randomQuestion = questions[Math.floor(Math.random() * questions.length)]
      setDailyQuestion(randomQuestion)
      localStorage.setItem("dailyChallengeDate", today)
      localStorage.setItem("dailyChallengeQuestion", JSON.stringify(randomQuestion))
    }
  }, [])

  if (!dailyQuestion) return null

  return (
    <Card className="bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900 dark:to-indigo-900">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center">
            <Calendar className="mr-2" />
            Daily Coding Challenge
          </span>
          <Badge variant="secondary">{dailyQuestion.difficulty}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-xl font-semibold mb-2">{dailyQuestion.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{dailyQuestion.description.slice(0, 100)}...</p>
        <Button asChild>
          <Link href={`/questions/${dailyQuestion.id}`} className="flex items-center">
            Solve Challenge <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

