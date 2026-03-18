import { View, Text, ScrollView } from '@tarojs/components'
import { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { Card } from '../../components'
import { getPracticeCounts, getDailyQuiz } from '../../services/api'
import type { PracticeCounts, DailyQuiz } from '../../services/types'
import './index.scss'

const UTILITY_TOOLS = [
  { id: 'simulator', icon: '🌐', iconBg: '#EFF6FF', title: 'AI虚拟模拟器', desc: '无Carto照样练习实操', url: '/subpackages/secondary/simulator/index?from=practice' },
  { id: 'pvc', icon: '🎯', iconBg: '#EEF2FF', title: '室早定位助手', desc: '智慧交互，辅助读图', url: '/subpackages/practice-tasks/utility-pvc/index' },
  { id: 'aifv', icon: '📄', iconBg: '#ECFDF5', title: 'AIFV 诊断报告', desc: '查看与生成智能报告', url: '/subpackages/practice-tasks/utility-aifv/index' },
  { id: 'pvi', icon: '❤️', iconBg: '#FFF1F2', title: 'PVI 诊断', desc: '病例复盘与算法推荐', url: '/subpackages/practice-tasks/utility-pvi/index' },
] as const

export default function Practice() {
  const [counts, setCounts] = useState<PracticeCounts | null>(null)
  const [dailyQuiz, setDailyQuiz] = useState<DailyQuiz | null>(null)

  useEffect(() => {
    Promise.all([getPracticeCounts(), getDailyQuiz()]).then(([c, q]) => {
      setCounts(c ?? null)
      setDailyQuiz(q ?? null)
    })
  }, [])

  const goToCamps = () => Taro.navigateTo({ url: '/subpackages/theory-course/camp/index' })
  const goToClass = () => Taro.navigateTo({ url: '/subpackages/theory-course/class/index' })
  const goTo = (url: string) => () => url && Taro.navigateTo({ url })
  const goToDailyQuiz = () => {
    const date = encodeURIComponent(dailyQuiz?.dateLabel ?? '')
    Taro.navigateTo({ url: `/subpackages/secondary/daily-quiz-detail/index?date=${date}` })
  }

  return (
    <ScrollView scrollY className="page-practice">
      <View className="practice-header">
        <Text className="practice-header__title">演练</Text>
        <View className="practice-header__icon" />
      </View>

      <View className="practice-main">
        {/* 两卡：iEP 训练营、我的班级 */}
        <View className="practice-cards">
          <Card className="practice-entry-card" onClick={goToCamps}>
            <View className="practice-entry-card__left">
              <View className="practice-entry-card__icon practice-entry-card__icon--blue">
                <Text className="practice-entry-card__icon-text">📺</Text>
              </View>
              <View>
                <Text className="practice-entry-card__title">iEP 训练营</Text>
                <Text className="practice-entry-card__desc">结构化实战任务</Text>
              </View>
            </View>
            <View className="practice-entry-card__right">
              <Text className="practice-entry-card__badge practice-entry-card__badge--blue">
                正在开营 {counts?.openCampsCount ?? 2} 个
              </Text>
              <Text className="practice-entry-card__arrow">›</Text>
            </View>
          </Card>
          <Card className="practice-entry-card" onClick={goToClass}>
            <View className="practice-entry-card__left">
              <View className="practice-entry-card__icon practice-entry-card__icon--orange">
                <Text className="practice-entry-card__icon-text">👥</Text>
              </View>
              <View>
                <Text className="practice-entry-card__title">我的班级</Text>
                <Text className="practice-entry-card__desc">同行研讨与进阶</Text>
              </View>
            </View>
            <View className="practice-entry-card__right">
              <Text className="practice-entry-card__badge practice-entry-card__badge--orange">
                已加入 {counts?.joinedClassesCount ?? 3} 个
              </Text>
              <Text className="practice-entry-card__arrow">›</Text>
            </View>
          </Card>
        </View>

        {/* 实用工具 2x2 */}
        <View className="practice-section">
          <Text className="practice-section__title">实用工具</Text>
          <View className="practice-tools">
            {UTILITY_TOOLS.map((t) => (
              <Card key={t.id} className="practice-tool-card" onClick={goTo(t.url)}>
                <View className="practice-tool-card__icon" style={{ background: t.iconBg }}>
                  <Text className="practice-tool-card__icon-text">{t.icon}</Text>
                </View>
                <Text className="practice-tool-card__title">{t.title}</Text>
                <Text className="practice-tool-card__desc">{t.desc}</Text>
              </Card>
            ))}
          </View>
        </View>

        {/* 每日一题 */}
        {dailyQuiz && (
          <View className="practice-section practice-section--quiz">
            <View className="practice-quiz-date">
              <Text className="practice-quiz-date__num">{(dailyQuiz.dateLabel.split(' ')[0] ?? '')}</Text>
              <Text className="practice-quiz-date__month">{(dailyQuiz.dateLabel.split(' ').slice(1).join(' ') || '')}</Text>
            </View>
            <Card className="practice-quiz-card" onClick={goToDailyQuiz}>
              <View className="practice-quiz-card__tags">
                {dailyQuiz.tags.map((tag) => (
                  <Text key={tag} className="practice-quiz-card__tag"># {tag}</Text>
                ))}
              </View>
              <Text className="practice-quiz-card__question">{dailyQuiz.question}</Text>
              <View className="practice-quiz-card__options">
                {dailyQuiz.options.map((opt, i) => (
                  <View
                    key={i}
                    className={`practice-quiz-option ${opt.isCorrect ? 'practice-quiz-option--correct' : ''}`}
                  >
                    <View className="practice-quiz-option__bar" style={{ width: `${opt.percent}%` }} />
                    <View className="practice-quiz-option__row">
                      <Text className="practice-quiz-option__text">{opt.text}</Text>
                      <Text className="practice-quiz-option__percent">{opt.percent}%</Text>
                    </View>
                  </View>
                ))}
              </View>
              <View className="practice-quiz-card__foot">
                <Text className="practice-quiz-card__meta">
                  {dailyQuiz.participantCount.toLocaleString()} 人已选择
                </Text>
                <Text className="practice-quiz-card__meta">{dailyQuiz.commentCount} 条讨论</Text>
              </View>
            </Card>
          </View>
        )}
      </View>
    </ScrollView>
  )
}
