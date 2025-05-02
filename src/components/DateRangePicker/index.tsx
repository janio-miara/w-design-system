import React, { HTMLAttributes, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { calendarSVG, chevronLeftSVG, chevronRightSVG } from '../../assets/icon'
import { IconWrapper } from '../IconWrapper'
import { Select, SelectProps, SelectRef } from '../Select'
import { theme } from '../Themes'
import {
  CalendarDay,
  CalendarDaySelectedBackground,
  CalendarDayValue,
  CalendarGrid,
  CalendarHeader,
  CalendarWeekDayLabel,
  Footer,
} from './styles'

type GetElementType<T> = T extends (infer U)[] ? U : never

export interface DateRangePickerProps<
  T extends GetElementType<SelectProps['options']> = GetElementType<SelectProps['options']>,
> extends HTMLAttributes<HTMLDivElement> {
  isRange?: boolean
  placeholder?: string
  label?: string
  options?: T[]
  selectedOption?: T | null
  readonly?: boolean
  disabled?: boolean
  onSelectedOptionChange?: (option: T | null) => void
  startCustomDate: Date | null
  endCustomDate: Date | null
  onSelectedCustomRange: (start: Date | null, end: Date | null) => void
  rangeDayLimit?: number
  footerMessage?: string
  onOpenChange?: (open: boolean) => void
}

interface EmptyDay {
  type: 'empty'
  key: string
}

interface Day {
  type: 'day'
  value: number
  today: boolean
  selected: boolean
  date: Date
  isFirstSelected: boolean
  isLastSelected: boolean
  isBlocked: boolean
}

const monthNames = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
]

const weekDays = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB']

