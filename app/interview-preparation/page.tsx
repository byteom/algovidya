import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function InterviewPreparationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
        Interview Preparation
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-purple-600 dark:text-purple-300">DSA Topics</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Arrays and Strings</li>
              <li>Linked Lists</li>
              <li>Stacks and Queues</li>
              <li>Trees and Graphs</li>
              <li>Sorting and Searching</li>
              <li>Dynamic Programming</li>
            </ul>
            <Button className="w-full mt-4">
              <Link href="/questions">Practice Questions</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-purple-600 dark:text-purple-300">
              Interview Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Understand the problem before coding</li>
              <li>Think out loud and communicate your thought process</li>
              <li>Start with a brute force approach, then optimize</li>
              <li>Test your code with different scenarios</li>
              <li>Practice time management</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-purple-600 dark:text-purple-300">Mock Interviews</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Practice with our AI-powered mock interview system or schedule a session with a peer.</p>
          <Button className="w-full">Schedule Mock Interview</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-purple-600 dark:text-purple-300">Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li>
              <h3 className="font-semibold">Recommended Books</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                &quot;Cracking the Coding Interview&quot; by Gayle Laakmann McDowell
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Online Courses</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">AlgoExpert, LeetCode Premium, InterviewBit</p>
            </li>
            <li>
              <h3 className="font-semibold">YouTube Channels</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Back To Back SWE, Tushar Roy - Coding Made Simple
              </p>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

