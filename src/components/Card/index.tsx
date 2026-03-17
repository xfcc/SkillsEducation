import { View, ViewProps } from '@tarojs/components'
import './index.scss'

export interface CardProps extends ViewProps {
  /** 是否无内边距 */
  noPadding?: boolean
  /** 子元素 */
  children?: React.ReactNode
}

export function Card({ noPadding, children, className = '', ...rest }: CardProps) {
  return (
    <View className={`card ${noPadding ? 'card--no-padding' : ''} ${className}`.trim()} {...rest}>
      {children}
    </View>
  )
}
