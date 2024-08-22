import React, { HTMLAttributes } from 'react'
import { DateRangePicker } from '../DateRangePicker'

export interface DatePickerProps extends HTMLAttributes<HTMLDivElement> {
  placeholder?: string
  label: string
  options?: { text: string; id: number }[]
  selectedOption?: number | null
  readonly?: boolean
  disabled?: boolean
  onSelectedOptionChange?: (option: number | null) => void
  customDate: Date | null
  onSelectedCustomDate?: (date: Date | null) => void
}

export const DatePicker: React.FC<DatePickerProps> = ({ onSelectedCustomDate, customDate, ...props }) => {
  const onRangeSelected = (start: Date | null) => {
    if (onSelectedCustomDate) onSelectedCustomDate(start)
  }
  return (
    <DateRangePicker
      {...props}
      isRange={false}
      onSelectedCustomRange={onRangeSelected}
      startCustomDate={customDate}
      endCustomDate={customDate}
    />
  )
}
