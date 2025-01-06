'use client'

import { useState, useEffect } from 'react'
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function StorageWarning() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasSeenWarning = localStorage.getItem('hasSeenStorageWarning')
    if (!hasSeenWarning) {
      setIsVisible(true)
    }
  }, [])

  const handleDismiss = () => {
    localStorage.setItem('hasSeenStorageWarning', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <Alert variant="destructive" className="mb-4">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Your progress is saved in local storage. Clearing your browser cache may result in data loss. We recommend regularly backing up your progress.
        <button
          onClick={handleDismiss}
          className="ml-2 underline hover:no-underline focus:outline-none"
        >
          Dismiss
        </button>
      </AlertDescription>
    </Alert>
  )
}

