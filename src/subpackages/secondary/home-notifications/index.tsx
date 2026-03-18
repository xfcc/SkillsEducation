import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { UnderDevelopment } from '../../../components'
import './index.scss'

export default function HomeNotifications() {
  const { params } = Taro.getCurrentInstance().router ?? {}

  return (
    <View className="page-secondary">
      <UnderDevelopment
        title="消息通知"
        subtitle="通知中心与消息分类正在开发中。"
        meta={{ from: params?.from }}
      />
    </View>
  )
}

