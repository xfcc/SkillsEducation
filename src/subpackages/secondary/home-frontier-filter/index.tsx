import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { UnderDevelopment } from '../../../components'
import './index.scss'

export default function HomeFrontierFilter() {
  const { params } = Taro.getCurrentInstance().router ?? {}

  return (
    <View className="page-secondary">
      <UnderDevelopment
        title="临床前沿筛选"
        subtitle="筛选条件与标签体系正在开发中。"
        meta={{ category: params?.category }}
      />
    </View>
  )
}

