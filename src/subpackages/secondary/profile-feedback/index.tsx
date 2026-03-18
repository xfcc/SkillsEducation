import { View } from '@tarojs/components'
import { UnderDevelopment } from '../../../components'
import './index.scss'

export default function ProfileFeedback() {
  return (
    <View className="page-secondary">
      <UnderDevelopment
        title="意见反馈"
        subtitle="反馈提交、截图与进度跟踪正在开发中。"
      />
    </View>
  )
}

