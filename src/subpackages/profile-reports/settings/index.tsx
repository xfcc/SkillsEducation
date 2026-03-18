import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

export default function SettingsPage() {
  const goTo = (url: string) => () => Taro.navigateTo({ url })

  return (
    <View className="page-settings">
      <Text className="page-settings__title">设置</Text>
      <View className="page-settings__list">
        <Text className="page-settings__item" onClick={goTo('/subpackages/secondary/profile-privacy/index')}>隐私协议</Text>
        <Text className="page-settings__item" onClick={goTo('/subpackages/secondary/profile-privacy/index')}>用户协议</Text>
        <Text className="page-settings__item" onClick={goTo('/subpackages/secondary/profile-feedback/index')}>关于心技教育</Text>
      </View>
    </View>
  )
}
