import { View, Text, ScrollView } from '@tarojs/components'
import { Card } from '../../../components'
import './index.scss'

export default function Literature() {
  return (
    <ScrollView scrollY className="page-literature">
      <View className="page-literature__intro">
        <Text>文献解读：紧跟全球心血管领域前沿学术动态。本页为占位，后续接入文献列表与解读内容。</Text>
      </View>
      <Card>
        <Text className="page-literature__placeholder"># ESC指南 · # 临床随访 等标签筛选即将开放</Text>
      </Card>
    </ScrollView>
  )
}
