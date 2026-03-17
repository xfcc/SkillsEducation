import { Button as TaroButton, ButtonProps as TaroButtonProps } from '@tarojs/components'
import './index.scss'

export interface ButtonProps extends Omit<TaroButtonProps, 'size'> {
  /** 类型 */
  type?: 'primary' | 'default' | 'ghost'
  /** 尺寸 */
  size?: 'sm' | 'md' | 'lg'
  /** 是否块级 */
  block?: boolean
  children?: React.ReactNode
}

export function Button({
  type = 'primary',
  size = 'md',
  block,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  return (
    <TaroButton
      className={`btn btn--${type} btn--${size} ${block ? 'btn--block' : ''} ${className}`.trim()}
      {...rest}
    >
      {children}
    </TaroButton>
  )
}
