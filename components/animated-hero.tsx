'use client'

import { motion } from 'framer-motion'

export function AnimatedHero() {
  return (
    <div className="text-center space-y-4">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent"
      >
        Welcome to AlgoVidya
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl text-center mb-12 text-gray-600 dark:text-gray-300"
      >
        Master Data Structures and Algorithms with our curated question sets and expert solutions
      </motion.p>
    </div>
  )
}

