'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface AnimatedCardProps {
  title: string
  icon: React.ReactNode
  description: string
  linkHref: string
  linkText: string
  gradient: string
}

export function AnimatedCard({ title, icon, description, linkHref, linkText, gradient }: AnimatedCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className={`${gradient} text-white overflow-hidden`}>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            {icon}
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{description}</p>
          <Link href={linkHref} className="mt-4 inline-block w-full">
            <Button variant="secondary" className="w-full group">
              {linkText}
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  )
}

