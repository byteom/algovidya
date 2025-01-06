'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { useProgress } from '@/hooks/use-progress'
import { Question } from '@/data/questions'

interface SolvedQuestionsProps {
  questions: Question[]
}

export function SolvedQuestions({ questions }: SolvedQuestionsProps) {
  const { progress, markAsCompleted, unmarkAsCompleted } = useProgress()
  const [showAll, setShowAll] = useState(false)

  const solvedQuestions = questions.filter(q => progress.completedQuestions.includes(q.id))
  const displayQuestions = showAll ? solvedQuestions : solvedQuestions.slice(0, 5)

  return (
    <div>
      <ul className="space-y-2">
        {displayQuestions.map(question => (
          <li key={question.id} className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 rounded-md shadow-sm">
            <div className="flex items-center space-x-3">
              <Checkbox
                checked={progress.completedQuestions.includes(question.id)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    markAsCompleted(question.id)
                  } else {
                    unmarkAsCompleted(question.id)
                  }
                }}
              />
              <Link href={`/questions/${question.id}`} className="hover:underline">
                {question.title}
              </Link>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">{question.difficulty}</span>
          </li>
        ))}
      </ul>
      {solvedQuestions.length > 5 && (
        <Button 
          variant="link" 
          onClick={() => setShowAll(!showAll)} 
          className="mt-4"
        >
          {showAll ? 'Show Less' : 'Show All'}
        </Button>
      )}
      {solvedQuestions.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400 mt-4">You haven't solved any questions yet. Start solving to see them here!</p>
      )}
    </div>
  )
}

