import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from "next/link"

export default function CreatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Meet the Creator</h1>
      
      <Card className="bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900 dark:to-indigo-900">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-purple-600 dark:text-purple-300">Om Singh</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-xl mb-4">B.Tech Student | Passionate about DSA and Web Development</p>
          <p className="mb-6">
            Hi there! I'm Om Singh, a B.Tech student with a deep passion for Data Structures and Algorithms. 
            I created AlgoVidya to help fellow students and coding enthusiasts master DSA concepts in a fun and 
            interactive way. My goal is to make the learning process as enjoyable and effective as possible.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="https://github.com/omsingh" target="_blank" rel="noopener noreferrer">
              <Github className="h-8 w-8 text-gray-600 hover:text-purple-600 transition-colors" />
            </Link>
            <Link href="https://linkedin.com/in/omsingh" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-8 w-8 text-gray-600 hover:text-purple-600 transition-colors" />
            </Link>
            <Link href="mailto:om.singh@example.com">
              <Mail className="h-8 w-8 text-gray-600 hover:text-purple-600 transition-colors" />
            </Link>
          </div>
        </CardContent>
      </Card>

      <div className="mt-12 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-purple-600 dark:text-purple-300">My Journey</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              My fascination with algorithms and data structures began during my first year of B.Tech. 
              As I delved deeper into the world of competitive programming and software development, 
              I realized the importance of having a strong foundation in DSA. This led me to create AlgoVidya, 
              a platform that combines my love for teaching and technology.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-purple-600 dark:text-purple-300">Vision for AlgoVidya</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              With AlgoVidya, I aim to create a comprehensive resource that not only helps students prepare 
              for technical interviews but also builds a strong foundation in problem-solving skills. 
              My vision is to make DSA learning accessible, engaging, and tailored to individual learning styles.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-purple-600 dark:text-purple-300">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              I'm always excited to connect with fellow learners and developers. Whether you have suggestions 
              for improving AlgoVidya, want to collaborate on a project, or just want to chat about DSA, 
              feel free to reach out to me through any of the social links above.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

