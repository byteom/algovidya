import Link from "next/link"
import { questions } from "@/data/questions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RelatedQuestions({ currentQuestionId, category }: { currentQuestionId: number; category: string }) {
  const relatedQuestions = questions.filter((q) => q.id !== currentQuestionId && q.category === category).slice(0, 3)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Related Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {relatedQuestions.map((question) => (
            <li key={question.id}>
              <Link href={`/questions/${question.id}`} className="text-blue-500 hover:underline">
                {question.title}
              </Link>
              <span className="text-sm text-gray-500 ml-2">({question.difficulty})</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

