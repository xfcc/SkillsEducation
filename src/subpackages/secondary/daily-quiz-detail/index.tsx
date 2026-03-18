import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { UnderDevelopment } from '../../../components'
import './index.scss'

export default function DailyQuizDetail() {
  const { params } = Taro.getCurrentInstance().router ?? {}

  return (
    <View className="page-secondary">
      <UnderDevelopment
        title="每日一题"
        subtitle="题目详情、讨论与解析正在开发中。"
        meta={{ date: params?.date, id: params?.id }}
      />
    </View>
  )
}

