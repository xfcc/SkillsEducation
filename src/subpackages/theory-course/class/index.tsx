import { View, Text, ScrollView } from '@tarojs/components'
import { useEffect, useState } from 'react'
import { Card } from '../../../components'
import { getTheoryClasses } from '../../../services/api'
import type { TheoryClass } from '../../../services/types'
import './index.scss'

export default function ClassList() {
  const [classes, setClasses] = useState<TheoryClass[]>([])

  useEffect(() => {
    getTheoryClasses().then(setClasses)
  }, [])

  return (
    <ScrollView scrollY className="page-class">
      <View className="page-class__list">
        {classes.map((c) => (
          <Card key={c.id} className="class-card">
            <Text className="class-card__title">{c.name}</Text>
            <Text className="class-card__meta">{c.memberCount} 人 · 下次活动 {c.nextActivity}</Text>
          </Card>
        ))}
      </View>
    </ScrollView>
  )
}
