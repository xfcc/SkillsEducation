import { View } from '@tarojs/components'
import './index.scss'

export interface TagProps {
  children?: React.ReactNode
  /** 类型 */
  type?: 'default' | 'primary' | 'success'
  className?: string
}

export function Tag({ children, type = 'default', className = '' }: TagProps) {
  return <View className={`tag tag--${type} ${className}`.trim()}>{children}</View>
}
