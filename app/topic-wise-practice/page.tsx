import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const topics = [
  { name: "Arrays", count: 50 },
  { name: "Strings", count: 40 },
  { name: "Linked Lists", count: 30 },
  { name: "Stacks", count: 20 },
  { name: "Queues", count: 20 },
  { name: "Trees", count: 40 },
  { name: "Graphs", count: 35 },
  { name: "Heaps", count: 15 },
  { name: "Dynamic Programming", count: 50 },
  { name: "Greedy Algorithms", count: 25 },
  { name: "Backtracking", count: 30 },
  { name: "Bit Manipulation", count: 20 },
]

export default function TopicWisePracticePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Topic Wise Practice</h1>
      
      <p className="text-center mb-8 text-lg text-gray-600 dark:text-gray-400">
        Master Data Structures and Algorithms one topic at a time. Choose a topic to start practicing!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {topics.map((topic) => (
          <Card key={topic.name}>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-purple-600 dark:text-purple-300">{topic.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-600 dark:text-gray-400">{topic.count} questions</p>
              <Button className="w-full">
                <Link href={`/questions?topic=${topic.name.toLowerCase().replace(' ', '-')}`}>Practice</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-12">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-purple-600 dark:text-purple-300">Learning Path</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Not sure where to start? Follow our recommended learning path to systematically improve your DSA skills.</p>
          <Button className="w-full">View Learning Path</Button>
        </CardContent>
      </Card>
    </div>
  )
}

