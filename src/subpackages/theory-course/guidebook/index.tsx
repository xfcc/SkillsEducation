import { View, Text, ScrollView } from '@tarojs/components'
import { useEffect, useState } from 'react'
import { Card } from '../../../components'
import { getGuidebooks } from '../../../services/api'
import type { Guidebook } from '../../../services/types'
import './index.scss'

export default function GuidebookList() {
  const [list, setList] = useState<Guidebook[]>([])

  useEffect(() => {
    getGuidebooks().then(setList)
  }, [])

  return (
    <ScrollView scrollY className="page-guidebook">
      <View className="page-guidebook__list">
        {list.map((g) => (
          <Card key={g.id} className="guidebook-card">
            <Text className="guidebook-card__title">{g.title}</Text>
            {g.description && (
              <Text className="guidebook-card__desc">{g.description}</Text>
            )}
          </Card>
        ))}
      </View>
    </ScrollView>
  )
}
