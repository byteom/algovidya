import { notFound } from 'next/navigation'
import { questions } from "@/data/questions"
import { QuestionDetail } from './question-detail'
// import type { Question } from '@/data/questions'

interface PageProps {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function QuestionPage({ params, searchParams }: PageProps): Promise<JSX.Element> {
  const { id } = await params
  await searchParams // We're not using searchParams, but we need to await it to satisfy the type

  const questionId = Number.parseInt(id)
  const question = questions.find((q) => q.id === questionId)

  if (!question) {
    notFound()
  }

  return <QuestionDetail question={question} />
}

