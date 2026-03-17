import { View, Text, ScrollView } from '@tarojs/components'
import { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { Card, DataNumber, ListItem } from '../../components'
import { useUserStore } from '../../stores/user'
import { getUserProfile, getLearningStats, getProfileReports } from '../../services/api'
import type { UserProfile, ProfileReport } from '../../services/types'
import './index.scss'

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

  return (
    <ScrollView scrollY className="page-profile">
      {/* 学习资产 */}
      <View className="section">
        <Text className="section__title">学习资产</Text>
        <Card>
          <View className="profile-header">
            <Text className="profile-header__name">{profile?.name ?? '—'}</Text>
          </View>
          <View className="profile-assets">
            <View className="asset-item">
              <Text className="asset-item__label">学习时长</Text>
              <DataNumber value={totalMinutes} suffix=" 分钟" size="md" />
            </View>
            <View className="asset-item">
              <Text className="asset-item__label">当前积分</Text>
              <DataNumber value={points} suffix=" 积分" size="md" />
            </View>
          </View>
          <View className="profile-badges">
            <Text className="profile-badges__title">勋章（可解锁更多内容）</Text>
            <View className="profile-badges__list">
              {badges.map((b) => (
                <View key={b.id} className={`badge-dot ${b.unlocked ? 'badge-dot--unlocked' : ''}`}>
                  <Text className="badge-dot__name">{b.name}</Text>
                </View>
              ))}
            </View>
          </View>
        </Card>
      </View>

      {/* 我的报告 */}
      <View className="section">
        <Text className="section__title">我的报告</Text>
        <Card noPadding>
          {reports.map((r) => (
            <ListItem
              key={r.id}
              onClick={() => goToReport(r.id)}
              right={<Text>›</Text>}
            >
              <View>
                <Text>{r.title}</Text>
                <Text className="list-item-date">{r.date}</Text>
              </View>
            </ListItem>
          ))}
        </Card>
      </View>

      {/* 更多 */}
      <View className="section">
        <Text className="section__title">更多</Text>
        <Card noPadding>
          <ListItem onClick={() => {}} right={<Text>›</Text>}>
            <Text>我的病例</Text>
          </ListItem>
          <ListItem onClick={() => {}} right={<Text>›</Text>}>
            <Text>直播报名</Text>
          </ListItem>
          <ListItem onClick={() => {}} right={<Text>›</Text>}>
            <Text>收藏</Text>
          </ListItem>
          <ListItem onClick={() => {}} right={<Text>›</Text>}>
            <Text>浏览历史</Text>
          </ListItem>
          <ListItem onClick={goToSettings} right={<Text>›</Text>}>
            <Text>个人资料</Text>
          </ListItem>
          <ListItem onClick={goToSettings} right={<Text>›</Text>}>
            <Text>兴趣标签</Text>
          </ListItem>
          <ListItem onClick={goToSettings} right={<Text>›</Text>}>
            <Text>隐私与协议</Text>
          </ListItem>
          <ListItem onClick={goToSettings} right={<Text>›</Text>}>
            <Text>意见反馈</Text>
          </ListItem>
        </Card>
      </View>
    </ScrollView>
  )
}
