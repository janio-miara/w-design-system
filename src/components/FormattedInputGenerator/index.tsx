import { MaskitoOptions } from '@maskito/core'
import { useMaskito } from '@maskito/react'
import { ForwardedRef, PropsWithChildren, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react'

import React from 'react'
import { Input, InputRef } from '../Input'
import { InputProps } from '../Input'

export interface TheFormattedTextFieldForwardedRef {
  focus: () => void
  getInputRef: () => HTMLInputElement | null
}

export type FormattedInputProps = Omit<InputProps, 'onChange' | 'onInput' | 'type'>

export const FormattedInputGenerator = (
  maskitoOptions: MaskitoOptions,
  applyMask: (valueWithoutMask: string) => string,
  removeMask: (valueWithMask: string) => string,
) => {
  function FormattedInput(
    {
      value,
      onInputValue,
      ...props
    }: PropsWithChildren<FormattedInputProps>,
    ref: ForwardedRef<TheFormattedTextFieldForwardedRef>,
  ) {
    const inputRef = useRef<InputRef>(null)
    const maskitoSetElement = useMaskito({ options: maskitoOptions })
    const [maskitoValue, setMaskitoValue] = useState<string>(value !== undefined ? applyMask(removeMask(value)) : '')

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      getInputRef: () => inputRef.current?.getInputRef() || null,
    }))

    useEffect(() => {
      if (!inputRef.current) {
        return
      }

      const inputElementRef = inputRef.current.getInputRef()
      if (!inputElementRef) return
      maskitoSetElement(inputElementRef)
    }, [maskitoSetElement])

    useEffect(() => {
      const valueFormatted = applyMask(removeMask(value || '')).trim()
      const maskitoValueFormatted = applyMask(removeMask(value || '')).trim()

      if (maskitoValueFormatted !== valueFormatted) {
        const maskitoValue = applyMask(value || '')
        setMaskitoValue(maskitoValue)
      }
    }, [value, maskitoValue])

    const onInputHandler = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value
        setMaskitoValue(value)
        if (onInputValue) onInputValue(applyMask(removeMask(value)))
      },
      [onInputValue],
    )

    return <Input ref={inputRef} type="text" onInput={onInputHandler} value={maskitoValue} {...props} />
  }
  return FormattedInput
}
