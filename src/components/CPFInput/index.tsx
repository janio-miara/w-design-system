import { MaskitoOptions } from '@maskito/core'
import { forwardRef } from 'react'

import { FormattedInputGenerator, FormattedInputProps } from '../FormattedInputGenerator'
export const formatCPF = (value: string) => {
  return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

export type CPFInputProps = FormattedInputProps

export const CPFMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]

const DocumentMaskitoOptions: MaskitoOptions = {
  mask: CPFMask,
}

const applyMask = (value: string) => {
  return formatCPF(value)
}

const removeMask = (value: string) => {
  return value.replace(/[^\d]/g, '')
}

export const CPFInput = forwardRef(FormattedInputGenerator(DocumentMaskitoOptions, applyMask, removeMask))
