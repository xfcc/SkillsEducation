import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { UnderDevelopment } from '../../../components'
import './index.scss'

export default function Simulator() {
  const { params } = Taro.getCurrentInstance().router ?? {}

  return (
    <View className="page-secondary">
      <UnderDevelopment
        title="AI 虚拟模拟器"
        subtitle="模拟器交互流程正在开发中。"
        meta={{ taskId: params?.taskId, from: params?.from }}
      />
    </View>
  )
}

