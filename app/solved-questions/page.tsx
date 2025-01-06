'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useProgress } from '@/hooks/use-progress'
import { questions } from '@/data/questions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function SolvedQuestionsPage() {
  const { progress } = useProgress()
  const [searchTerm, setSearchTerm] = useState('')

  const solvedQuestions = questions.filter(q => progress.completedQuestions.includes(q.id))
  const filteredQuestions = solvedQuestions.filter(q => 
    q.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Solved Questions</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Progress Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{solvedQuestions.length} / {questions.length} questions solved</p>
          <progress 
            className="w-full mt-2" 
            value={solvedQuestions.length} 
            max={questions.length}
          ></progress>
        </CardContent>
      </Card>

      <div className="mb-4">
        <Input 
          placeholder="Search solved questions" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ul className="space-y-4">
        {filteredQuestions.map(question => (
          <li key={question.id} className="border dark:border-gray-700 p-4 rounded-md bg-white dark:bg-gray-800">
            <Link href={`/questions/${question.id}`} className="text-lg font-semibold hover:underline">
              {question.title}
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {question.category} • {question.difficulty}
            </p>
            <div className="flex flex-wrap gap-2">
              {question.companies.map(company => (
                <Badge key={company} variant="secondary">
                  {company}
                </Badge>
              ))}
            </div>
          </li>
        ))}
      </ul>

      {filteredQuestions.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
          No solved questions found. Keep solving!
        </p>
      )}

      <div className="mt-8 text-center">
        <Button asChild>
          <Link href="/questions">Solve More Questions</Link>
        </Button>
      </div>
    </div>
  )
}

