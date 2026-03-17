import { View, Text, ScrollView } from '@tarojs/components'
import { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { Button, QuizQuestion } from '../../../components'
import { getQuizQuestions, submitQuizAnswer } from '../../../services/api'
import { useUserStore } from '../../../stores/user'
import type { QuizQuestion as QuizQuestionType } from '../../../services/types'
import './index.scss'

const POINTS_ON_PASS = 10

export default function QuizPage() {
  const [questions, setQuestions] = useState<QuizQuestionType[]>([])
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({})
  const [submitted, setSubmitted] = useState(false)
  const taskId = (Taro.getCurrentInstance().router?.params?.taskId as string) || 't2'
  const addPoints = useUserStore((s) => s.addPoints)

  useEffect(() => {
    getQuizQuestions(taskId).then(setQuestions)
  }, [taskId])

  const setAnswer = (id: string, value: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async () => {
    const res = await submitQuizAnswer(taskId, answers)
    setSubmitted(true)
    if (res.passed) {
      addPoints(POINTS_ON_PASS)
      Taro.showToast({ title: `通过，得分 ${res.score}，+${POINTS_ON_PASS} 积分`, icon: 'success' })
    } else {
      Taro.showToast({ title: '未通过', icon: 'none' })
    }
  }

  return (
    <ScrollView scrollY className="page-quiz">
      <View className="page-quiz__inner">
        {questions.map((q, i) => (
          <QuizQuestion
            key={q.id}
            question={q}
            index={i}
            value={answers[q.id]}
            onChange={(v) => setAnswer(q.id, v)}
            disabled={submitted}
          />
        ))}
        {!submitted && questions.length > 0 && (
          <Button type="primary" block onClick={handleSubmit}>
            提交答案
          </Button>
        )}
      </View>
    </ScrollView>
  )
}
