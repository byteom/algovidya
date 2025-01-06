import { useState, useEffect } from 'react'
import { useProgress } from './use-progress'
import { questions } from '@/data/questions'

export function useLearningPath() {
  const { progress } = useProgress()
  const [learningPath, setLearningPath] = useState<number[]>([])

  useEffect(() => {
    const generateLearningPath = () => {
      const completedQuestions = new Set(progress.completedQuestions)
      const remainingQuestions = questions.filter(q => !completedQuestions.has(q.id))

      // Sort remaining questions by difficulty and category
      const sortedQuestions = remainingQuestions.sort((a, b) => {
        const difficultyOrder = { 'Easy': 0, 'Medium': 1, 'Hard': 2 }
        if (a.difficulty !== b.difficulty) {
          return difficultyOrder[a.difficulty as keyof typeof difficultyOrder] - difficultyOrder[b.difficulty as keyof typeof difficultyOrder]
        }
        return a.category.localeCompare(b.category)
      })

      setLearningPath(sortedQuestions.map(q => q.id))
    }

    generateLearningPath()
  }, [progress])

  return learningPath
}

