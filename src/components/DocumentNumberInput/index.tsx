import { MaskitoOptions } from '@maskito/core'
import { forwardRef } from 'react'

import { FormattedInputGenerator, FormattedInputProps } from '../FormattedInputGenerator'
export const formatCPF = (value: string) => {
  return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

export const formatCNPJ = (value: string) => {
  return value.replace(/([a-zA-Z0-9]{2})([a-zA-Z0-9]{3})([a-zA-Z0-9]{3})([a-zA-Z0-9]{4})(\d{2})/, '$1.$2.$3/$4-$5')
}

export const formatDocumentNumber = (documentNumber: string) => {
  if (documentNumber.length === 11) {
  }
}
export type DocumentNumberInputProps = FormattedInputProps
const CPFMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
const CNPJMask = [
  /[a-zA-Z0-9]/,
  /[a-zA-Z0-9]/,
  '.',
  /[a-zA-Z0-9]/,
  /[a-zA-Z0-9]/,
  /[a-zA-Z0-9]/,
  '.',
  /[a-zA-Z0-9]/,
  /[a-zA-Z0-9]/,
  /[a-zA-Z0-9]/,
  '/',
  /[a-zA-Z0-9]/,
  /[a-zA-Z0-9]/,
  /[a-zA-Z0-9]/,
  /[a-zA-Z0-9]/,
  '-',
  /\d/,
  /\d/,
]

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
