import { questions } from './questions'

// Get a random question from the questions array
const randomIndex = Math.floor(Math.random() * questions.length)
export const problemOfTheDay = questions[randomIndex]

