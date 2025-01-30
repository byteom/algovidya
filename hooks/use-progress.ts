"use client"

import { useState, useEffect, useCallback } from "react"

interface Progress {
  completedQuestions: number[]
  lastVisited: number | null
  points: number
  streak: number
  lastStreak: string
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>({
    completedQuestions: [],
    lastVisited: null,
    points: 0,
    streak: 0,
    lastStreak: "",
  })

  useEffect(() => {
    // Load progress from localStorage on mount
    const savedProgress = localStorage.getItem("dsa-progress")
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress))
    }
  }, [])

  const saveProgress = useCallback((newProgress: Progress) => {
    localStorage.setItem("dsa-progress", JSON.stringify(newProgress))
    setProgress(newProgress)
  }, [])

  const markAsCompleted = useCallback(
    (questionId: number) => {
      setProgress((prev) => {
        if (!prev.completedQuestions.includes(questionId)) {
          const today = new Date().toDateString()
          const newProgress = {
            ...prev,
            completedQuestions: [...prev.completedQuestions, questionId],
            points: prev.points + 10,
            streak: prev.lastStreak !== today ? prev.streak + 1 : prev.streak,
            lastStreak: today,
          }
          saveProgress(newProgress)
          return newProgress
        }
        return prev
      })
    },
    [saveProgress],
  )

  const unmarkAsCompleted = useCallback(
    (questionId: number) => {
      setProgress((prev) => {
        const newProgress = {
          ...prev,
          completedQuestions: prev.completedQuestions.filter((id) => id !== questionId),
          points: Math.max(0, prev.points - 10),
        }
        saveProgress(newProgress)
        return newProgress
      })
    },
    [saveProgress],
  )

  const updateLastVisited = useCallback(
    (questionId: number) => {
      setProgress((prev) => {
        if (prev.lastVisited === questionId) return prev
        const newProgress = {
          ...prev,
          lastVisited: questionId,
        }
        saveProgress(newProgress)
        return newProgress
      })
    },
    [saveProgress],
  )

  return {
    progress,
    setProgress,
    markAsCompleted,
    unmarkAsCompleted,
    updateLastVisited,
  }
}

