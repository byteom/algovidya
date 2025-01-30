import { Star } from "lucide-react"

type Difficulty = "Easy" | "Medium" | "Hard"

export function DifficultyMeter({ difficulty }: { difficulty: Difficulty }) {
  const difficultyMap = {
    Easy: 1,
    Medium: 2,
    Hard: 3,
  }

  const difficultyLevel = difficultyMap[difficulty]

  return (
    <span className="flex items-center space-x-1">
      {[1, 2, 3].map((level) => (
        <Star
          key={level}
          className={`w-5 h-5 ${level <= difficultyLevel ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
        />
      ))}
      <span className="ml-2 text-sm font-medium">{difficulty}</span>
    </span>
  )
}

