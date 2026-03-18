import { View, Text, ScrollView } from '@tarojs/components'
import { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { Card, Tag } from '../../../components'
import { getPracticeCampDays } from '../../../services/api'
import type { PracticeDay, PracticeTask } from '../../../services/types'
import './index.scss'

export default function TaskPage() {
  const [days, setDays] = useState<PracticeDay[]>([])
  const campId = (Taro.getCurrentInstance().router?.params?.campId as string) || 'camp-1'

  useEffect(() => {
    getPracticeCampDays(campId).then(setDays)
  }, [campId])

  const goToQuiz = (taskId: string) => {
    Taro.navigateTo({ url: `/subpackages/practice-tasks/quiz/index?taskId=${taskId}` })
  }

  const goToTaskDetail = (t: PracticeTask) => {
    if (t.type === 'simulator') {
      Taro.navigateTo({ url: `/subpackages/secondary/simulator/index?taskId=${t.id}&from=camp` })
      return
    }
    const title = encodeURIComponent(t.title ?? '')
    Taro.navigateTo({ url: `/subpackages/secondary/home-frontier-detail/index?id=${t.id}&title=${title}` })
  }

  return (
    <ScrollView scrollY className="page-task">
      <View className="page-task__days">
        {days.map((d) => (
          <Card key={d.id} className="day-card">
            <View className="day-card__head">
              <Text className="day-card__title">Day {d.day} · {d.title}</Text>
              <Tag type={d.completed ? 'success' : 'default'}>{d.completed ? '已完成' : '未完成'}</Tag>
            </View>
            <View className="day-card__tasks">
              {d.tasks.map((t: PracticeTask) => (
                <View
                  key={t.id}
                  className="task-item"
                  onClick={() => (t.type === 'quiz' ? goToQuiz(t.id) : goToTaskDetail(t))}
                >
                  <Text className="task-item__title">{t.title}</Text>
                  <View className="task-item__meta">
                    <Tag type="default">{t.type === 'quiz' ? '测试题' : t.type === 'simulator' ? '模拟器' : '阅读'}</Tag>
                    {t.completed && <Tag type="success">已完成</Tag>}
                  </View>
                </View>
              ))}
            </View>
          </Card>
        ))}
      </View>
    </ScrollView>
  )
}
