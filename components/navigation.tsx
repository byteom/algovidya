"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Moon, Sun, Code2, Menu, User, LogOut, Award, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { useProgress } from "@/hooks/use-progress"

export function Navigation() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { progress } = useProgress()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center space-x-2 group">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <Code2 className="h-8 w-8" />
              </motion.div>
              <span className="text-xl font-bold group-hover:text-yellow-300 transition-colors duration-200">
                AlgoVidya
              </span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-4">
              {[
                { name: "Questions", href: "/questions" },
                { name: "Solved Questions", href: "/solved-questions" },
                { name: "Daily Challenge", href: "/daily-challenge" },
                { name: "DSA Challenge", href: "/dsa-challenge" },
                { name: "Leaderboard", href: "/leaderboard" },
                { name: "Community", href: "/community" },
                { name: "Creator", href: "/creator" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:bg-white hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-white hover:bg-white hover:text-purple-600 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white hover:bg-white hover:text-purple-600">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Award className="mr-2 h-4 w-4" /> Achievements
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Zap className="mr-2 h-4 w-4" /> Streak: {progress.streak} days
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" /> Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="md:hidden flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white hover:bg-white hover:text-purple-600">
                  <Menu className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {[
                  { name: "Questions", href: "/questions" },
                  { name: "Solved Questions", href: "/solved-questions" },
                  { name: "Daily Challenge", href: "/daily-challenge" },
                  { name: "DSA Challenge", href: "/dsa-challenge" },
                  { name: "Leaderboard", href: "/leaderboard" },
                  { name: "Community", href: "/community" },
                  { name: "Creator", href: "/creator" },
                ].map((item) => (
                  <DropdownMenuItem key={item.name}>
                    <Link href={item.href} className="flex items-center w-full">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="w-full justify-start"
                  >
                    {theme === "dark" ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                    Toggle Theme
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

