import { View, Text } from '@tarojs/components'
import './index.scss'

export default function SettingsPage() {
  return (
    <View className="page-settings">
      <Text className="page-settings__title">设置</Text>
      <View className="page-settings__list">
        <Text className="page-settings__item">隐私协议</Text>
        <Text className="page-settings__item">用户协议</Text>
        <Text className="page-settings__item">关于心技教育</Text>
      </View>
    </View>
  )
}
