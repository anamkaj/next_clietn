import { ReactNode } from 'react'

export type ButtonGroupProp = {
  text?: string
  icon?: ReactNode
  action?: () => void
  style?: string
  styleIcon?: string
  textStyle?: string
}
