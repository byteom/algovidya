import { questions } from '@/data/questions'

export const questionSets = {
  '450': questions, // All questions
  '300': questions.slice(0, Math.min(300, questions.length)), // First 300 questions
  '150': questions.slice(0, Math.min(150, questions.length)), // First 150 questions
  '100': questions.slice(0, Math.min(100, questions.length)), // First 100 questions
  '75': questions.slice(0, Math.min(75, questions.length)), // First 75 questions
}

export type QuestionSet = keyof typeof questionSets

