import { View, Text, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { Card } from '../../components'
import './index.scss'

export default function Theory() {
  const goToGuidebook = () => Taro.navigateTo({ url: '/subpackages/theory-course/guidebook/index' })
  const goToCourses = () => Taro.navigateTo({ url: '/subpackages/theory-course/course/index' })
  const goToCamps = () => Taro.navigateTo({ url: '/subpackages/theory-course/camp/index' })
  const goToCases = () => Taro.navigateTo({ url: '/subpackages/theory-course/case/index' })
  const goToClass = () => Taro.navigateTo({ url: '/subpackages/theory-course/class/index' })

  return (
    <ScrollView scrollY className="page-theory">
      {/* 技能手册 */}
      <View className="section">
        <Text className="section__title">技能手册</Text>
        <Card>
          <View className="theory-entry" onClick={goToGuidebook}>
            <Text className="theory-entry__label">心电图、血管穿刺等案头学习</Text>
            <View className="theory-entry__arrow">›</View>
          </View>
        </Card>
      </View>

      {/* 课程中心 */}
      <View className="section">
        <Text className="section__title">课程中心</Text>
        <Card>
          <View className="theory-entry" onClick={goToCourses}>
            <Text className="theory-entry__label">按病种与解剖分类</Text>
            <View className="theory-entry__arrow">›</View>
          </View>
        </Card>
      </View>

      {/* iEP 训练营 */}
      <View className="section">
        <Text className="section__title">iEP 训练营</Text>
        <Card>
          <View className="theory-entry" onClick={goToCamps}>
            <Text className="theory-entry__label">精选录播课与学习路径</Text>
            <View className="theory-entry__arrow">›</View>
          </View>
        </Card>
      </View>

      {/* 病案库 */}
      <View className="section">
        <Text className="section__title">病案库</Text>
        <Card>
          <View className="theory-entry" onClick={goToCases}>
            <Text className="theory-entry__label">按指征检索真实病例</Text>
            <View className="theory-entry__arrow">›</View>
          </View>
        </Card>
      </View>

      {/* 我的班级 */}
      <View className="section">
        <Text className="section__title">我的班级</Text>
        <Card>
          <View className="theory-entry" onClick={goToClass}>
            <Text className="theory-entry__label">研讨与文献带读</Text>
            <View className="theory-entry__arrow">›</View>
          </View>
        </Card>
      </View>
    </ScrollView>
  )
}
