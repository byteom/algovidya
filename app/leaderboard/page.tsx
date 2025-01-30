"use client"

import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface LeaderboardEntry {
  id: number
  name: string
  score: number
  rank: number
}

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    const mockLeaderboard: LeaderboardEntry[] = [
      { id: 1, name: "Aarav Patel", score: 1250, rank: 1 },
      { id: 2, name: "Diya Sharma", score: 1100, rank: 2 },
      { id: 3, name: "Arjun Singh", score: 950, rank: 3 },
      { id: 4, name: "Ananya Gupta", score: 900, rank: 4 },
      { id: 5, name: "Rohan Kapoor", score: 850, rank: 5 },
      { id: 6, name: "Ishaan Mehta", score: 800, rank: 6 },
      { id: 7, name: "Zara Khan", score: 750, rank: 7 },
      { id: 8, name: "Advait Desai", score: 700, rank: 8 },
      { id: 9, name: "Myra Reddy", score: 650, rank: 9 },
      { id: 10, name: "Vihaan Choudhury", score: 600, rank: 10 },
    ]
    setLeaderboard(mockLeaderboard)
  }, [])

  const filteredLeaderboard = leaderboard.filter((entry) => entry.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Leaderboard</h1>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center">
              <Trophy className="mr-2" />
              Top Performers
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative max-w-sm">
              <Input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
          <ul className="space-y-2">
            {filteredLeaderboard.map((entry) => (
              <li
                key={entry.id}
                className="flex items-center justify-between p-2 bg-gray-100 dark:bg-gray-800 rounded-md"
              >
                <div className="flex items-center">
                  {entry.rank <= 3 && (
                    <Medal
                      className={`mr-2 ${
                        entry.rank === 1 ? "text-yellow-500" : entry.rank === 2 ? "text-gray-400" : "text-orange-500"
                      }`}
                    />
                  )}
                  <span className="font-semibold">{entry.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">{entry.score} points</Badge>
                  <span className="text-sm text-gray-500">Rank #{entry.rank}</span>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

