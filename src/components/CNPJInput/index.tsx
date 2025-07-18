import { MaskitoOptions } from '@maskito/core'
import { forwardRef } from 'react'

import { FormattedInputGenerator, FormattedInputProps } from '../FormattedInputGenerator'

export const formatCNPJ = (value: string) => {
  return value.replace(/([a-zA-Z0-9]{2})([a-zA-Z0-9]{3})([a-zA-Z0-9]{3})([a-zA-Z0-9]{4})(\d{2})/, '$1.$2.$3/$4-$5')
}

export type CNPJInputProps = FormattedInputProps

export const CNPJMask = [
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
  mask: CNPJMask,
}

const applyMask = (value: string) => {
  return formatCNPJ(value)
}

const removeMask = (value: string) => {
  return value.replace(/[^[a-zA-Z0-9]/g, '')
}

export const CNPJInput = forwardRef(FormattedInputGenerator(DocumentMaskitoOptions, applyMask, removeMask))
