import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

export default function UtilityAifv() {
  const goToReport = () => {
    Taro.navigateTo({ url: '/subpackages/profile-reports/report/index?type=AIFV' })
  }

  return (
    <View className="page-utility-aifv">
      <Text className="page-utility-aifv__title">AIFV 诊断报告</Text>
      <Text className="page-utility-aifv__desc">查看或生成 AIFV 诊断报告。</Text>
      <View className="page-utility-aifv__btn" onClick={goToReport}>
        <Text>去查看</Text>
      </View>
    </View>
  )
}
