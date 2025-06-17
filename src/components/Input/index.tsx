import React, { HTMLAttributes, ReactNode, useCallback, useEffect, useId, useRef, useState } from 'react'
import {
  InputWrapper,
  StyledInput,
  StyledInputBorder,
  StyledInputContent,
  StyledLabel,
  StyledErrorMessage,
} from './styles'
import { Paragraph } from '../Paragraph'
import { theme } from '../Themes'

export interface InputProps extends HTMLAttributes<HTMLDivElement> {
  type?: React.HTMLInputTypeAttribute
  placeholder?: string
  rightIcon?: ReactNode
  leftIcon?: ReactNode
  label?: string
  value?: string
  readonly?: boolean
  disabled?: boolean
  error?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

interface Position {
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
  onKeyUp,
  disabled,
  leftIcon,
  rightIcon,
  type = 'text',
  error,
  ...props
}) => {
  const id = useId()

  const [labelPosition, setLabelPosition] = useState<Position>({ x: 0, y: 0, width: 0, height: 0 })
  const [contentPosition, setContentPosition] = useState<Position>({ x: 0, y: 0, width: 0, height: 0 })

  const contentRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLLabelElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const updatePositions = useCallback(() => {
    const margin = 30
    const marginLabel = 4

    setContentPosition({
      x: (contentRef.current?.offsetLeft ?? 0) - margin,
      y: (contentRef.current?.offsetTop ?? 0) - margin,
      width: (contentRef.current?.offsetWidth ?? 0) + margin * 2,
      height: (contentRef.current?.offsetHeight ?? 0) + margin * 2,
    })

    setLabelPosition({
      x: (labelRef.current?.offsetLeft ?? 0) - marginLabel,
      y: (labelRef.current?.offsetTop ?? 0) - marginLabel,
      width: (labelRef.current?.offsetWidth ?? 0) + marginLabel * 2,
      height: (labelRef.current?.offsetHeight ?? 0) + marginLabel * 2,
    })
  }, [])

  const handleClick = () => {
    inputRef.current?.focus()
  }

  useEffect(() => {
    updatePositions()

    const handler = () => updatePositions()

    const resizeObserver = new ResizeObserver(handler)

    if (contentRef.current) resizeObserver.observe(contentRef.current)
    if (labelRef.current) resizeObserver.observe(labelRef.current)

    return () => resizeObserver.disconnect()
  }, [updatePositions])

  return (
    <InputWrapper {...props}>
      <StyledInputContent disabled={disabled} ref={contentRef} onClick={handleClick} hasError={!!error}>
        <StyledInputBorder content={contentPosition} label={labelPosition} hasError={!!error} />
        <StyledLabel htmlFor={id} ref={labelRef}>
          {label}
        </StyledLabel>
        {leftIcon}
        <StyledInput
          id={id}
          ref={inputRef}
          type={type}
          disabled={disabled}
          readOnly={readonly}
          value={value}
          placeholder={props.placeholder}
          onChange={onChange}
          onInput={onInput}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
        />
        {rightIcon}
      </StyledInputContent>
      {error && (
        <StyledErrorMessage>
          <Paragraph color={theme.colors.red40}>{error}</Paragraph>
        </StyledErrorMessage>
      )}
    </InputWrapper>
  )
}
