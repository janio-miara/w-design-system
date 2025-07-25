import {
  HTMLAttributes,
  ReactNode,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from 'react'
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
  autoComplete?: string
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
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeValue?: (value: string) => void
  onInputValue?: (value: string) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  border?: boolean
}

interface Position {
  x: number
  y: number
  width: number
  height: number
}

export interface InputRef {
  focus: () => void
  getInputRef: () => HTMLInputElement | null
}

const InputRender = (
  {
    autoComplete,
    label,
    readonly,
    onChangeValue,
    onChange,
    onInputValue,
    onInput,
    value,
    onKeyDown,
    onKeyUp,
    disabled,
    leftIcon,
    rightIcon,
    type = 'text',
    error,
    border,
    ...props
  }: InputProps,
  ref: React.ForwardedRef<InputRef>,
) => {
  const id = useId()
  const [labelPosition, setLabelPosition] = useState<Position>({ x: 0, y: 0, width: 0, height: 0 })
  const [contentPosition, setContentPosition] = useState<Position>({ x: 0, y: 0, width: 0, height: 0 })

  const contentRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLLabelElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    getInputRef: () => inputRef.current,
  }))

  const onChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event)
      }

      if (onChangeValue) {
        onChangeValue(event.currentTarget.value)
      }
    },
    [onChange, onChangeValue],
  )

  const onInputHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onInput) {
        onInput(event)
      }

      if (onInputValue) {
        onInputValue(event.currentTarget.value)
      }
    },
    [onInput, onInputValue],
  )

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
    if (document.activeElement !== inputRef.current) {
      inputRef.current?.focus()
    }
  }

  useEffect(() => {
    if (border === false) return

    updatePositions()

    const handler = () => updatePositions()

    const resizeObserver = new ResizeObserver(handler)

    if (contentRef.current) resizeObserver.observe(contentRef.current)
    if (labelRef.current) resizeObserver.observe(labelRef.current)

    return () => resizeObserver.disconnect()
  }, [updatePositions, border])

  return (
    <InputWrapper {...props} ref={wrapperRef}>
      <StyledInputContent $disabled={disabled} ref={contentRef} onClick={handleClick} $hasError={!!error}>
        {border !== false && <StyledInputBorder $content={contentPosition} $label={labelPosition} $hasError={!!error} />}
        <StyledLabel htmlFor={id} ref={labelRef}>
          {label}
        </StyledLabel>
        {leftIcon}
        <StyledInput
          autoComplete={autoComplete}
          id={id}
          ref={inputRef}
          type={type}
          disabled={disabled}
          readOnly={readonly}
          value={value}
          placeholder={props.placeholder}
          onChange={onChangeHandler}
          onInput={onInputHandler}
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

export const Input = forwardRef<InputRef, InputProps>(InputRender)
