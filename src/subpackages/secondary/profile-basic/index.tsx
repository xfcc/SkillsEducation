import { View } from '@tarojs/components'
import { UnderDevelopment } from '../../../components'
import './index.scss'

export default function ProfileBasic() {
  return (
    <View className="page-secondary">
      <UnderDevelopment
        title="个人资料"
        subtitle="头像、科室、职称与认证信息正在开发中。"
      />
    </View>
  )
}

