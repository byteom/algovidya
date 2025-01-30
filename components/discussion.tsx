import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Comment {
  id: number
  author: string
  content: string
  timestamp: string
}

export function Discussion() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "Alice",
      content: "Great question! I found the two-pointer approach helpful.",
      timestamp: "2 hours ago",
    },
    { id: 2, author: "Bob", content: "I'm stuck on the edge case. Any hints?", timestamp: "1 hour ago" },
  ])
  const [newComment, setNewComment] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        author: "You",
        content: newComment.trim(),
        timestamp: "Just now",
      }
      setComments([...comments, comment])
      setNewComment("")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Discussion</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="flex space-x-4">
              <Avatar>
                <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${comment.author}`} />
                <AvatarFallback>{comment.author[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">{comment.author}</span>
                  <span className="text-sm text-gray-500">{comment.timestamp}</span>
                </div>
                <p className="mt-1">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
          <Textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="mb-2"
          />
          <Button type="submit">Post Comment</Button>
        </form>
      </CardContent>
    </Card>
  )
}

