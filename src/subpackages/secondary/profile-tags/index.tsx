import { View } from '@tarojs/components'
import { UnderDevelopment } from '../../../components'
import './index.scss'

export default function ProfileTags() {
  return (
    <View className="page-secondary">
      <UnderDevelopment
        title="兴趣标签"
        subtitle="标签选择与个性化推荐正在开发中。"
      />
    </View>
  )
}

