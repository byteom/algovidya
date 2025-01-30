import { useProgress } from "@/hooks/use-progress"
import { questions } from "@/data/questions"
import { Progress } from "@/components/ui/progress"

export function ProgressTracker({ currentQuestionId }: { currentQuestionId: number }) {
  const { progress } = useProgress()
  const totalQuestions = questions.length
  const completedQuestions = progress.completedQuestions.length
  const currentQuestionIndex = questions.findIndex((q) => q.id === currentQuestionId)

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">Progress</span>
        <span className="text-sm font-medium">
          {completedQuestions} / {totalQuestions}
        </span>
      </div>
      <Progress value={(completedQuestions / totalQuestions) * 100} className="w-full" />
      <p className="text-sm text-muted-foreground mt-2">
        Current question: {currentQuestionIndex + 1} of {totalQuestions}
      </p>
    </div>
  )
}

