import React, { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Code2 } from "lucide-react"

interface CodeEditorProps {
  language: string
  questionId: number
}

const languageOptions = [
  { value: "cpp", label: "C++" },
  { value: "java", label: "Java" },
  { value: "python", label: "Python" },
  { value: "javascript", label: "JavaScript" },
]

export function CodeEditor({ language: initialLanguage, questionId }: CodeEditorProps) {
  const [language, setLanguage] = useState(initialLanguage)
  const [isCompilerOpen, setIsCompilerOpen] = useState(false)

  const oneCompilerUrl = `https://onecompiler.com/embed/${language}?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true&hideNewFileOption=true&hideNew=true&question=${questionId}`

  return (
    <div className="w-full">
      <div className="mb-4 flex items-center space-x-4">
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent>
            {languageOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={() => setIsCompilerOpen(!isCompilerOpen)}>
          <Code2 className="mr-2 h-4 w-4" />
          {isCompilerOpen ? "Close Compiler" : "Open Compiler"}
        </Button>
      </div>
      {isCompilerOpen && (
        <div className="w-full h-[600px] border border-gray-200 rounded-md overflow-hidden">
          <iframe
            src={oneCompilerUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          ></iframe>
        </div>
      )}
    </div>
  )
}

