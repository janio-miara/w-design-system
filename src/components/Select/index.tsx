import React, {
  FC,
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
import { theme } from '../Themes'
import { OptionButton, Dropdown, DropdownWrapper, SelectWrapper } from './styles'

export interface SelectProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean
  label?: string
  leftIcon?: ReactNode
  onOptionChange?: (option: number | null) => void
  options?: { text: string; id: number }[]
  placeholder?: string
  rightIcon?: ReactNode
  selectedOption?: number | null
  value?: string
}

export interface SelectRef {
  setOpen(open: boolean): void
}

const SelectFowardRef: React.ForwardRefRenderFunction<SelectRef, SelectProps> = (
  { children, label, leftIcon, onOptionChange, options, placeholder, rightIcon, selectedOption, value, ...props },
  ref,
) => {
  const [open, setOpen] = useState(false)
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

  const onOptionClick = (option: number) => {
    onOptionChange && onOptionChange(option)
    setOpen(false)
  }

  const valueComputed = useMemo(() => {
    if (value) return value
    if (selectedOption) {
      const option = options?.find(option => option.id === selectedOption)
      return option?.text
    }
    return ''
  }, [value, selectedOption, options])

  return (
    <SelectWrapper {...props} ref={wrapperRef}>
      <Input
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
        value={valueComputed}
        readonly
        onClick={() => setOpen(!open)}
      />
      {open && (
        <DropdownWrapper>
          <Dropdown>
            {(options?.length ?? 0) > 0 && (
              <div>
                {options?.map(option => (
                  <OptionButton
                    selected={option.id === selectedOption}
                    key={option.id}
                    onClick={() => onOptionClick(option.id)}
                  >
                    {option.text}
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

export const Select = React.forwardRef(SelectFowardRef)
