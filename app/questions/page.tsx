'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { questionSets, type QuestionSet } from '@/constants/question-sets'
import { useProgress } from '@/hooks/use-progress'
import { SolvedQuestions } from '@/components/solved-questions'
import { ExternalLink } from 'lucide-react'

const QUESTIONS_PER_PAGE = 10

export default function QuestionsPage() {
  const searchParams = useSearchParams()
  const set = (searchParams.get('set') || '450') as QuestionSet
  const { progress, markAsCompleted, unmarkAsCompleted } = useProgress()

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [selectedCompany, setSelectedCompany] = useState('all')
  const [selectedPlatform, setSelectedPlatform] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)

  const companies = Array.from(
    new Set(questionSets[set].flatMap(q => q.companies))
  ).sort()

  const platforms = ['LeetCode', 'GeeksForGeeks']

  const filteredQuestions = questionSets[set].filter(q => 
    q.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || q.category === selectedCategory) &&
    (selectedDifficulty === 'all' || q.difficulty === selectedDifficulty) &&
    (selectedCompany === 'all' || q.companies.includes(selectedCompany)) &&
    (selectedPlatform === 'all' || q.platforms.includes(selectedPlatform))
  )

  const totalPages = Math.ceil(filteredQuestions.length / QUESTIONS_PER_PAGE)
  const paginatedQuestions = filteredQuestions.slice(
    (currentPage - 1) * QUESTIONS_PER_PAGE,
    currentPage * QUESTIONS_PER_PAGE
  )

  const getPlatformLink = (question: typeof questionSets[QuestionSet][0], platform: string) => {
    if (platform === 'LeetCode') {
      const titleSlug = question.title.toLowerCase().replace(/\s+/g, '-')
      return `https://leetcode.com/problems/${titleSlug}`
    } else if (platform === 'GeeksForGeeks') {
      return question.gfgLink || '#'
    }
    return '#'
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">DSA Questions ({set})</h1>
      
      <div className="mb-8 flex flex-wrap gap-4">
        <Input 
          placeholder="Search questions" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Array">Array</SelectItem>
            <SelectItem value="Sorting">Sorting</SelectItem>
            <SelectItem value="String">String</SelectItem>
            <SelectItem value="Tree">Tree</SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Difficulties</SelectItem>
            <SelectItem value="Easy">Easy</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="Hard">Hard</SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedCompany} onValueChange={setSelectedCompany}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Company" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Companies</SelectItem>
            {companies.map(company => (
              <SelectItem key={company} value={company}>{company}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Platform" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Platforms</SelectItem>
            {platforms.map(platform => (
              <SelectItem key={platform} value={platform}>{platform}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <ul className="space-y-4">
        {paginatedQuestions.map(question => (
          <li key={question.id} className="border dark:border-gray-700 p-4 rounded-md flex justify-between items-start bg-white dark:bg-gray-800">
            <div>
              <Link href={`/questions/${question.id}`} className="text-lg font-semibold hover:underline">
                {question.title}
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {question.category} • {question.difficulty}
              </p>
              <div className="flex flex-wrap gap-2">
                {question.companies.map(company => (
                  <Badge key={company} variant="secondary">
                    {company}
                  </Badge>
                ))}
              </div>
              <div className="mt-2">
                {question.platforms.map(platform => (
                  <Badge key={platform} variant="outline" className="mr-2">
                    {platform}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id={`completed-${question.id}`}
                  checked={progress.completedQuestions.includes(question.id)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      markAsCompleted(question.id)
                    } else {
                      unmarkAsCompleted(question.id)
                    }
                  }}
                />
                <label htmlFor={`completed-${question.id}`} className="text-sm">
                  Completed
                </label>
              </div>
              {question.platforms.map(platform => (
                <Button key={platform} variant="outline" asChild>
                  <Link href={getPlatformLink(question, platform)} target="_blank" rel="noopener noreferrer">
                    Solve on {platform} <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              ))}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex justify-between items-center">
        <Button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span>Page {currentPage} of {totalPages}</span>
        <Button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Solved Questions</h2>
        <SolvedQuestions questions={questionSets[set]} />
      </div>
    </div>
  )
}

