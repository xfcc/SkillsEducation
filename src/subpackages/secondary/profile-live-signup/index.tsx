import { View, Text, ScrollView } from '@tarojs/components'
import { Card, Tag } from '../../../components'
import './index.scss'

const LIST = [
  { id: 'l1', title: '房颤消融术式直播 · 专家答疑', date: '2026-03-20 19:30', status: '可报名' },
  { id: 'l2', title: '室早定位读图训练 · 实战讲解', date: '2026-03-28 20:00', status: '预约中' },
] as const

export default function ProfileLiveSignup() {
  return (
    <ScrollView scrollY className="page-secondary-list">
      <View className="page-secondary-list__head">
        <Text className="page-secondary-list__title">直播报名</Text>
        <Text className="page-secondary-list__sub">列表页（堆积内容）</Text>
      </View>

      <View className="page-secondary-list__list">
        {LIST.map((x) => (
          <Card key={x.id} className="page-secondary-list__item">
            <View className="page-secondary-list__row">
              <Text className="page-secondary-list__item-title">{x.title}</Text>
              <Tag type="primary">{x.status}</Tag>
            </View>
            <Text className="page-secondary-list__item-meta">{x.date}</Text>
          </Card>
        ))}
      </View>
    </ScrollView>
  )
}

