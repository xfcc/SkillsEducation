import { View, Text, ScrollView } from '@tarojs/components'
import { Card, Tag } from '../../../components'
import './index.scss'

const LIST = [
  { id: 'h1', title: '学术课程：房颤消融入门', date: '2026-03-12', type: '课程' },
  { id: 'h2', title: '病例学习：靶点定位策略', date: '2026-03-11', type: '病例' },
] as const

export default function ProfileHistory() {
  return (
    <ScrollView scrollY className="page-secondary-list">
      <View className="page-secondary-list__head">
        <Text className="page-secondary-list__title">浏览历史</Text>
        <Text className="page-secondary-list__sub">列表页（堆积内容）</Text>
      </View>

      <View className="page-secondary-list__list">
        {LIST.map((x) => (
          <Card key={x.id} className="page-secondary-list__item">
            <View className="page-secondary-list__row">
              <Text className="page-secondary-list__item-title">{x.title}</Text>
              <Tag type="default">{x.type}</Tag>
            </View>
            <Text className="page-secondary-list__item-meta">{x.date}</Text>
          </Card>
        ))}
      </View>
    </ScrollView>
  )
}

