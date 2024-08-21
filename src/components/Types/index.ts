import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react'

type ColorsVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'gray' | 'warning' | 'yellow'
type ColorsVariantBanner = 'notice' | 'success' | 'danger' | 'warning'
export interface ButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ColorsVariant
  icon?: string
  radius?: boolean
  outline?: boolean
  halfLeft?: boolean
  halfRight?: boolean
  fullWidth?: boolean
  size?: 'small' | 'medium' | 'large'
}

export interface ButtonRadiusIconTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ColorsVariant
  icon?: string
  subTitle?: string
  size?: 'small' | 'medium' | 'large'
}

export interface ButtonRoundTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ColorsVariant
  icon?: string
  outline?: boolean
  badge?: number
  size?: 'small' | 'medium'
}

export interface BannerTypes extends HTMLAttributes<HTMLDivElement> {
  variant?: ColorsVariantBanner
  title?: string
  subTitle?: string
  onClick?: () => void
}

export interface ModalTypes extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  onClose: () => void
  footer?: ReactNode | ReactNode[]
}

export interface TabsTypes extends HTMLAttributes<HTMLDivElement> {
  tabs: string[]
  defaultActiveTab?: string
  onTabChange?: (activeTab: string) => void
}
