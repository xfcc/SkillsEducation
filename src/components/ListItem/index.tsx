import { View, ViewProps } from '@tarojs/components'
import './index.scss'

export interface ListItemProps extends ViewProps {
  /** 左侧内容 */
  left?: React.ReactNode
  /** 主内容 */
  children?: React.ReactNode
  /** 右侧内容（如箭头） */
  right?: React.ReactNode
  /** 是否显示底部分割 */
  border?: boolean
  /** 点击回调 */
  onClick?: () => void
}

export function ListItem({ left, children, right, border = true, onClick, className = '', ...rest }: ListItemProps) {
  return (
    <View
      className={`list-item ${border ? 'list-item--border' : ''} ${className}`.trim()}
      onClick={onClick}
      {...rest}
    >
      {left != null && <View className="list-item__left">{left}</View>}
      <View className="list-item__main">{children}</View>
      {right != null && <View className="list-item__right">{right}</View>}
    </View>
  )
}
