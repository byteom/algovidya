"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Upload, AlertTriangle } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { useAppData } from "@/hooks/use-app-data"
import { useProgress } from "@/hooks/use-progress"
import { useCustomLists } from "@/hooks/use-custom-lists"

export function DataManagement() {
  const { toast } = useToast()
  const { progress, customLists, challengeData } = useAppData()
  const { setProgress } = useProgress()
  const { setCustomLists } = useCustomLists()
  const [isUploading, setIsUploading] = useState(false)

  const handleDownload = () => {
    const dataToDownload = {
      progress,
      customLists,
      challengeData,
    }
    const dataStr = JSON.stringify(dataToDownload, null, 2)
    const dataBlob = new Blob([dataStr], { type: "application/json" })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement("a")
    link.href = url
    link.download = "algovidya_data.json"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    toast({
      title: "Data downloaded successfully",
      description: "Your progress, custom lists, and challenge data have been saved.",
    })
  }

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setIsUploading(true)
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const uploadedData = JSON.parse(e.target?.result as string)

          // Update app state with uploaded data
          setProgress(uploadedData.progress)
          setCustomLists(uploadedData.customLists)

          // Update local storage
          localStorage.setItem("algovidya_app_data", JSON.stringify(uploadedData))

          toast({
            title: "Data uploaded successfully",
            description: "Your progress, custom lists, and challenge data have been restored.",
          })
        } catch (error) {
          toast({
            title: "Error uploading data",
            description: "There was a problem with the uploaded file.",
            variant: "destructive",
          })
        }
        setIsUploading(false)
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
          Download your progress data, custom lists, and challenge data to keep a backup or upload a previous backup to
          restore your data.
        </p>
        <div className="flex gap-4">
          <Button onClick={handleDownload} className="flex-1">
            <Download className="w-4 h-4 mr-2" />
            Download Data
          </Button>
          <div className="flex-1">
            <label htmlFor="upload-input" className="w-full">
              <Button className="w-full" disabled={isUploading}>
                <Upload className="w-4 h-4 mr-2" />
                {isUploading ? "Uploading..." : "Upload Data"}
              </Button>
            </label>
            <input type="file" id="upload-input" className="hidden" accept=".json" onChange={handleUpload} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

