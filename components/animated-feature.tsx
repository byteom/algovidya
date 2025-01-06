'use client'

import { motion } from 'framer-motion'

interface AnimatedFeatureProps {
  icon: React.ReactNode
  text: string
}

export function AnimatedFeature({ icon, text }: AnimatedFeatureProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
    >
      <div className="text-purple-500 dark:text-purple-400">
        {icon}
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300">{text}</p>
    </motion.div>
  )
}

