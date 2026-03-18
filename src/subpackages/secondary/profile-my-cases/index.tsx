import { View, Text, ScrollView } from '@tarojs/components'
import { Card, Tag } from '../../../components'
import './index.scss'

const LIST = [
  { id: 'c1', title: '心律失常病例复盘 · 术中策略选择', date: '2026-03-10', tag: '复盘' },
  { id: 'c2', title: '疑难心电图：P 波判读与定位', date: '2026-03-05', tag: '心电图' },
] as const

export default function ProfileMyCases() {
  return (
    <ScrollView scrollY className="page-secondary-list">
      <View className="page-secondary-list__head">
        <Text className="page-secondary-list__title">我的病例</Text>
        <Text className="page-secondary-list__sub">列表页（堆积内容）</Text>
      </View>

      <View className="page-secondary-list__list">
        {LIST.map((x) => (
          <Card key={x.id} className="page-secondary-list__item">
            <View className="page-secondary-list__row">
              <Text className="page-secondary-list__item-title">{x.title}</Text>
              <Tag type="default">{x.tag}</Tag>
            </View>
            <Text className="page-secondary-list__item-meta">{x.date}</Text>
          </Card>
        ))}
      </View>
    </ScrollView>
  )
}

