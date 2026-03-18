import { View } from '@tarojs/components'
import { UnderDevelopment } from '../../../components'
import './index.scss'

export default function ProfilePrivacy() {
  return (
    <View className="page-secondary">
      <UnderDevelopment
        title="隐私与协议"
        subtitle="隐私政策、用户协议与权限管理正在开发中。"
      />
    </View>
  )
}

