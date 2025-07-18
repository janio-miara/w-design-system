import { MaskitoOptions } from '@maskito/core'
import { forwardRef } from 'react'

import { FormattedInputGenerator, FormattedInputProps } from '../FormattedInputGenerator'
import { CPFMask, formatCPF } from '../CPFInput'
import { CNPJMask, formatCNPJ } from '../CNPJInput'

export type DocumentNumberInputProps = FormattedInputProps

const DocumentMaskitoOptions: MaskitoOptions = {
  mask: elementState => {
    const onlyDigits = elementState.value.replace(/\D/g, '')
    if (onlyDigits.length == 11 && !elementState.value.match(/[a-zA-Z]/)) {
      return CPFMask
    }
    return CNPJMask
  },
}

const applyMask = (value: string) => {
  if (value.length === 11) {
    return formatCPF(value)
  }
  return formatCNPJ(value)
}

const removeMask = (value: string) => {
  return value.replace(/[^\d]/g, '')
}

export const DocumentNumberInput = forwardRef(FormattedInputGenerator(DocumentMaskitoOptions, applyMask, removeMask))
