import { View, Text, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { Card } from '../../components'
import './index.scss'

const THEORY_CARDS = [
  {
    id: 'course',
    icon: '📺',
    iconBg: '#EFF6FF',
    title: '学术课程',
    count: '400+',
    unit: '节',
    desc: '由一线心内科专家系统编纂，打造从入门到精通的阶梯式成长路径。',
    tags: ['# 标测基础', '# 房颤消融'],
    url: '/subpackages/theory-course/course/index',
  },
  {
    id: 'case',
    icon: '📦',
    iconBg: '#EEF2FF',
    title: '病例学习',
    count: '600+',
    unit: '例',
    desc: '深度收录各类心律失常真实临床病案，全方位复盘核心临床决策。',
    tags: ['# 疑难心电图', '# 靶点定位'],
    url: '/subpackages/theory-course/case/index',
  },
  {
    id: 'literature',
    icon: '📖',
    iconBg: '#ECFDF5',
    title: '文献解读',
    count: '100+',
    unit: '篇',
    desc: '紧跟全球心血管领域前沿学术动态。',
    tags: ['# ESC指南', '# 临床随访'],
    url: '/subpackages/theory-course/literature/index',
  },
] as const

export default function Theory() {
  const goTo = (url: string) => () => Taro.navigateTo({ url })

  return (
    <ScrollView scrollY className="page-theory">
      <View className="theory-header">
        <Text className="theory-header__title">理论库</Text>
        <View className="theory-header__search" />
      </View>

      <View className="theory-main">
        {THEORY_CARDS.map((card) => (
          <Card key={card.id} className="theory-card" onClick={goTo(card.url)}>
            <View className="theory-card__top">
              <View className="theory-card__head">
                <View className="theory-card__icon" style={{ background: card.iconBg }}>
                  <Text className="theory-card__icon-text">{card.icon}</Text>
                </View>
                <Text className="theory-card__title">{card.title}</Text>
              </View>
              <View className="theory-card__count">
                <Text className="theory-card__count-num">{card.count}</Text>
                <Text className="theory-card__count-unit">{card.unit}</Text>
              </View>
            </View>
            <Text className="theory-card__desc">{card.desc}</Text>
            <View className="theory-card__foot">
              <View className="theory-card__tags">
                {card.tags.map((tag) => (
                  <Text key={tag} className="theory-card__tag">{tag}</Text>
                ))}
              </View>
              <View className="theory-card__arrow">›</View>
            </View>
          </Card>
        ))}
      </View>
    </ScrollView>
  )
}
