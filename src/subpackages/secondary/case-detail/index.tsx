import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { UnderDevelopment } from '../../../components'
import './index.scss'

export default function CaseDetail() {
  const { params } = Taro.getCurrentInstance().router ?? {}

  return (
    <View className="page-secondary">
      <UnderDevelopment
        title="病例详情"
        subtitle="病例详情、关键节点与复盘内容正在开发中。"
        meta={{ id: params?.id, title: params?.title }}
      />
    </View>
  )
}

