'use client'

import { useState } from 'react'
import { useCustomLists } from '@/hooks/use-custom-lists'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash2 } from 'lucide-react'

export function CustomListsManager() {
  const { customLists, addList, removeList } = useCustomLists()
  const [newListName, setNewListName] = useState('')

  const handleAddList = () => {
    if (newListName.trim()) {
      addList(newListName.trim())
      setNewListName('')
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Custom Question Lists</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex space-x-2">
            <Input
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
              placeholder="New list name"
            />
            <Button onClick={handleAddList}>Add List</Button>
          </div>
          <ul className="space-y-2">
            {customLists.map(list => (
              <li key={list.id} className="flex justify-between items-center">
                <span>{list.name} ({list.questions.length} questions)</span>
                <Button variant="ghost" size="sm" onClick={() => removeList(list.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

