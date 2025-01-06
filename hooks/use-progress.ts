'use client'

import { useState, useEffect, useCallback } from 'react'
// import { useStreak } from './use-streak' //Removed as per update 1

interface Progress {
  completedQuestions: number[];
  lastVisited: number | null;
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>({
    completedQuestions: [],
    lastVisited: null
  })
  // const { updateStreak } = useStreak() //Removed as per update 1

  useEffect(() => {
    // Load progress from localStorage on mount
    const savedProgress = localStorage.getItem('dsa-progress')
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress))
    }
  }, [])

  const markAsCompleted = useCallback((questionId: number) => {
    setProgress(prev => {
      if (!prev.completedQuestions.includes(questionId)) {
        const newProgress = {
          ...prev,
          completedQuestions: [...prev.completedQuestions, questionId]
        }
        localStorage.setItem('dsa-progress', JSON.stringify(newProgress))
        return newProgress
      }
      return prev
    })
  }, [])

  const unmarkAsCompleted = useCallback((questionId: number) => {
    setProgress(prev => {
      const newProgress = {
        ...prev,
        completedQuestions: prev.completedQuestions.filter(id => id !== questionId)
      }
      localStorage.setItem('dsa-progress', JSON.stringify(newProgress))
      return newProgress
    })
  }, [])

  const updateLastVisited = useCallback((questionId: number) => {
    setProgress(prev => {
      if (prev.lastVisited === questionId) return prev; // Return previous state if no change
      const newProgress = {
        ...prev,
        lastVisited: questionId
      };
      localStorage.setItem('dsa-progress', JSON.stringify(newProgress));
      return newProgress;
    });
  }, []);

  return {
    progress,
    markAsCompleted,
    unmarkAsCompleted,
    updateLastVisited
  }
}

