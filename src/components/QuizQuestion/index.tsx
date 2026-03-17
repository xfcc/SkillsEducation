import { View, Text } from '@tarojs/components'
import type { QuizQuestion as QuizQuestionType } from '../../services/types'
import './index.scss'

export interface QuizQuestionProps {
  question: QuizQuestionType
  index: number
  value?: string | string[]
  onChange?: (value: string | string[]) => void
  disabled?: boolean
}

export function QuizQuestion({ question, index, value, onChange, disabled }: QuizQuestionProps) {
  const handleSelect = (opt: string) => {
    if (disabled) return
    if (question.type === 'single') {
      onChange?.(opt)
    } else {
      const arr = Array.isArray(value) ? value : value ? [value] : []
      const next = arr.includes(opt) ? arr.filter((x) => x !== opt) : [...arr, opt]
      onChange?.(next)
    }
  }

  return (
    <View className="quiz-question">
      <Text className="quiz-question__title">
        {index + 1}. {question.question}
      </Text>
      {question.options?.map((opt) => {
        const selected =
          question.type === 'single'
            ? value === opt
            : Array.isArray(value) && value.includes(opt)
        return (
          <View
            key={opt}
            className={`quiz-question__option ${selected ? 'quiz-question__option--selected' : ''}`}
            onClick={() => handleSelect(opt)}
          >
            <Text>{opt}</Text>
          </View>
        )
      })}
    </View>
  )
}
