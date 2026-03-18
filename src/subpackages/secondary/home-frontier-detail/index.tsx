import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { UnderDevelopment } from '../../../components'
import './index.scss'

export default function HomeFrontierDetail() {
  const { params } = Taro.getCurrentInstance().router ?? {}

  return (
    <View className="page-secondary">
      <UnderDevelopment
        title="临床前沿详情"
        subtitle="内容详情页正在开发中。"
        meta={{ id: params?.id, title: params?.title }}
      />
    </View>
  )
}

