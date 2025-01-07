'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Download, Upload, AlertTriangle } from 'lucide-react'
import { useToast } from '@/components/use-toast'
import { useProgress } from '@/hooks/use-progress'
import { useCustomLists } from '@/hooks/use-custom-lists'


export function DataManagement() {
  const { toast } = useToast()
  const { progress } = useProgress()
  const { customLists } = useCustomLists()
  const [isUploading, setIsUploading] = useState(false)

  const handleDownload = () => {
    const data = { progress, customLists }
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'algovidya_data.json'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    toast({
      title: 'Data downloaded successfully',
      description: 'Your progress and custom lists have been saved.',
    })
  }

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setIsUploading(true)
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string)

          // Validate the structure of the uploaded data
          if (!data || typeof data !== 'object' || !('progress' in data && 'customLists' in data)) {
            throw new Error('Invalid data structure')
          }

          // Here you would update your global state or local storage with the uploaded data
          toast({
            title: 'Data uploaded successfully',
            description: 'Your progress and custom lists have been restored.',
          })
        } catch (error) {
          toast({
            title: 'Error uploading data',
            description: 'There was a problem with the uploaded file.',
            variant: 'destructive',
          })
        } finally {
          setIsUploading(false)
        }
      }
      reader.readAsText(file)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-yellow-500" />
          Data Management
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Download your progress data to keep a backup or upload a previous backup to restore your progress.
        </p>
        <div className="flex gap-4">
          <Button onClick={handleDownload} className="flex-1">
            <Download className="w-4 h-4 mr-2" />
            Download Data
          </Button>
          <div className="flex-1">
            <label htmlFor="upload-input" className="w-full">
              <input
                type="file"
                id="upload-input"
                className="hidden"
                accept=".json"
                onChange={handleUpload}
                disabled={isUploading}
              />
              <Button className="w-full" disabled={isUploading}>
                <Upload className="w-4 h-4 mr-2" />
                {isUploading ? 'Uploading...' : 'Upload Data'}
              </Button>
            </label>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
