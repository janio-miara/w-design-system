import React, {
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  PointerEvent,
} from 'react'
import { chevronDownSVG } from '../../assets/icon'
import { IconWrapper } from '../IconWrapper'
import { Input } from '../Input'
import { theme } from '../Themes'
import {
  Dropdown,
  DropdownWrapper,
  OptionButton,
  OptionText,
  SelectWrapper,
  OptionBackground,
  OptionBackgroundProps,
  OptionsWrapper,
  OptionTextBadge,
  NoResults,
} from '../Select/styles'
import { Paragraph } from '../Paragraph'

export interface MultiSelectProps<
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
  onOptionChange?: (option: T[]) => void
  options?: T[]
  placeholder?: string
  rightIcon?: ReactNode
  selectedOptions?: T[]
  value?: string
  dropDownTop?: boolean
  dropDownWidth?: string
  disableSearch?: boolean
  dropDownMaxHeight?: string
  error?: string
  border?: boolean
}

export interface MultiSelectRef {
  setOpen(open: boolean): void
}

const MultiSelectFowardRef = <T extends { text: string; id: number; icon?: ReactNode; badge?: string | number }>(
  {
    children,
    label,
    leftIcon,
    onOptionChange,
    options,
    placeholder,
    rightIcon,
    selectedOptions,
    value,
    dropDownWidth,
    disabled,
    disableSearch,
    error,
    border,
    ...props
  }: PropsWithChildren<MultiSelectProps<T>>,
  ref: React.ForwardedRef<MultiSelectRef>,
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

  const onOptionClick = useCallback(
    (option: T) => {
      const isActive = selectedOptions?.findIndex(item => item.id === option.id) !== -1
      if (isActive) {
        if (onOptionChange) onOptionChange(selectedOptions?.filter(item => item.id !== option.id) ?? [])
      } else {
        if (onOptionChange) onOptionChange([...(selectedOptions ?? []), option])
      }
    },
    [onOptionChange, selectedOptions],
  )

  useEffect(() => {
    if (usingInput) return
    if (value) {
      setComputedValue(value)
    } else if (selectedOptions) {
      if (selectedOptions?.length === options?.length) {
        setComputedValue('Todos')
      } else {
        setComputedValue(
          selectedOptions
            .map(option => option.text)
            .sort()
            .join(', '),
        )
      }
    } else {
      setComputedValue('')
    }
  }, [value, selectedOptions, disableSearch, open, usingInput, options])

  useEffect(() => {
    if (!open) setUsingInput(false)
  }, [open])

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disableSearch) return
    setComputedValue(event.target.value)
    setUsingInput(true)
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
  const optionsWrapperRef = useRef<HTMLDivElement | null>(null)
  const [backgroundStyle, setBackgroundStyle] = useState<OptionBackgroundProps>({
    $opacity: 0,
    $width: '100%',
    $height: '0px',
    $top: '0px',
    $left: '0px',
  })

  const optionRefs = useRef<(HTMLButtonElement | null)[]>([])
  const lastItemIdRef = useRef<number | undefined>(null)
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null)

  const updateBackground = useCallback((index: number) => {
    if (index === lastItemIdRef.current) return
    const target = optionRefs.current[index]
    if (!target) return
    if (!optionsWrapperRef.current) return

    const { left, top, height } = target.getBoundingClientRect()
    const { left: contentLeft, top: contentTop } = optionsWrapperRef.current.getBoundingClientRect()
    const padding = 16
    setBackgroundStyle({
      $opacity: 1,
      $width: `100%`,
      $height: `${height}px`,
      $top: `${padding + top - contentTop}px`,
      $left: `${left - contentLeft}px`,
    })

    lastItemIdRef.current = index
  }, [])

  /**
   * When the user has the mouse over the dropdown and presses an up or down arrow key, the dropdown should
   * ignore the hover change, as the user is navigating with the keyboard
   */
  const [disableHoverChange, setDisableHoverChange] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const scrollIntoView = (index: number) => {
    const option = optionRefs.current[index]
    if (option && dropdownRef.current) {
      option.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      const intersectionObserver = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          setDisableHoverChange(true)
          timeoutRef.current = setTimeout(() => {
            timeoutRef.current = null
            setDisableHoverChange(false)
          }, 200)
        }
        setTimeout(() => {
          intersectionObserver.disconnect()
        }, 100)
      })
      if (dropdownRef.current) intersectionObserver.observe(dropdownRef.current)
    }
  }

  useEffect(() => {
    if (!open) {
      setHighlightedIndex(null)
      setBackgroundStyle(backgroundStyle => ({ ...backgroundStyle, $opacity: 0 }))
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!filteredOptions.length) return

      if (event.key === 'ArrowDown') {
        event.preventDefault()
        setHighlightedIndex(prevIndex => {
          const nextIndex = prevIndex === null || prevIndex === filteredOptions.length - 1 ? 0 : prevIndex + 1
          scrollIntoView(nextIndex)
          updateBackground(nextIndex)
          const element = optionRefs.current[nextIndex]
          if (element) {
            const checkbox = element.querySelector('input')
            if (checkbox) {
              checkbox.focus()
            }
          }
          return nextIndex
        })
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault()
        setHighlightedIndex(prevIndex => {
          const nextIndex = prevIndex === null || prevIndex === 0 ? filteredOptions.length - 1 : prevIndex - 1
          scrollIntoView(nextIndex)
          updateBackground(nextIndex)
          const element = optionRefs.current[nextIndex]
          if (element) {
            const checkbox = element.querySelector('input')
            if (checkbox) {
              checkbox.focus()
            }
          }
          return nextIndex
        })
      }

      if (event.key === 'Enter' && highlightedIndex !== null) {
        event.preventDefault()
        onOptionClick(filteredOptions[highlightedIndex])
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, filteredOptions, highlightedIndex, updateBackground, onOptionClick])

  useEffect(() => {
    if (disableHoverChange && dropdownRef.current) {
      const element = dropdownRef.current
      const handler = () => {
        setDisableHoverChange(false)
      }
      element.addEventListener('scrollend', handler)

      return () => {
        element.removeEventListener('scrollend', handler)
      }
    }
  }, [disableHoverChange])
  /**
   * Used to handle the pointer enter event, it's used to highlight the option that the mouse is over
   */
  const onPointerEnter = useCallback(
    (event: PointerEvent<Element>, index: number) => {
      if (disableHoverChange) return
      updateBackground(index)
      setHighlightedIndex(index)
    },
    [disableHoverChange, updateBackground, setHighlightedIndex],
  )

  /**
   * Used to handle the pointer leave event, it's used to remove the highlight from the option that the mouse is over
   */
  const onPointerLeave = useCallback(
    (event: PointerEvent<Element>, index: number) => {
      if (disableHoverChange) return
      if (index === lastItemIdRef.current) {
        setBackgroundStyle(currentStyle => ({ ...currentStyle, $opacity: 0 }))
        lastItemIdRef.current = undefined
      }
    },
    [disableHoverChange],
  )

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
        error={error}
        border={border}
      />
      {open && (
        <DropdownWrapper>
          <Dropdown
            ref={dropdownRef}
            $dropDownTop={props.dropDownTop}
            $dropDownWidth={dropDownWidth}
            $dropDownMaxHeight={props.dropDownMaxHeight}
          >
            {(options?.length ?? 0) > 0 && (
              <>
                <OptionsWrapper ref={optionsWrapperRef}>
                  {filteredOptions.map((option, index) => (
                    <OptionButton
                      $selected={selectedOptions?.some(selectedOption => option.id === selectedOption.id) ?? false}
                      key={option.id}
                      onClick={() => onOptionClick(option)}
                      ref={ref => {
                        optionRefs.current[index] = ref
                      }}
                      onPointerEnter={event => onPointerEnter(event, index)}
                      onPointerLeave={event => onPointerLeave(event, index)}
                    >
                      <input
                        type="checkbox"
                        checked={selectedOptions?.some(selectedOption => option.id === selectedOption.id) ?? false}
                        onChange={() => onOptionClick(option)}
                      />
                      {option?.badge ? (
                        <OptionTextBadge>
                          <div>{option.text}</div>
                          <Paragraph strongBold color={theme.colors.honey30}>
                            {option.badge}
                          </Paragraph>
                        </OptionTextBadge>
                      ) : (
                        <>
                          {option.icon}
                            <OptionText title={option.text}>{option.text}</OptionText>
                        </>
                      )}
                    </OptionButton>
                  ))}
                </OptionsWrapper>
                <OptionBackground
                  $opacity={backgroundStyle.$opacity}
                  $width={backgroundStyle.$width}
                  $height={backgroundStyle.$height}
                  $top={backgroundStyle.$top}
                  $left={backgroundStyle.$left}
                />
                {filteredOptions.length === 0 && options?.length && <NoResults>Sem resultados</NoResults>}
              </>
            )}
            {children}
          </Dropdown>
        </DropdownWrapper>
      )}
    </SelectWrapper>
  )
}

export const MultiSelect = React.forwardRef(MultiSelectFowardRef) as <
  T extends { text: string; id: number; icon?: ReactNode },
>(
  props: PropsWithChildren<MultiSelectProps<T>> & { ref?: React.ForwardedRef<MultiSelectRef> },
) => React.ReactElement
