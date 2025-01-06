'use client'

import { useState, useEffect } from 'react'

interface CustomList {
  id: string;
  name: string;
  questions: number[];
}

export function useCustomLists() {
  const [customLists, setCustomLists] = useState<CustomList[]>([])

  useEffect(() => {
    const savedLists = localStorage.getItem('customLists')
    if (savedLists) {
      setCustomLists(JSON.parse(savedLists))
    }
  }, [])

  const saveCustomLists = (lists: CustomList[]) => {
    localStorage.setItem('customLists', JSON.stringify(lists))
    setCustomLists(lists)
  }

  const addList = (name: string) => {
    const newList: CustomList = {
      id: Date.now().toString(),
      name,
      questions: []
    }
    saveCustomLists([...customLists, newList])
  }

  const removeList = (id: string) => {
    saveCustomLists(customLists.filter(list => list.id !== id))
  }

  const addQuestionToList = (listId: string, questionId: number) => {
    const updatedLists = customLists.map(list => {
      if (list.id === listId && !list.questions.includes(questionId)) {
        return { ...list, questions: [...list.questions, questionId] }
      }
      return list
    })
    saveCustomLists(updatedLists)
  }

  const removeQuestionFromList = (listId: string, questionId: number) => {
    const updatedLists = customLists.map(list => {
      if (list.id === listId) {
        return { ...list, questions: list.questions.filter(id => id !== questionId) }
      }
      return list
    })
    saveCustomLists(updatedLists)
  }

  return {
    customLists,
    addList,
    removeList,
    addQuestionToList,
    removeQuestionFromList
  }
}

