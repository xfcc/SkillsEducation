import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { UnderDevelopment } from '../../../components'
import './index.scss'

export default function GuidebookDetail() {
  const { params } = Taro.getCurrentInstance().router ?? {}

  return (
    <View className="page-secondary">
      <UnderDevelopment
        title="指南详情"
        subtitle="指南章节、重点笔记与收藏正在开发中。"
        meta={{ id: params?.id, title: params?.title }}
      />
    </View>
  )
}

