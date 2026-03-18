import { View, Text, ScrollView } from '@tarojs/components'
import { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { Card, Tag } from '../../../components'
import { getTheoryCases } from '../../../services/api'
import type { TheoryCase } from '../../../services/types'
import './index.scss'

export default function CaseList() {
  const [cases, setCases] = useState<TheoryCase[]>([])

  useEffect(() => {
    getTheoryCases().then(setCases)
  }, [])

  const goToDetail = (c: TheoryCase) => {
    const title = encodeURIComponent(c.title ?? '')
    Taro.navigateTo({ url: `/subpackages/secondary/case-detail/index?id=${c.id}&title=${title}` })
  }

  return (
    <ScrollView scrollY className="page-case">
      <View className="page-case__list">
        {cases.map((c) => (
          <Card key={c.id} className="case-card" onClick={() => goToDetail(c)}>
            <Text className="case-card__title">{c.title}</Text>
            <View className="case-card__meta">
              <Tag type="default">{c.indication}</Tag>
              <Text className="case-card__time">{c.updatedAt}</Text>
            </View>
          </Card>
        ))}
      </View>
    </ScrollView>
  )
}
