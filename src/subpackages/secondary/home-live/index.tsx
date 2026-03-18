import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { UnderDevelopment } from '../../../components'
import './index.scss'

export default function HomeLive() {
  const { params } = Taro.getCurrentInstance().router ?? {}

  return (
    <View className="page-secondary">
      <UnderDevelopment
        title="直播"
        subtitle="直播详情/预约/回放正在开发中。"
        meta={{ id: params?.id, title: params?.title }}
      />
    </View>
  )
}

