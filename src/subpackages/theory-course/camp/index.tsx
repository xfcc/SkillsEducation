import { View, Text, ScrollView } from '@tarojs/components'
import { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { Card, Tag, DataNumber, Button } from '../../../components'
import { getPracticeCamps } from '../../../services/api'
import { useUserStore } from '../../../stores/user'
import type { PracticeCamp } from '../../../services/types'
import './index.scss'

const UNLOCK_COST = 150

export default function CampList() {
  const [camps, setCamps] = useState<PracticeCamp[]>([])
  const points = useUserStore((s) => s.points)
  const isCampUnlocked = useUserStore((s) => s.isCampUnlocked)
  const spendAndUnlockCamp = useUserStore((s) => s.spendAndUnlockCamp)

  useEffect(() => {
    getPracticeCamps().then(setCamps)
  }, [])

  const goToCampDetail = (campId: string) => {
    Taro.navigateTo({ url: `/subpackages/theory-course/task/index?campId=${campId}` })
  }

  const handleUnlock = (c: PracticeCamp) => {
    if (points >= UNLOCK_COST && spendAndUnlockCamp(c.id, UNLOCK_COST)) {
      Taro.showToast({ title: '解锁成功', icon: 'success' })
      setCamps((prev) => prev.map((x) => (x.id === c.id ? { ...x, locked: false } : x)))
    } else {
      Taro.showToast({ title: '积分不足或已解锁', icon: 'none' })
    }
  }

  return (
    <ScrollView scrollY className="page-camp">
      <View className="page-camp__list">
        {camps.map((c) => {
          const unlocked = isCampUnlocked(c.id) || !c.locked
          return (
            <Card key={c.id} className="camp-card">
              <View className="camp-card__row">
                <Text className="camp-card__title">{c.name}</Text>
                <Tag type={unlocked ? 'success' : 'default'}>{unlocked ? '进行中' : '已锁定'}</Tag>
              </View>
              {c.description && (
                <Text className="camp-card__desc">{c.description}</Text>
              )}
              <View className="camp-card__meta">
                <DataNumber value={c.completedDays} suffix={`/ ${c.totalDays} 天`} size="sm" />
              </View>
              {unlocked ? (
                <Button type="primary" size="sm" className="camp-card__btn" onClick={() => goToCampDetail(c.id)}>
                  进入训练营
                </Button>
              ) : (
                <Button type="primary" size="sm" className="camp-card__btn" onClick={() => handleUnlock(c)}>
                  消耗 {UNLOCK_COST} 积分解锁
                </Button>
              )}
            </Card>
          )
        })}
      </View>
    </ScrollView>
  )
}
