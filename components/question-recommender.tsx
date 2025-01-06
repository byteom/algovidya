'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useProgress } from '@/hooks/use-progress'
import { questions } from '@/data/questions'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, ExternalLink, Sparkles } from 'lucide-react'

export function QuestionRecommender() {
  const { progress } = useProgress()
  const [recommendedQuestion, setRecommendedQuestion] = useState<typeof questions[0] | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const getRecommendation = async () => {
    setIsLoading(true)
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    const completedQuestions = new Set(progress.completedQuestions)
    const remainingQuestions = questions.filter(q => !completedQuestions.has(q.id))

    if (remainingQuestions.length === 0) {
      setRecommendedQuestion(null)
      setIsLoading(false)
      return
    }

    // Enhanced recommendation logic
    const recentlyCompleted = progress.completedQuestions.slice(-5)
    const recentCategories = new Set(recentlyCompleted.map(id => 
      questions.find(q => q.id === id)?.category
    ))
    
    const recommendedQuestions = remainingQuestions.filter(q => 
      recentCategories.has(q.category) && 
      q.difficulty === (completedQuestions.size < 10 ? 'Easy' : 'Medium')
    )
    
    if (recommendedQuestions.length > 0) {
      setRecommendedQuestion(recommendedQuestions[Math.floor(Math.random() * recommendedQuestions.length)])
    } else {
      setRecommendedQuestion(remainingQuestions[Math.floor(Math.random() * remainingQuestions.length)])
    }
    
    setIsLoading(false)
  }

  return (
    <Card className="relative overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="w-6 h-6 text-purple-500" />
          AI Question Recommender
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Get personalized question recommendations based on your progress and learning pattern.
          </p>
          
          <Button 
            onClick={getRecommendation} 
            className="w-full relative overflow-hidden group"
            disabled={isLoading}
          >
            <span className="relative z-10 flex items-center gap-2">
              {isLoading ? (
                <>
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  AI is thinking...
                </>
              ) : (
                <>
                  <Brain className="w-4 h-4" />
                  Get Recommendation
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>

          <AnimatePresence mode="wait">
            {recommendedQuestion && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-4 p-4 bg-muted rounded-lg border"
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="font-semibold">{recommendedQuestion.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {recommendedQuestion.category} • {recommendedQuestion.difficulty}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {recommendedQuestion.platforms.map(platform => (
                      <span
                        key={platform}
                        className="text-xs px-2 py-1 rounded-full bg-secondary"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {recommendedQuestion.description}
                </p>

                <div className="mt-4 flex gap-2">
                  <Link href={`/questions/${recommendedQuestion.id}`}>
                    <Button variant="default" size="sm" className="group">
                      Solve Now
                      <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </CardContent>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl" />
    </Card>
  )
}

