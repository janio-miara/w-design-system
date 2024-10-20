import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react'
export type { DatePickerProps } from '../DatePicker'
export type { DateRangePickerProps } from '../DateRangePicker'
export type { PaginateProps } from '../Paginate'
export type { SelectProps, SelectRef } from '../Select'
export type { PortalSelectProps, Portal } from '../PortalSelect'
export type {
  SidebarGroupData,
  SidebarItemData,
  SidebarLayoutItemTypeGroup,
  SidebarLayoutItemTypeItem,
  SidebarLayoutItemTypeSpacer,
  SidebarProps,
} from '../Sidebar'
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
  loading?: boolean
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
  title: string
  footer?: ReactNode | ReactNode[]
}

export interface TabsTypes extends HTMLAttributes<HTMLDivElement> {
  tabs: string[]
  defaultActiveTab?: string
  onTabChange?: (activeTab: string) => void
}
