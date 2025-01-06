'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { Moon, Sun, Code2, Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navigation() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center space-x-2 group">
              <Code2 className="h-8 w-8 transform group-hover:rotate-12 transition-transform duration-200" />
              <span className="text-xl font-bold group-hover:text-yellow-300 transition-colors duration-200">AlgoVidya</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link href="/questions" className="text-white hover:bg-purple-700 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Questions
              </Link>
              <Link href="/solved-questions" className="text-white hover:bg-purple-700 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Solved Questions
              </Link>
              <Link href="/instructions" className="text-white hover:bg-purple-700 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                How to Use
              </Link>
              <Link href="/creator" className="text-white hover:bg-purple-700 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Creator
              </Link>
              <Link href="/community" className="text-white hover:bg-purple-700 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Community
              </Link>
            </div>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-white hover:bg-purple-700 hover:text-yellow-300 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button 
              variant="outline" 
              className="text-white border-white hover:bg-purple-700 hover:text-yellow-300 hover:border-yellow-300 transition-colors duration-200"
              onClick={() => window.open('https://www.buymeacoffee.com/algovidya', '_blank')}
            >
              Buy Me a Coffee
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white hover:bg-purple-700">
                  <Menu className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <Link href="/questions" className="flex items-center w-full">Questions</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/solved-questions" className="flex items-center w-full">Solved Questions</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/instructions" className="flex items-center w-full">How to Use</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/creator" className="flex items-center w-full">Creator</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/community" className="flex items-center w-full">Community</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="w-full justify-start"
                  >
                    {theme === 'dark' ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                    Toggle Theme
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => window.open('https://www.buymeacoffee.com/algovidya', '_blank')}
                    className="w-full justify-start"
                  >
                    Buy Me a Coffee
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}

