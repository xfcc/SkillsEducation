import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { UnderDevelopment } from '../../../components'
import './index.scss'

export default function HomeSearch() {
  const { params } = Taro.getCurrentInstance().router ?? {}

  return (
    <View className="page-secondary">
      <UnderDevelopment
        title="搜索"
        subtitle="搜索文献、病例与课程的能力正在开发中。"
        meta={{ keyword: params?.keyword }}
      />
    </View>
  )
}

