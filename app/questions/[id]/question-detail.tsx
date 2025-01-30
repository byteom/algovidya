"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useProgress } from "@/hooks/use-progress"
import { Checkbox } from "@/components/ui/checkbox"
import { CodeEditor } from "@/components/code-editor"
import { ArrowLeft, Code, FileText, Video, ExternalLink } from "lucide-react"
import { ProgressTracker } from "@/components/progress-tracker"
import { DifficultyMeter } from "@/components/difficulty-meter"
import { RelatedQuestions } from "@/components/related-questions"
import { Discussion } from "@/components/discussion"
import type { Question } from "@/data/questions"

interface QuestionDetailProps {
  question: Question
}

export function QuestionDetail({ question }: QuestionDetailProps): JSX.Element {
  const [selectedLanguage, setSelectedLanguage] = useState("cpp")
  const { progress, markAsCompleted, unmarkAsCompleted, updateLastVisited } = useProgress()

  useEffect(() => {
    if (question.id !== progress.lastVisited) {
      updateLastVisited(question.id)
    }
  }, [question.id, progress.lastVisited, updateLastVisited])

  const isCompleted = progress.completedQuestions.includes(question.id)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      <div className="mb-8">
        <Link href="/questions" className="flex items-center text-sm text-gray-500 hover:text-gray-700">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Questions
        </Link>
      </div>

      <ProgressTracker currentQuestionId={question.id} />

      <Card className="mb-8 relative overflow-hidden transition-all duration-300 hover:shadow-lg">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-3xl">{question.title}</CardTitle>
              <CardDescription className="flex items-center space-x-2 text-sm text-muted-foreground mt-2">
                <span>{question.category}</span>
                <span>•</span>
                <DifficultyMeter difficulty={question.difficulty} />
              </CardDescription>
              <div className="flex flex-wrap gap-2 mt-2">
                {question.companies.map((company) => (
                  <Badge key={company} variant="outline">
                    {company}
                  </Badge>
                ))}
              </div>
            </div>
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
              />
              <span className="text-sm">{isCompleted ? "Solved" : "Mark as Solved"}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-semibold mb-2">Problem Description</h2>
          <p>{question.description}</p>
        </CardContent>
      </Card>

      <div className="flex gap-2 mb-8">
        {question.platforms.map((platform) => (
          <Button key={platform} variant="outline" asChild>
            <Link
              href={`https://${platform.toLowerCase().replace(/\s+/g, "")}.com/problems/${question.title.toLowerCase().replace(/\s+/g, "-")}`}
              target="_blank"
              className="flex items-center"
            >
              Solve on {platform}
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="mr-2 h-5 w-5" />
                Code Editor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CodeEditor language="cpp" questionId={question.id} />
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Solution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full">View Solution</Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Solution for {question.title}</DialogTitle>
                  </DialogHeader>
                  <Tabs defaultValue={selectedLanguage} onValueChange={setSelectedLanguage}>
                    <TabsList>
                      <TabsTrigger value="explanation">Explanation</TabsTrigger>
                      <TabsTrigger value="cpp">C++</TabsTrigger>
                      <TabsTrigger value="java">Java</TabsTrigger>
                      <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                    </TabsList>
                    <TabsContent value="explanation">
                      <p className="mb-4">{question.solution.text}</p>
                    </TabsContent>
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
            </CardContent>
          </Card>
        </div>

        <div>
          <RelatedQuestions currentQuestionId={question.id} category={question.category} />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Video className="mr-2 h-5 w-5" />
            Video Solutions
          </CardTitle>
        </CardHeader>
        <CardContent>
          {question.videos && question.videos.length > 0 ? (
            <Tabs defaultValue="English">
              <TabsList>
                <TabsTrigger value="English">English</TabsTrigger>
                <TabsTrigger value="Hindi">Hindi</TabsTrigger>
              </TabsList>
              <TabsContent value="English">
                {question.videos
                  .filter((v) => v.language === "English")
                  .map((video) => (
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
                {question.videos
                  .filter((v) => v.language === "Hindi")
                  .map((video) => (
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
        </CardContent>
      </Card>

      <div className="mt-8">
        <Discussion />
      </div>
    </div>
  )
}