type DayType = EmptyDay | Day
export const DateRangePicker = <T extends GetElementType<SelectProps['options']>>({
  label,
  options,
  selectedOption,
  onSelectedOptionChange,
  placeholder,
  onSelectedCustomRange,
  startCustomDate,
  endCustomDate,
  isRange,
  rangeDayLimit,
  footerMessage,
  onOpenChange,
  ...props
}: DateRangePickerProps<T>) => {
  const [currentYear, setCurrentYear] = useState(0)
  const [currentMonth, setCurrentMonth] = useState(0)
  const [currentMouseHoverDate, setCurrentMouseHoverDate] = useState<Date | null>(null)
  const selectRef = useRef<SelectRef>(null)

  useEffect(() => {
    const date = new Date()
    setCurrentYear(date.getFullYear())
    setCurrentMonth(date.getMonth())
  }, [])

  const resetTime = useCallback((date: Date | null): Date | null => {
    if (!date) return null
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0)
  }, [])

  const days: DayType[] = []

  const changeMonth = (delta: number) => {
    const newDate = new Date(currentYear, currentMonth + delta)
    setCurrentYear(newDate.getFullYear())
    setCurrentMonth(newDate.getMonth())
  }

  const onSelectedOptionChangeHandler = (option: T | null) => {
    if (onSelectedOptionChange) {
      onSelectedOptionChange(option)
      if (onSelectedCustomRange) onSelectedCustomRange(null, null)
      selectRef.current?.setOpen(false)
    }
  }

  const differenceInDays = (date1: Date, date2: Date) => {
    const diffTime = Math.abs(date2.getTime() - date1.getTime())
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  const onDayClick = (date: Date) => {
    if (onSelectedOptionChange) onSelectedOptionChange(null)
    if (!startCustomDate) {
      onSelectedCustomRange && onSelectedCustomRange(date, null)
      currentMouseHoverDate && setCurrentMouseHoverDate(resetTime(date))
      if (isRange === false) selectRef.current?.setOpen(false)
    } else if (!endCustomDate) {
      let firstDate = startCustomDate
      let secondDate = date
      if (firstDate && secondDate && firstDate > secondDate) {
        const temp = firstDate
        firstDate = secondDate
        secondDate = temp
      }
      onSelectedCustomRange && onSelectedCustomRange(firstDate, secondDate)
      selectRef.current?.setOpen(false)
    } else {
      if (isRange === false) selectRef.current?.setOpen(false)
      onSelectedCustomRange && onSelectedCustomRange(date, null)
      setCurrentMouseHoverDate(resetTime(date))
    }
  }

  const onOpenChangeHandler = (open: boolean) => {
    if (!open && startCustomDate && !endCustomDate) {
      let firstDate = startCustomDate
      let secondDate = startCustomDate
      onSelectedCustomRange && onSelectedCustomRange(firstDate, secondDate)
    }
    onOpenChange && onOpenChange(open)
  }

  const onMouseEnter = (date: Date) => {
    if (startCustomDate && !endCustomDate) {
      setCurrentMouseHoverDate(resetTime(date))
    }
  }
  const onMouseLeave = (date: Date) => {}

  const day = new Date(currentYear, currentMonth, 1)

  for (let i = 0; i < day.getDay(); i++) {
    days.push({ type: 'empty', key: `before-${i}` })
  }

  const todayString = new Date().toDateString()
  let firstDate = resetTime(startCustomDate)
  let secondDate = resetTime(endCustomDate) ?? currentMouseHoverDate
  if (firstDate && secondDate && firstDate > secondDate) {
    const temp = firstDate
    firstDate = secondDate
    secondDate = temp
  }

  while (day.getMonth() === currentMonth) {
    const isSelected = (firstDate && secondDate && day >= firstDate && day <= secondDate) ?? false
    let isBlocked = false
    if (rangeDayLimit !== undefined && startCustomDate && endCustomDate === null) {
      const diff = differenceInDays(startCustomDate, day)
      isBlocked = diff > rangeDayLimit - 1
    }
    days.push({
      type: 'day',
      value: day.getDate(),
      today: day.toDateString() === todayString,
      selected: isSelected,
      date: resetTime(new Date(day)) as Date,
      isFirstSelected: (firstDate && firstDate.toDateString() === day.toDateString()) ?? false,
      isLastSelected: (secondDate && secondDate.toDateString() === day.toDateString()) ?? false,
      isBlocked,
    })
    day.setDate(day.getDate() + 1)
  }

  const value = useMemo(() => {
    if (selectedOption !== null) return ''
    if (!firstDate && !secondDate) return ''
    if (firstDate && !secondDate) return firstDate.toLocaleDateString()

    if (secondDate && firstDate?.toLocaleDateString() === secondDate.toLocaleDateString())
      return firstDate.toLocaleDateString()

    if (firstDate && secondDate) return `${firstDate.toLocaleDateString()} - ${secondDate.toLocaleDateString()}`

    return ''
  }, [selectedOption, firstDate, secondDate])

  placeholder = placeholder ?? 'Selecione um período'
  const { customOption, optionComputed } = useMemo(() => {
    if (options && options.length > 0) {
      const customOptionId = Math.max(...options.map(option => option.id ?? 0)) + 1
      const customOption = {
        text: 'Período Personalizado',
        id: customOptionId,
      } as T
      const optionComputed = [...options, customOption]
      return { customOption, optionComputed }
    }
    return { customOption: null, optionComputed: [] }
  }, [options])

  return (
    <Select<T>
      disableSearch
      dropDownWidth="284px"
      dropDownMaxHeight="auto"
      ref={selectRef}
      placeholder={placeholder}
      label={label}
      value={value}
      leftIcon={
        <IconWrapper className="icon" src={calendarSVG} width="20px" height="20px" color={theme.colors.shade30} />
      }
      options={optionComputed}
      selectedOption={selectedOption ?? (firstDate ? customOption : null)}
      onOptionChange={onSelectedOptionChangeHandler}
      onOpenChange={onOpenChangeHandler}
      {...props}
    >
      <CalendarHeader>
        <IconWrapper className="icon" src={chevronLeftSVG} width="14px" onClick={() => changeMonth(-1)} />
        {monthNames[currentMonth]} {currentYear}
        <IconWrapper className="icon" src={chevronRightSVG} width="14px" onClick={() => changeMonth(1)} />
      </CalendarHeader>

      <CalendarGrid>
        {weekDays.map(weekDay => (
          <CalendarWeekDayLabel key={weekDay}>{weekDay}</CalendarWeekDayLabel>
        ))}
        {days.map(day => {
          if (day.type === 'empty') {
            return <div key={day.key}></div>
          }
          return (
            <CalendarDay
              $isFirstSelected={day.isFirstSelected}
              $isLastSelected={day.isLastSelected}
              $isBlocked={day.isBlocked}
              key={day.value}
              $today={day.today}
              onClick={() => !day.isBlocked && onDayClick(day.date)}
              onMouseEnter={() => !day.isBlocked && onMouseEnter(day.date)}
              onMouseLeave={() => !day.isBlocked && onMouseLeave(day.date)}
            >
              <CalendarDaySelectedBackground
                $isFirstSelected={day.isFirstSelected}
                $isLastSelected={day.isLastSelected}
                $selected={day.selected}
                $today={day.today}
                $isBlocked={day.isBlocked}
              />
              <CalendarDayValue>{day.value}</CalendarDayValue>
            </CalendarDay>
          )
        })}
      </CalendarGrid>
      {footerMessage && <Footer>{footerMessage}</Footer>}
    </Select>
  )
}
