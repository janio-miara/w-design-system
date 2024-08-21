import React, { HTMLAttributes, ReactNode, useEffect, useId, useMemo, useRef } from 'react'
import {
  CalendarDay,
  CalendarGrid,
  CalendarHeader,
  CalendarWeekDayLabel,
  Dropdown,
  DropdownWrapper,
  DefaultOptionButton,
  InputDateWrapper,
} from './styles'
import { chevronLeftSVG, chevronRightSVG } from '../../assets/icon'
import { IconWrapper } from '../IconWrapper'
import { Input } from '../Input'

export interface DateInputProps extends HTMLAttributes<HTMLDivElement> {
  placeholder?: string
  label: string
  defaultOptions?: number[]
  selectedOption?: number
  onSelectedOptionChange?: (option: number | null) => void
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

type DayType = EmptyDay | Day
export const RangeDateInput: React.FC<DateInputProps> = ({
  label,
  defaultOptions,
  selectedOption,
  onSelectedOptionChange,
  ...props
}) => {
  const [currentYear, setCurrentYear] = React.useState(0)
  const [currentMonth, setCurrentMonth] = React.useState(0)
  const [firstSelectedDate, setFirstSelectedDate] = React.useState<Date | null>(null)
  const [secondSelectedDate, setSecondSelectedDate] = React.useState<Date | null>(null)
  const [currentMouseHoverDate, setCurrentMouseHoverDate] = React.useState<Date | null>(null)
  const [open, setOpen] = React.useState(false)

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
      setOpen(false)
    }
  }

  const onDayClick = (date: Date) => {
    if (onSelectedOptionChange) onSelectedOptionChange(null)
    if (!firstSelectedDate) {
      setFirstSelectedDate(date)
      currentMouseHoverDate && setCurrentMouseHoverDate(date)
    } else if (!secondSelectedDate) {
      setSecondSelectedDate(date)
      setOpen(false)
    } else {
      setFirstSelectedDate(date)
      setCurrentMouseHoverDate(date)
      setSecondSelectedDate(null)
    }
  }

  const onMouseEnter = (date: Date) => {
    if (firstSelectedDate && !secondSelectedDate) {
      setCurrentMouseHoverDate(date)
    }
  }
  const onMouseLeave = (date: Date) => {}

  const day = new Date(currentYear, currentMonth, 1)

  for (let i = 0; i < day.getDay(); i++) {
    days.push({ type: 'empty', key: `before-${i}` })
  }

  const todayString = new Date().toDateString()
  let firstDate = firstSelectedDate
  let secondDate = secondSelectedDate ?? currentMouseHoverDate
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

  const value = useMemo(() => {
    if (selectedOption) return `Últimos ${selectedOption} dias`
    if (!firstDate && !secondDate) return 'Selecione um período'
    if (firstDate && !secondDate) return firstDate.toLocaleDateString()

    if (secondDate && firstDate?.toLocaleDateString() === secondDate.toLocaleDateString())
      return firstDate.toLocaleDateString()

    if (firstDate && secondDate) return `${firstDate.toLocaleDateString()} - ${secondDate.toLocaleDateString()}`

    return 'Selecione um período'
  }, [selectedOption, firstDate, secondDate])

  return (
    <InputDateWrapper {...props}>
      <Input label={label} value={value} readonly onClick={() => setOpen(!open)} />
      {open && (
        <DropdownWrapper>
          <Dropdown>
            <div>
              {defaultOptions?.map((option, index) => (
                <DefaultOptionButton
                  selected={selectedOption === option}
                  key={index}
                  onClick={() => onSelectedOptionChangeHandler(option)}
                >
                  Últimos {option} dias
                </DefaultOptionButton>
              ))}
              <DefaultOptionButton selected={selectedOption === null}>Período Personalizado</DefaultOptionButton>
            </div>
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
                    today={day.today}
                    selected={day.selected}
                    key={day.value}
                    onClick={() => onDayClick(day.date)}
                    onMouseEnter={() => onMouseEnter(day.date)}
                    onMouseLeave={() => onMouseLeave(day.date)}
                  >
                    {day.value}
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
