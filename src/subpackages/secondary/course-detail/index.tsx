import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { UnderDevelopment } from '../../../components'
import './index.scss'

export default function CourseDetail() {
  const { params } = Taro.getCurrentInstance().router ?? {}

  return (
    <View className="page-secondary">
      <UnderDevelopment
        title="课程详情"
        subtitle="课程章节、进度与学习记录正在开发中。"
        meta={{ id: params?.id, title: params?.title }}
      />
    </View>
  )
}

