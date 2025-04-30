import React, { HTMLAttributes, ReactNode, useCallback, useEffect, useId, useRef } from 'react'
import { InputWrapper, StyledInput, StyledInputBorder, StyledInputContent, StyledLabel } from './styles'

export interface InputProps extends HTMLAttributes<HTMLDivElement> {
  placeholder?: string
  rightIcon?: ReactNode
  leftIcon?: ReactNode
  label?: string
  value?: string
  readonly?: boolean
  disabled?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export interface Position {
  x: number
  y: number
  width: number
  height: number
}

export const Input: React.FC<InputProps> = ({
  label,
  readonly,
  onChange,
  onInput,
  value,
  onKeyDown,
  disabled,
  onKeyUp,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const id = useId()
  const [labelPosition, setLabelPosition] = React.useState<Position>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })
  const [contentPosition, setContentPosition] = React.useState<Position>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })

  const contentRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLLabelElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const updatePositions = useCallback(() => {
    const margin = 30
    setContentPosition({
      x: (contentRef.current?.offsetLeft ?? 0) - margin,
      y: (contentRef.current?.offsetTop ?? 0) - margin,
      width: (contentRef.current?.offsetWidth ?? 0) + margin * 2,
      height: (contentRef.current?.offsetHeight ?? 0) + margin * 2,
    })
    setLabelPosition({
      x: labelRef.current?.offsetLeft ?? 0 - 3,
      y: labelRef.current?.offsetTop ?? 0 - 3,
      width: labelRef.current?.offsetWidth ?? 0 + 6,
      height: labelRef.current?.offsetHeight ?? 0 + 6,
    })
  }, [])

  const onClickHandler = () => {
    inputRef.current?.focus()
  }

  useEffect(() => {
    const handler = () => updatePositions()

    let resizeObserver: ResizeObserver | null = null
    if (ResizeObserver) {
      resizeObserver = new ResizeObserver(handler)
      if (contentRef.current) {
        resizeObserver.observe(contentRef.current)
      }
      if (labelRef.current) {
        resizeObserver.observe(labelRef.current)
      }
    } else {
      window.addEventListener('resize', handler)
    }

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect()
      } else {
        window.removeEventListener('resize', handler)
      }
    }
  }, [updatePositions])

  useEffect(() => {
    updatePositions()
  }, [label, updatePositions])

  return (
    <InputWrapper {...props}>
      <StyledInputContent disabled={disabled} ref={contentRef} onClick={onClickHandler}>
        <StyledInputBorder content={contentPosition} label={labelPosition} />
        <StyledLabel htmlFor={id} ref={labelRef}>
          {label}
        </StyledLabel>
        {leftIcon}
        <StyledInput
          id={id}
          disabled={disabled}
          value={value}
          placeholder={props.placeholder}
          ref={inputRef}
          onChange={onChange}
          onInput={onInput}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          readOnly={readonly}
        />
        {rightIcon}
      </StyledInputContent>
    </InputWrapper>
  )
}
