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
  T extends { text: string; id: number; icon?: ReactNode } = { text: string; id: number; icon?: ReactNode },
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

const SelectFowardRef = <T extends { text: string; id: number; icon?: ReactNode; badge?: string | number }>(
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
        <DropdownWrapper>
          <Dropdown
            dropDownTop={props.dropDownTop}
            dropDownWidth={dropDownWidth}
            dropDownMaxHeight={props.dropDownMaxHeight}
          >
            {(options?.length ?? 0) > 0 && (
              <div>
                {filteredOptions.map(option => (
                  <OptionButton
                    selected={selectedOption?.id === option.id}
                    key={option.id}
                    onClick={() => onOptionClick(option)}
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
                ))}
              </div>
            )}
            {children}
          </Dropdown>
        </DropdownWrapper>
      )}
    </SelectWrapper>
  )
}

export const Select = React.forwardRef(SelectFowardRef) as <T extends { text: string; id: number; icon?: ReactNode }>(
  props: PropsWithChildren<SelectProps<T>> & { ref?: React.ForwardedRef<SelectRef> },
) => React.ReactElement
