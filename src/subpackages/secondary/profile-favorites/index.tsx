import { View, Text, ScrollView } from '@tarojs/components'
import { Card, Tag } from '../../../components'
import './index.scss'

const LIST = [
  { id: 'f1', title: 'ESC 指南解读：抗凝策略更新', date: '2026-02-18', type: '文献' },
  { id: 'f2', title: '经典病例：靶点定位关键步骤', date: '2026-01-30', type: '病例' },
] as const

export default function ProfileFavorites() {
  return (
    <ScrollView scrollY className="page-secondary-list">
      <View className="page-secondary-list__head">
        <Text className="page-secondary-list__title">内容收藏</Text>
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

