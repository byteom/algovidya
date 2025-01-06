'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useProgress } from '@/hooks/use-progress'
import { questionSets } from '@/constants/question-sets'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ProgressDashboard() {
  const { progress } = useProgress()
  const [selectedSet, setSelectedSet] = useState<string>('450')
  const [completionPercentage, setCompletionPercentage] = useState(0)

  useEffect(() => {
    const totalQuestions = questionSets[selectedSet as keyof typeof questionSets].length
    const completedQuestions = progress.completedQuestions.filter(id => 
      questionSets[selectedSet as keyof typeof questionSets].some(q => q.id === id)
    ).length
    setCompletionPercentage(Math.round((completedQuestions / totalQuestions) * 100))
  }, [selectedSet, progress])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label htmlFor="questionSet" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Question Set
            </label>
            <select
              id="questionSet"
              value={selectedSet}
              onChange={(e) => setSelectedSet(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="450">450 DSA Questions</option>
              <option value="300">300 DSA Questions</option>
              <option value="150">150 DSA Questions</option>
              <option value="100">100 DSA Questions</option>
              <option value="75">75 DSA Questions</option>
            </select>
          </div>
          <Progress value={completionPercentage} className="w-full" />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            You've completed {completionPercentage}% of the {selectedSet} DSA Questions set.
          </p>
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Total Solved Questions</p>
            <p className="text-2xl font-bold">{progress.completedQuestions.length}</p>
          </div>
          <Button asChild className="w-full mt-4">
            <Link href="/solved-questions">View Solved Questions</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

