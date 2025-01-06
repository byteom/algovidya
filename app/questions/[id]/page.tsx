'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { questions } from '@/data/questions'
import { useProgress } from '@/hooks/use-progress'
import { Checkbox } from '@/components/ui/checkbox'

export default function QuestionDetail({ params }: { params: { id: string } }) {
  const questionId = parseInt(params.id)
  const question = questions.find(q => q.id === questionId)
  const [selectedLanguage, setSelectedLanguage] = useState('cpp')
  const { progress, markAsCompleted, unmarkAsCompleted, updateLastVisited } = useProgress()

  useEffect(() => {
    if (question && question.id !== progress.lastVisited) {
      updateLastVisited(question.id)
    }
  }, [question, progress.lastVisited, updateLastVisited])

  if (!question) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-4">Question not found</h1>
        <p>The requested question could not be found. It may have been removed or you may have followed an incorrect link.</p>
        <Link href="/questions">
          <Button className="mt-4">Back to Questions</Button>
        </Link>
      </div>
    )
  }

  const isCompleted = progress.completedQuestions.includes(question.id)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-start mb-4">
        <h1 className="text-3xl font-bold">{question.title}</h1>
        <div className="flex items-center space-x-2">
          <Checkbox 
            checked={isCompleted}
            onCheckedChange={(checked) => {
              if (checked) {
                markAsCompleted(question.id)
              } else {
                unmarkAsCompleted(question.id)
              }
            }}
            id={`completed-${question.id}`}
          />
          <Button
            variant={isCompleted ? "outline" : "default"}
            onClick={() => isCompleted ? unmarkAsCompleted(question.id) : markAsCompleted(question.id)}
          >
            <label htmlFor={`completed-${question.id}`} className="cursor-pointer">
              {isCompleted ? "Mark as Unsolved" : "Mark as Solved"}
            </label>
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <Badge variant="outline">{question.category}</Badge>
        <Badge variant="outline">{question.difficulty}</Badge>
        {question.companies.map(company => (
          <Badge key={company} variant="secondary">
            {company}
          </Badge>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-4 rounded-md mb-8">
        <h2 className="text-xl font-semibold mb-2">Problem Description</h2>
        <p>{question.description}</p>
      </div>

      <div className="flex space-x-4 mb-8">
        {question.platforms.map(platform => (
          <Button key={platform} variant="outline" asChild>
            <Link href={`https://${platform.toLowerCase()}.com/problems/${question.title.toLowerCase().replace(/\s+/g, '-')}`} target="_blank">
              Solve on {platform}
            </Link>
          </Button>
        ))}
        <Dialog>
          <DialogTrigger asChild>
            <Button>View Solution</Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Solution for {question.title}</DialogTitle>
            </DialogHeader>
            <p className="mb-4">{question.solution.text}</p>
            <Tabs defaultValue={selectedLanguage} onValueChange={setSelectedLanguage}>
              <TabsList>
                <TabsTrigger value="cpp">C++</TabsTrigger>
                <TabsTrigger value="java">Java</TabsTrigger>
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              </TabsList>
              <TabsContent value="cpp">
                <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md overflow-x-auto">
                  <code>{question.solution.code.cpp}</code>
                </pre>
              </TabsContent>
              <TabsContent value="java">
                <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md overflow-x-auto">
                  <code>{question.solution.code.java}</code>
                </pre>
              </TabsContent>
              <TabsContent value="javascript">
                <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md overflow-x-auto">
                  <code>{question.solution.code.javascript}</code>
                </pre>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Video Solutions</h2>
        {question.videos && question.videos.length > 0 ? (
          <Tabs defaultValue="English">
            <TabsList>
              <TabsTrigger value="English">English</TabsTrigger>
              <TabsTrigger value="Hindi">Hindi</TabsTrigger>
            </TabsList>
            <TabsContent value="English">
              {question.videos.filter(v => v.language === 'English').map(video => (
                <div key={video.id} className="mb-4">
                  <h3 className="text-lg font-medium mb-2">{video.title}</h3>
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full"
                      src={video.url}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="Hindi">
              {question.videos.filter(v => v.language === 'Hindi').map(video => (
                <div key={video.id} className="mb-4">
                  <h3 className="text-lg font-medium mb-2">{video.title}</h3>
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full"
                      src={video.url}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        ) : (
          <p>No video solutions available for this question yet. Check back soon!</p>
        )}
      </div>
    </div>
  )
}

