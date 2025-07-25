import { HTMLAttributes } from 'react'
import { DateRangePicker, DateRangePickerProps } from '../DateRangePicker'

type GetElementType<T> = T extends (infer U)[] ? U : never

export interface DatePickerProps<
  T extends GetElementType<DateRangePickerProps['options']> = GetElementType<DateRangePickerProps['options']>,
> extends HTMLAttributes<HTMLDivElement> {
  placeholder?: string
  label: string
  options?: T[]
  selectedOption?: T | null
  readonly?: boolean
  disabled?: boolean
  onSelectedOptionChange?: (option: T | null) => void
  customDate: Date | null
  onSelectedCustomDate?: (date: Date | null) => void
}

export const DatePicker = <
  T extends GetElementType<DateRangePickerProps['options']> = GetElementType<DateRangePickerProps['options']>,
>({
  onSelectedCustomDate,
  customDate,
  ...props
}: DatePickerProps<T>) => {
  const onRangeSelected = (start: Date | null) => {
    if (onSelectedCustomDate) onSelectedCustomDate(start)
  }
  return (
    <DateRangePicker<T>
      {...props}
      isRange={false}
      onSelectedCustomRange={onRangeSelected}
      startCustomDate={customDate}
      endCustomDate={customDate}
    />
  )
}
