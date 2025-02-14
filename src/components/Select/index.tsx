import React, {
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { chevronDownSVG } from '../../assets/icon'
import { IconWrapper } from '../IconWrapper'
import { Input } from '../Input'
import { Paragraph } from '../Paragraph'

import { theme } from '../Themes'
import { Dropdown, DropdownWrapper, OptionButton, OptionText, OptionTextBadge, SelectWrapper } from './styles'

export interface SelectProps<
  T extends { text: string; id: number; icon?: ReactNode; badge?: string | number } = {
    text: string
    id: number
    icon?: ReactNode
    badge?: string | number
  },
> extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean
  label?: string
  leftIcon?: ReactNode
  onOptionChange?: (option: T | null) => void
  options?: T[]
  placeholder?: string
  rightIcon?: ReactNode
  selectedOption?: T | null
  value?: string
  dropDownTop?: boolean
  dropDownWidth?: string
  disableSearch?: boolean
  dropDownMaxHeight?: string
}

export interface SelectRef {
  setOpen(open: boolean): void
}

const SelectFowardRef = <T extends { text: string; id: number; icon?: ReactNode; badge?: any }>(
  {
    children,
    label,
    leftIcon,
    onOptionChange,
    options,
    placeholder,
    rightIcon,
    selectedOption,
    value,
    dropDownWidth,
    disabled,
    disableSearch,
    ...props
  }: PropsWithChildren<SelectProps<T>>,
  ref: React.ForwardedRef<SelectRef>,
) => {
  const [open, setOpen] = useState(false)
  const [usingInput, setUsingInput] = useState(false)
  const [computedValue, setComputedValue] = useState(value)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useImperativeHandle(ref, () => ({
    setOpen,
  }))

  useEffect(() => {
    if (!open) return
    const handler = (event: MouseEvent) => {
      let element: HTMLElement | null = event.target as HTMLElement
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

  const onOptionClick = (option: T) => {
    onOptionChange && onOptionChange(option)
    setOpen(false)
  }

  useEffect(() => {
    if (usingInput) return
    if (value) {
      setComputedValue(value)
    } else if (selectedOption) {
      setComputedValue(selectedOption.text)
    } else {
      setComputedValue('')
    }
  }, [value, selectedOption, disableSearch, open, usingInput])

  useEffect(() => {
    if (!open) setUsingInput(false)
  }, [open])

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disableSearch) return
    setComputedValue(event.target.value)
    setUsingInput(true)
    onOptionChange && onOptionChange(null)
  }

  const filteredOptions: T[] = useMemo((): T[] => {
    if (!options) return []
    if (!usingInput || disableSearch) return options

    const normalizedValue = (computedValue || '')
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
    if (!normalizedValue) return options

    const items: T[] = []
    for (const option of options) {
      if (
        option.text
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .includes(normalizedValue)
      ) {
        items.push(option)
      }
    }
    return items
  }, [options, usingInput, disableSearch, computedValue])

  const dropdownRef = useRef<HTMLDivElement>(null)
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([])

  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null)

  useEffect(() => {
    if (!open) {
      setHighlightedIndex(null)
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!filteredOptions.length) return

      if (event.key === 'ArrowDown') {
        event.preventDefault()
        setHighlightedIndex(prevIndex => {
          const nextIndex = prevIndex === null || prevIndex === filteredOptions.length - 1 ? 0 : prevIndex + 1
          scrollIntoView(nextIndex)
          return nextIndex
        })
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault()
        setHighlightedIndex(prevIndex => {
          const nextIndex = prevIndex === null || prevIndex === 0 ? filteredOptions.length - 1 : prevIndex - 1
          scrollIntoView(nextIndex)
          return nextIndex
        })
      }

      if (event.key === 'Enter' && highlightedIndex !== null) {
        event.preventDefault()
        onOptionClick(filteredOptions[highlightedIndex])
      }
    }

    const scrollIntoView = (index: number) => {
      const option = optionRefs.current[index]
      if (option && dropdownRef.current) {
        option.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, filteredOptions, highlightedIndex])

  return (
    <SelectWrapper {...props} ref={wrapperRef}>
      <Input
        disabled={disabled}
        leftIcon={leftIcon}
        rightIcon={
          <>
            {rightIcon}
            <IconWrapper
              className={`icon ${open ? 'icon-rotate' : ''}`}
              src={chevronDownSVG}
              width="16px"
              color={theme.colors.shade30}
            />
          </>
        }
        placeholder={placeholder}
        label={label}
        value={computedValue}
        readonly={!open}
        onChange={onInputChange}
        onClick={() => {
          if (!disabled) {
            setComputedValue('')
            setUsingInput(true)
            setOpen(true)
          }
        }}
      />
      {open && (
        <DropdownWrapper ref={dropdownRef}>
          <Dropdown
            dropDownTop={props.dropDownTop}
            dropDownWidth={dropDownWidth}
            dropDownMaxHeight={props.dropDownMaxHeight}
          >
            {(options?.length ?? 0) > 0 && (
              <div>
                {filteredOptions.map((option, index) => {
                  const isSelected = selectedOption?.id === option.id
                  const isHighlighted = highlightedIndex === index

                  return (
                    <OptionButton
                      selected={isSelected}
                      key={option.id}
                      onClick={() => onOptionClick(option)}
                      ref={el => (optionRefs.current[index] = el)}
                      style={{
                        backgroundColor: isHighlighted ? theme.colors.shade20 : 'transparent',
                      }}
                    >
                      {option?.badge ? (
                        <OptionTextBadge>
                          <div>{option.text}</div>
                          <Paragraph strongBod color={theme.colors.honey30}>
                            {option.badge}
                          </Paragraph>
                        </OptionTextBadge>
                      ) : (
                        <>
                          {option.icon}
                          <OptionText>{option.text}</OptionText>
                        </>
                      )}
                    </OptionButton>
                  )
                })}
              </div>
            )}
            {children}
          </Dropdown>
        </DropdownWrapper>
      )}
    </SelectWrapper>
  )
}

export const Select = React.forwardRef(SelectFowardRef) as <
  T extends { text: string; id: number; icon?: ReactNode; badge?: any },
>(
  props: PropsWithChildren<SelectProps<T>> & { ref?: React.ForwardedRef<SelectRef> },
) => React.ReactElement
