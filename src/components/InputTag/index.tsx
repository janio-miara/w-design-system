import React, { HTMLAttributes, ReactNode, useCallback, useEffect, useId, useRef, useState } from 'react'
import { InputWrapper, StyledInput, StyledInputBorder, StyledInputContent, StyledLabel } from './styles'
import { Paragraph } from '../Paragraph'
import { theme } from '../Themes'
import { IconWrapper } from '../IconWrapper'
import { addSVG } from '../../assets/icon'

export interface InputProps extends HTMLAttributes<HTMLDivElement> {
  placeholder?: string
  rightIcon?: ReactNode
  leftIcon?: ReactNode
  label?: string
  readonly?: boolean
  disabled?: boolean
  value?: string
  tags: string[]
  setTags: (tags: string[]) => void
}

export interface Position {
  x: number
  y: number
  width: number
  height: number
}

export const InputTag: React.FC<InputProps> = ({
  label,
  readonly,
  disabled,
  leftIcon,
  rightIcon,
  tags,
  setTags,
  placeholder,
  ...props
}) => {
  const id = useId()
  const contentRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLLabelElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState('')

  const [labelPosition, setLabelPosition] = useState<Position>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })
  const [contentPosition, setContentPosition] = useState<Position>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })

  const updatePositions = useCallback(() => {
    const margin = 30
    const marginLabel = 4
    if (contentRef.current) {
      setContentPosition({
        x: contentRef.current.offsetLeft - margin,
        y: contentRef.current.offsetTop - margin,
        width: contentRef.current.offsetWidth + margin * 2,
        height: contentRef.current.offsetHeight + margin * 2,
      })
    }
    if (labelRef.current) {
      setLabelPosition({
        x: labelRef.current.offsetLeft - marginLabel,
        y: labelRef.current.offsetTop - marginLabel,
        width: labelRef.current.offsetWidth + marginLabel * 2,
        height: labelRef.current.offsetHeight + marginLabel * 2,
      })
    }
  }, [])

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

  const addTag = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) e.stopPropagation()
    if (inputValue.trim() && !tags.includes(inputValue.trim())) {
      setTags([...tags, inputValue.trim()])
      setInputValue('')
      inputRef.current?.focus()
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    inputRef.current?.focus()
    e.stopPropagation()
  }

  return (
    <>
      {/* ✅ Mantendo a borda dinâmica com ref */}
      <InputWrapper {...props}>
        <StyledInputContent disabled={disabled} ref={contentRef} onClick={e => handleContainerClick(e)}>
          {/* ✅ Mantendo a borda dinâmica */}
          <StyledInputBorder content={contentPosition} label={labelPosition} />
          <StyledLabel htmlFor={id} ref={labelRef}>
            {label}
          </StyledLabel>
          {leftIcon}

          {/* ✅ Input controlado e foco garantido */}
          <StyledInput
            id={id}
            disabled={disabled}
            ref={inputRef}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder={placeholder}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                e.preventDefault()
                addTag()
              }
            }}
            readOnly={readonly}
          />
          {
            <>
              {rightIcon}
              <button className={'button-action'} onClick={e => addTag(e)}>
                <IconWrapper src={addSVG} width="24px" height="24px" color={theme.colors.shade30} />
              </button>
            </>
          }
        </StyledInputContent>

        <div className={'container-input-tag'}>
          {tags.map((tag, index) => (
            <div className={'wrapper-tag'} key={index}>
              <Paragraph color={theme.colors.cyan30}>{tag}</Paragraph>
              <button className="wrapper-tag-button" onClick={() => removeTag(tag)}>
                x
              </button>
            </div>
          ))}
        </div>
      </InputWrapper>
    </>
  )
}
