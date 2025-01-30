"use client"

import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome")
    if (!hasSeenWelcome) {
      setIsOpen(true)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem("hasSeenWelcome", "true")
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Welcome to AlgoVidya</DialogTitle>
          <DialogDescription>Learn Data Structures and Algorithms interactively</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p>We&apos;re excited to help you master Data Structures and Algorithms. Here&apos;s what you can expect:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Curated question sets for efficient learning</li>
            <li>Interactive coding environment</li>
            <li>AI-powered personalized learning path</li>
            <li>Progress tracking with detailed analytics</li>
            <li>Daily challenges to keep you motivated</li>
          </ul>
        </div>
        <DialogFooter>
          <Button onClick={handleClose}>Get Started</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

