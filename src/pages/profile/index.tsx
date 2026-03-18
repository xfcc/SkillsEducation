import { View, Text, ScrollView } from '@tarojs/components'
import { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { Card } from '../../components'
import { getUserProfile, getLearningStats, getProfileReports } from '../../services/api'
import { useUserStore } from '../../stores/user'
import type { UserProfile, ProfileReport } from '../../services/types'
import './index.scss'

const QUICK_ACTIONS = [
  { id: 'cases', icon: '📄', iconBg: '#EFF6FF', label: '我的病例', url: '/subpackages/secondary/profile-my-cases/index', hasDot: false },
  { id: 'live', icon: '📺', iconBg: '#FEF2F2', label: '直播报名', url: '/subpackages/secondary/profile-live-signup/index', hasDot: true },
  { id: 'favorite', icon: '📑', iconBg: '#FFFBEB', label: '内容收藏', url: '/subpackages/secondary/profile-favorites/index', hasDot: false },
] as const

const SETTINGS_ITEMS = [
  { id: 'profile', label: '个人资料', url: '/subpackages/secondary/profile-basic/index' },
  { id: 'tags', label: '兴趣标签', url: '/subpackages/secondary/profile-tags/index' },
  { id: 'history', label: '浏览历史', url: '/subpackages/secondary/profile-history/index' },
  { id: 'feedback', label: '意见反馈', url: '/subpackages/secondary/profile-feedback/index' },
  { id: 'privacy', label: '隐私与协议', url: '/subpackages/secondary/profile-privacy/index' },
] as const

export default function Profile() {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [totalMinutes, setTotalMinutes] = useState(0)
  const [reports, setReports] = useState<ProfileReport[]>([])
  const points = useUserStore((s) => s.points)
  const badges = useUserStore((s) => s.badges)

  useEffect(() => {
    Promise.all([getUserProfile(), getLearningStats(), getProfileReports()]).then(([p, s, r]) => {
      setProfile(p)
      setTotalMinutes(s.totalMinutes)
      setReports(r)
    })
  }, [])

  const goToReport = (id: string) => {
    Taro.navigateTo({ url: `/subpackages/profile-reports/report/index?id=${id}` })
  }
  const goToSettings = () => {
    Taro.navigateTo({ url: '/subpackages/profile-reports/settings/index' })
  }
  const goTo = (url: string) => () => {
    if (url) Taro.navigateTo({ url })
  }

  const subtitle = [profile?.department, profile?.position].filter(Boolean).join(' · ') || '—'
  const displayBadges = badges.slice(0, 3)

  return (
    <ScrollView scrollY className="page-profile">
      <View className="profile-header">
        <Text className="profile-header__title">我的</Text>
      </View>

      <View className="profile-main">
        {/* 深色用户卡 */}
        <View className="profile-hero">
          <View className="profile-hero__glow" />
          <View className="profile-hero__top">
            <View className="profile-hero__avatar-wrap">
              <View className="profile-hero__avatar">
                <Text className="profile-hero__avatar-icon">👤</Text>
              </View>
            </View>
            <View className="profile-hero__info">
              <Text className="profile-hero__name">{profile?.name ?? '—'}</Text>
              <Text className="profile-hero__subtitle">{subtitle}</Text>
            </View>
          </View>
          <View className="profile-hero__stats">
            <View className="profile-hero__stat">
              <Text className="profile-hero__stat-label">学习时长</Text>
              <View className="profile-hero__stat-row">
                <Text className="profile-hero__stat-num">{totalMinutes}</Text>
                <Text className="profile-hero__stat-unit">分钟</Text>
              </View>
            </View>
            <View className="profile-hero__stat">
              <Text className="profile-hero__stat-label">当前积分</Text>
              <View className="profile-hero__stat-row">
                <Text className="profile-hero__stat-num">{points}</Text>
                <Text className="profile-hero__stat-unit">分</Text>
              </View>
            </View>
          </View>
          <View className="profile-hero__badges">
            <View className="profile-hero__badges-left">
              <Text className="profile-hero__badges-title">专职勋章</Text>
              <Text className="profile-hero__badges-hint">收集解锁高阶训练营</Text>
            </View>
            <View className="profile-hero__badges-list">
              {displayBadges.map((b) => (
                <View
                  key={b.id}
                  className={`profile-hero__badge ${b.unlocked ? 'profile-hero__badge--unlocked' : 'profile-hero__badge--locked'}`}
                >
                  <Text className="profile-hero__badge-icon">{b.unlocked ? '⭐' : '🔒'}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* 三宫格 */}
        <View className="profile-quick">
          {QUICK_ACTIONS.map((a) => (
            <Card key={a.id} className="profile-quick-item" onClick={goTo(a.url)}>
              <View className="profile-quick-item__icon-wrap" style={{ background: a.iconBg }}>
                {a.hasDot && <View className="profile-quick-item__dot" />}
                <Text className="profile-quick-item__icon">{a.icon}</Text>
              </View>
              <Text className="profile-quick-item__label">{a.label}</Text>
            </Card>
          ))}
        </View>

        {/* 专属报告档案 */}
        <View className="profile-section">
          <Text className="profile-section__title">专属报告档案</Text>
          <Card className="profile-reports" noPadding>
            {reports.map((r) => (
              <View
                key={r.id}
                className="profile-report-row"
                onClick={() => goToReport(r.id)}
              >
                <View className="profile-report-row__left">
                  <View className={`profile-report-row__pdf profile-report-row__pdf--${r.type}`}>PDF</View>
                  <View>
                    <Text className="profile-report-row__title">{r.title}</Text>
                    <Text className="profile-report-row__date">{r.date}</Text>
                  </View>
                </View>
                <Text className="profile-report-row__arrow">›</Text>
              </View>
            ))}
          </Card>
        </View>

        {/* 设置列表 */}
        <View className="profile-section profile-section--settings">
          <View className="profile-settings">
            {SETTINGS_ITEMS.map((item) => (
              <View
                key={item.id}
                className="profile-settings-row"
                onClick={goTo(item.url)}
              >
                <Text className="profile-settings-row__label">{item.label}</Text>
                <Text className="profile-settings-row__arrow">›</Text>
              </View>
            ))}
          </View>
        </View>
        <View className="profile-bottom" />
        <View className="profile-settings-link" onClick={goToSettings}>
          <Text className="profile-settings-link__text">设置</Text>
        </View>
      </View>
    </ScrollView>
  )
}
