import React, { HTMLAttributes, useEffect, useMemo, useRef, useState } from 'react'
import { calendarSVG, chevronLeftSVG, chevronRightSVG } from '../../assets/icon'
import { IconWrapper } from '../IconWrapper'
import { Select, SelectRef } from '../Select'
import { theme } from '../Themes'
import {
  CalendarDay,
  CalendarDaySelectedBackground,
  CalendarDayValue,
  CalendarGrid,
  CalendarHeader,
  CalendarWeekDayLabel,
} from './styles'

export interface DateRangePickerProps extends HTMLAttributes<HTMLDivElement> {
  isRange?: boolean
  placeholder?: string
  label?: string
  options?: { text: string; id: number }[]
  selectedOption?: number | null
  readonly?: boolean
  disabled?: boolean
  onSelectedOptionChange?: (option: number | null) => void
  startCustomDate: Date | null
  endCustomDate: Date | null
  onSelectedCustomRange: (start: Date | null, end: Date | null) => void
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
export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  label,
  options,
  selectedOption,
  onSelectedOptionChange,
  placeholder,
  onSelectedCustomRange,
  startCustomDate,
  endCustomDate,
  isRange,
  ...props
}) => {
  const [currentYear, setCurrentYear] = useState(0)
  const [currentMonth, setCurrentMonth] = useState(0)
  const [currentMouseHoverDate, setCurrentMouseHoverDate] = useState<Date | null>(null)
  const selectRef = useRef<SelectRef>(null)

  useEffect(() => {
    const date = new Date()
    setCurrentYear(date.getFullYear())
    setCurrentMonth(date.getMonth())
  }, [])

  const days: DayType[] = []

  const changeMonth = (delta: number) => {
    const newDate = new Date(currentYear, currentMonth + delta)
    setCurrentYear(newDate.getFullYear())
    setCurrentMonth(newDate.getMonth())
  }

  const onSelectedOptionChangeHandler = (option: number | null) => {
    if (onSelectedOptionChange) {
      onSelectedOptionChange(option)
      if (onSelectedCustomRange) onSelectedCustomRange(null, null)
      selectRef.current?.setOpen(false)
    }
  }

  const onDayClick = (date: Date) => {
    if (onSelectedOptionChange) onSelectedOptionChange(null)
    if (!startCustomDate) {
      onSelectedCustomRange && onSelectedCustomRange(date, null)
      currentMouseHoverDate && setCurrentMouseHoverDate(date)
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
      setCurrentMouseHoverDate(date)
    }
  }

  const onMouseEnter = (date: Date) => {
    if (startCustomDate && !endCustomDate) {
      setCurrentMouseHoverDate(date)
    }
  }
  const onMouseLeave = (date: Date) => {}

  const day = new Date(currentYear, currentMonth, 1)

  for (let i = 0; i < day.getDay(); i++) {
    days.push({ type: 'empty', key: `before-${i}` })
  }

  const todayString = new Date().toDateString()
  let firstDate = startCustomDate
  let secondDate = endCustomDate ?? currentMouseHoverDate
  if (firstDate && secondDate && firstDate > secondDate) {
    const temp = firstDate
    firstDate = secondDate
    secondDate = temp
  }

  while (day.getMonth() === currentMonth) {
    const isSelected = (firstDate && secondDate && day >= firstDate && day <= secondDate) ?? false
    days.push({
      type: 'day',
      value: day.getDate(),
      today: day.toDateString() === todayString,
      selected: isSelected,
      date: new Date(day),
      isFirstSelected: (firstDate && firstDate.toDateString() === day.toDateString()) ?? false,
      isLastSelected: (secondDate && secondDate.toDateString() === day.toDateString()) ?? false,
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
  const { customOptionId, optionComputed } = useMemo(() => {
    if (options && options.length > 0) {
      const customOptionId = Math.max(...options.map(option => option.id ?? 0)) + 1
      const optionComputed = [...options, { text: 'Período Personalizado', id: customOptionId }]
      return { customOptionId, optionComputed }
    }
    return { customOptionId: 0, optionComputed: [] }
  }, [selectedOption, options])

  return (
    <Select
      ref={selectRef}
      placeholder={placeholder}
      label={label}
      value={value}
      leftIcon={
        <IconWrapper className="icon" src={calendarSVG} width="20px" height="20px" color={theme.colors.shade30} />
      }
      options={optionComputed}
      selectedOption={selectedOption ?? (firstDate ? customOptionId : null)}
      onOptionChange={onSelectedOptionChangeHandler}
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
              isFirstSelected={day.isFirstSelected}
              isLastSelected={day.isLastSelected}
              key={day.value}
              today={day.today}
              onClick={() => onDayClick(day.date)}
              onMouseEnter={() => onMouseEnter(day.date)}
              onMouseLeave={() => onMouseLeave(day.date)}
            >
              <CalendarDaySelectedBackground
                isFirstSelected={day.isFirstSelected}
                isLastSelected={day.isLastSelected}
                selected={day.selected}
                today={day.today}
              />
              <CalendarDayValue>{day.value}</CalendarDayValue>
            </CalendarDay>
          )
        })}
      </CalendarGrid>
    </Select>
  )
}
