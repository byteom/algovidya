"use client"

import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal } from "lucide-react"

interface LeaderboardEntry {
  id: number
  name: string
  score: number
  rank: number
}

export function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    const mockLeaderboard: LeaderboardEntry[] = [
      { id: 1, name: "Aarav Patel", score: 1250, rank: 1 },
      { id: 2, name: "Diya Sharma", score: 1100, rank: 2 },
      { id: 3, name: "Arjun Singh", score: 950, rank: 3 },
      { id: 4, name: "Ananya Gupta", score: 900, rank: 4 },
      { id: 5, name: "Rohan Kapoor", score: 850, rank: 5 },
    ]
    setLeaderboard(mockLeaderboard)
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Trophy className="mr-2" />
          Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {leaderboard.map((entry) => (
            <li
              key={entry.id}
              className="flex items-center justify-between p-2 bg-gray-100 dark:bg-gray-800 rounded-md"
            >
              <div className="flex items-center">
                {entry.rank <= 3 && (
                  <Medal
                    className={`mr-2 ${entry.rank === 1 ? "text-yellow-500" : entry.rank === 2 ? "text-gray-400" : "text-orange-500"}`}
                  />
                )}
                <span className="font-semibold">{entry.name}</span>
              </div>
              <Badge variant="secondary">{entry.score} points</Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

