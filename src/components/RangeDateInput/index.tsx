import React, { HTMLAttributes, ReactNode, useEffect, useId, useMemo, useRef, useState } from 'react'
import {
  CalendarDay,
  CalendarGrid,
  CalendarHeader,
  CalendarWeekDayLabel,
  Dropdown,
  DropdownWrapper,
  DefaultOptionButton,
  InputDateWrapper,
  CalendarDaySelectedBackground,
  CalendarDayValue,
} from './styles'
import { calendarSVG, chevronDownSVG, chevronLeftSVG, chevronRightSVG } from '../../assets/icon'
import { IconWrapper } from '../IconWrapper'
import { Input } from '../Input'
import { theme } from '../Themes'

export interface RangeDateInputProps extends HTMLAttributes<HTMLDivElement> {
  isRange?: boolean
  placeholder?: string
  label: string
  defaultOptions?: { text: string; id: number }[]
  selectedOption?: number | null
  readonly?: boolean
  disabled?: boolean
  onSelectedOptionChange?: (option: number | null) => void
  startCustomDate: Date | null
  endCustomDate: Date | null
  onSelectedCustomRange: (start: Date | null, end: Date | null) => void
}

export interface Position {
  x: number
  y: number
  width: number
  height: number
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
export const RangeDateInput: React.FC<RangeDateInputProps> = ({
  label,
  defaultOptions,
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
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

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
      setOpen(false)
    }
  }

  const onDayClick = (date: Date) => {
    if (onSelectedOptionChange) onSelectedOptionChange(null)
    if (!startCustomDate) {
      onSelectedCustomRange && onSelectedCustomRange(date, null)
      currentMouseHoverDate && setCurrentMouseHoverDate(date)
      if (isRange === false) setOpen(false)
    } else if (!endCustomDate) {
      let firstDate = startCustomDate
      let secondDate = date
      if (firstDate && secondDate && firstDate > secondDate) {
        const temp = firstDate
        firstDate = secondDate
        secondDate = temp
      }
      onSelectedCustomRange && onSelectedCustomRange(firstDate, secondDate)
      setOpen(false)
    } else {
      if (isRange === false) setOpen(false)
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
    })
    day.setDate(day.getDate() + 1)
  }

  const value = useMemo(() => {
    if (selectedOption !== null) return defaultOptions?.find(option => option.id === selectedOption)?.text ?? ''
    if (!firstDate && !secondDate) return ''
    if (firstDate && !secondDate) return firstDate.toLocaleDateString()

    if (secondDate && firstDate?.toLocaleDateString() === secondDate.toLocaleDateString())
      return firstDate.toLocaleDateString()

    if (firstDate && secondDate) return `${firstDate.toLocaleDateString()} - ${secondDate.toLocaleDateString()}`

    return ''
  }, [selectedOption, firstDate, secondDate])

  useEffect(() => {
    if (!open) return
    const handler = (event: MouseEvent) => {
      let element: HTMLElement | null = event.target as HTMLElement
      console.log(element)
      while (element && element !== document.body.parentElement) {
        if (element === wrapperRef.current) break
        element = element.parentElement
      }
      if (element === document.body.parentElement) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handler)

    return () => {
      document.removeEventListener('click', handler)
    }
  }, [open])

  placeholder = placeholder ?? 'Selecione um período'
  return (
    <InputDateWrapper {...props} ref={wrapperRef}>
      <Input
        iconLeft={
          <IconWrapper className="icon" src={calendarSVG} width="20px" height="20px" color={theme.colors.shade30} />
        }
        iconRight={
          <IconWrapper
            className={`icon ${open ? 'icon-rotate' : ''}`}
            src={chevronDownSVG}
            width="16px"
            color={theme.colors.shade30}
          />
        }
        placeholder={placeholder}
        label={label}
        value={value}
        readonly
        onClick={() => setOpen(!open)}
      />
      {open && (
        <DropdownWrapper>
          <Dropdown>
            {(defaultOptions?.length ?? 0) > 0 && (
              <div>
                {defaultOptions?.map(option => (
                  <DefaultOptionButton
                    selected={option.id === selectedOption}
                    key={option.id}
                    onClick={() => onSelectedOptionChangeHandler(option.id)}
                  >
                    {option.text}
                  </DefaultOptionButton>
                ))}
                <DefaultOptionButton selected={!!firstDate}>Período Personalizado</DefaultOptionButton>
              </div>
            )}
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
                    key={day.value}
                    today={day.today}
                    onClick={() => onDayClick(day.date)}
                    onMouseEnter={() => onMouseEnter(day.date)}
                    onMouseLeave={() => onMouseLeave(day.date)}
                  >
                    <CalendarDaySelectedBackground selected={day.selected} today={day.today} />
                    <CalendarDayValue>{day.value}</CalendarDayValue>
                  </CalendarDay>
                )
              })}
            </CalendarGrid>
          </Dropdown>
        </DropdownWrapper>
      )}
    </InputDateWrapper>
  )
}
