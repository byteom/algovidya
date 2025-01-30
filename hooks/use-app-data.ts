import { useState, useEffect } from "react"
import { useProgress } from "./use-progress"
import { useCustomLists } from "./use-custom-lists"

interface AppData {
  progress: ReturnType<typeof useProgress>["progress"]
  customLists: ReturnType<typeof useCustomLists>["customLists"]
  challengeData: {
    dailyChallenge: {
      date: string
      questionId: number
    }
    dsaChallenge: {
      duration: number | null
      startDate: string | null
      questions: number[]
    }
  }
}

export function useAppData() {
  const { progress, setProgress } = useProgress()
  const { customLists, setCustomLists } = useCustomLists()
  const [challengeData, setChallengeData] = useState<AppData["challengeData"]>({
    dailyChallenge: {
      date: "",
      questionId: 0,
    },
    dsaChallenge: {
      duration: null,
      startDate: null,
      questions: [],
    },
  })

  useEffect(() => {
    const savedData = localStorage.getItem("algovidya_app_data")
    if (savedData) {
      const parsedData: AppData = JSON.parse(savedData)
      setProgress(parsedData.progress)
      setCustomLists(parsedData.customLists)
      setChallengeData(parsedData.challengeData)
    }
  }, [setProgress, setCustomLists, setChallengeData]) // Added dependencies

  useEffect(() => {
    const appData: AppData = {
      progress,
      customLists,
      challengeData,
    }
    localStorage.setItem("algovidya_app_data", JSON.stringify(appData))
  }, [progress, customLists, challengeData])

  const updateChallengeData = (newData: Partial<AppData["challengeData"]>) => {
    setChallengeData((prevData) => {
      const updatedData = { ...prevData, ...newData }
      const appData: AppData = {
        progress,
        customLists,
        challengeData: updatedData,
      }
      localStorage.setItem("algovidya_app_data", JSON.stringify(appData))
      return updatedData
    })
  }

  return {
    progress,
    customLists,
    challengeData,
    updateChallengeData,
  }
}

