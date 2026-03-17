import { Text } from '@tarojs/components'
import './index.scss'

export interface DataNumberProps {
  /** 数值（用于高亮展示） */
  value: string | number
  /** 单位或后缀 */
  suffix?: string
  /** 尺寸 */
  size?: 'sm' | 'md' | 'lg' | 'hero'
  /** 是否加粗 */
  bold?: boolean
  className?: string
}

export function DataNumber({ value, suffix, size = 'md', bold = true, className = '' }: DataNumberProps) {
  return (
    <Text className={`data-number data-number--${size} ${bold ? 'data-number--bold' : ''} ${className}`.trim()}>
      <Text className="data-number__value">{String(value)}</Text>
      {suffix != null && <Text className="data-number__suffix">{suffix}</Text>}
    </Text>
  )
}
