import { View, Text, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { Card } from '../../components'
import './index.scss'

export default function Practice() {
  const goToPvc = () => Taro.navigateTo({ url: '/subpackages/practice-tasks/utility-pvc/index' })
  const goToAifv = () => Taro.navigateTo({ url: '/subpackages/practice-tasks/utility-aifv/index' })
  const goToQuiz = () => Taro.navigateTo({ url: '/subpackages/practice-tasks/quiz/index' })
  const goToLeaderboard = () => Taro.navigateTo({ url: '/subpackages/practice-tasks/leaderboard/index' })

  return (
    <ScrollView scrollY className="page-practice">
      {/* 诊断工具 */}
      <View className="section">
        <Text className="section__title">诊断工具</Text>
        <Card>
          <View className="practice-entry" onClick={goToPvc}>
            <View className="practice-entry__main">
              <Text className="practice-entry__label">室早定位助手</Text>
              <Text className="practice-entry__desc">智能读图辅助</Text>
            </View>
            <View className="practice-entry__arrow">›</View>
          </View>
          <View className="practice-entry" onClick={goToAifv}>
            <View className="practice-entry__main">
              <Text className="practice-entry__label">AIFV 诊断报告</Text>
              <Text className="practice-entry__desc">查看与生成报告</Text>
            </View>
            <View className="practice-entry__arrow">›</View>
          </View>
        </Card>
      </View>

      {/* 模拟训练 */}
      <View className="section">
        <Text className="section__title">模拟训练</Text>
        <Card>
          <View className="practice-entry practice-entry--disabled">
            <View className="practice-entry__main">
              <Text className="practice-entry__label">AI 虚拟模拟器</Text>
              <Text className="practice-entry__desc">无 Carto 设备也可练习导管操作</Text>
            </View>
          </View>
        </Card>
      </View>

      {/* 自测与闯关 */}
      <View className="section">
        <Text className="section__title">自测与闯关</Text>
        <Card>
          <View className="practice-entry" onClick={goToQuiz}>
            <View className="practice-entry__main">
              <Text className="practice-entry__label">测试闯关</Text>
              <Text className="practice-entry__desc">答题自测，检验掌握程度</Text>
            </View>
            <View className="practice-entry__arrow">›</View>
          </View>
          <View className="practice-entry" onClick={goToLeaderboard}>
            <View className="practice-entry__main">
              <Text className="practice-entry__label">学习榜单</Text>
              <Text className="practice-entry__desc">排名与进度</Text>
            </View>
            <View className="practice-entry__arrow">›</View>
          </View>
        </Card>
      </View>
    </ScrollView>
  )
}
