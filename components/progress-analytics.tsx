'use client'

import { useProgress } from '@/hooks/use-progress'
import { questions } from '@/data/questions'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export function ProgressAnalytics() {
  const { progress } = useProgress()

  const totalQuestions = questions.length
  const completedQuestions = progress.completedQuestions.length

  const categoryProgress = questions.reduce((acc, question) => {
    if (!acc[question.category]) {
      acc[question.category] = { total: 0, completed: 0 }
    }
    acc[question.category].total++
    if (progress.completedQuestions.includes(question.id)) {
      acc[question.category].completed++
    }
    return acc
  }, {} as Record<string, { total: number; completed: number }>)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Progress Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Overall Progress</h3>
            <Progress value={(completedQuestions / totalQuestions) * 100} className="mt-2" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {completedQuestions} / {totalQuestions} questions completed
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Progress by Category</h3>
            {Object.entries(categoryProgress).map(([category, { total, completed }]) => (
              <div key={category} className="mt-2">
                <p className="text-sm font-medium">{category}</p>
                <Progress value={(completed / total) * 100} className="mt-1" />
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {completed} / {total} completed
                </p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

