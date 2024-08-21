import React, { HTMLAttributes } from 'react'
import { RangeDateInput } from '../RangeDateInput'

export interface DateInputProps extends HTMLAttributes<HTMLDivElement> {
  placeholder?: string
  label: string
  defaultOptions?: { text: string; id: number }[]
  selectedOption?: number | null
  readonly?: boolean
  disabled?: boolean
  onSelectedOptionChange?: (option: number | null) => void
  customDate: Date | null
  onSelectedCustomDate?: (date: Date | null) => void
}

export const DateInput: React.FC<DateInputProps> = ({ onSelectedCustomDate, customDate, ...props }) => {
  const onRangeSelected = (start: Date | null) => {
    if (onSelectedCustomDate) onSelectedCustomDate(start)
  }
  return (
    <RangeDateInput
      {...props}
      isRange={false}
      onSelectedCustomRange={onRangeSelected}
      startCustomDate={customDate}
      endCustomDate={customDate}
    />
  )
}
