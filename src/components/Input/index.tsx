import React, { HTMLAttributes, ReactNode, useEffect, useId, useRef } from 'react'
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

  const updatePositions = () => {
    if (contentRef.current) {
      setContentPosition({
        x: 0,
        y: 0,
        width: contentRef.current.offsetWidth,
        height: contentRef.current.offsetHeight,
      })
    }
    if (labelRef.current) {
      setLabelPosition({
        x: labelRef.current.offsetLeft,
        y: labelRef.current.offsetTop,
        width: labelRef.current.offsetWidth,
        height: labelRef.current.offsetHeight,
      })
    }
  }

  const onClickHandler = () => {
    inputRef.current?.focus()
  }

  useEffect(() => {
    const handler = () => updatePositions()

    window.addEventListener('resize', handler)

    return () => window.removeEventListener('resize', handler)
  }, [])

  useEffect(() => {
    updatePositions()
  }, [label])

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
