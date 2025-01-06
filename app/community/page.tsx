import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { PhoneIcon as WhatsApp } from 'lucide-react'

export default function CommunityPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">AlgoVidya Community</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-purple-600 dark:text-purple-300">Join Our WhatsApp Community</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Connect with fellow learners, share your progress, and get help from the community.</p>
            <Button className="w-full flex items-center justify-center" variant="outline">
              <WhatsApp className="mr-2 h-5 w-5" />
              <Link href="https://chat.whatsapp.com/algovidya" target="_blank" rel="noopener noreferrer">
                Join WhatsApp Group
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-purple-600 dark:text-purple-300">Subscribe to WhatsApp Channel</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Get daily DSA problems, tips, and updates directly on WhatsApp.</p>
            <Button className="w-full flex items-center justify-center" variant="outline">
              <WhatsApp className="mr-2 h-5 w-5" />
              <Link href="https://whatsapp.com/channel/algovidya" target="_blank" rel="noopener noreferrer">
                Subscribe to Channel
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-purple-600 dark:text-purple-300">Share Your Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Inspire others by sharing your DSA learning journey and achievements.</p>
          <form className="space-y-4">
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" />
            <Textarea placeholder="Share your story..." />
            <Button type="submit" className="w-full">Submit Your Story</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-purple-600 dark:text-purple-300">Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li>
              <h3 className="font-semibold">Weekly DSA Challenge</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Every Monday at 8:00 PM IST</p>
            </li>
            <li>
              <h3 className="font-semibold">Mock Interview Sessions</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Every Saturday at 11:00 AM IST</p>
            </li>
            <li>
              <h3 className="font-semibold">DSA Webinar: Advanced Graph Algorithms</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">July 15, 2024 at 7:00 PM IST</p>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

