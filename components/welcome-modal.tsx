'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedBefore')
    if (!hasVisited) {
      setIsOpen(true)
      localStorage.setItem('hasVisitedBefore', 'true')
    }
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Welcome to AlgoVidya!</DialogTitle>
          <DialogDescription>
            Your journey to mastering Data Structures and Algorithms starts here.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <h3 className="font-semibold mb-2">Here's how to get started:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Browse our curated question sets</li>
            <li>Click on a question to view detailed solutions and video explanations</li>
            <li>Mark questions as completed to track your progress</li>
            <li>Use the AI-powered recommender for personalized learning</li>
          </ul>
        </div>
        <DialogFooter>
          <Button onClick={() => setIsOpen(false)}>Get Started</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

