import { View, Text, ScrollView } from '@tarojs/components'
import { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { Card, Tag, Button } from '../../../components'
import { getTheoryCourses } from '../../../services/api'
import { useUserStore } from '../../../stores/user'
import type { TheoryCourse } from '../../../services/types'
import './index.scss'

const UNLOCK_COST = 100

export default function CourseList() {
  const [courses, setCourses] = useState<TheoryCourse[]>([])
  const points = useUserStore((s) => s.points)
  const isCourseUnlocked = useUserStore((s) => s.isCourseUnlocked)
  const spendAndUnlockCourse = useUserStore((s) => s.spendAndUnlockCourse)

  useEffect(() => {
    getTheoryCourses().then(setCourses)
  }, [])

  const handleUnlock = (c: TheoryCourse) => {
    if (points >= UNLOCK_COST && spendAndUnlockCourse(c.id, UNLOCK_COST)) {
      Taro.showToast({ title: '解锁成功', icon: 'success' })
      setCourses((prev) => prev.map((x) => (x.id === c.id ? { ...x, locked: false } : x)))
    } else {
      Taro.showToast({ title: '积分不足或已解锁', icon: 'none' })
    }
  }

  return (
    <ScrollView scrollY className="page-course">
      <View className="page-course__list">
        {courses.map((c) => {
          const unlocked = isCourseUnlocked(c.id) || !c.locked
          return (
            <Card key={c.id} className="course-card">
              <View className="course-card__row">
                <Text className="course-card__title">{c.title}</Text>
                <Tag type={unlocked ? 'primary' : 'default'}>{unlocked ? `进度 ${c.progress}%` : '已锁定'}</Tag>
              </View>
              <Text className="course-card__meta">{c.totalChapters} 章节</Text>
              {!unlocked && (
                <Button type="primary" size="sm" className="course-card__unlock" onClick={() => handleUnlock(c)}>
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
