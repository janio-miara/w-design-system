import { useMemo, HTMLAttributes, PropsWithChildren, ReactNode, forwardRef } from 'react'
import { Select, SelectProps, SelectRef } from '../Select'
import React from 'react'

export interface CountryState {
  id: number
  name: string
  abbreviation: string
}

export interface CountryStateSelectProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean
  label?: string
  leftIcon?: ReactNode
  onOptionChange?: (option: CountryState | null) => void
  /** selected option */
  selectedOption?: CountryState | null
  /** You can use this option to set the selected state through the abbreviation, in this case you should not use selectedOption */
  selectedOptionAbbreviation?: string | null
  placeholder?: string
  rightIcon?: ReactNode
  value?: string
  dropDownTop?: boolean
  dropDownWidth?: string
  disableSearch?: boolean
  dropDownMaxHeight?: string
  allStatesOption?: boolean
  /** array of abbreviations of states that will be visible in the select */
  validStates?: string[]
}

const CountryStateSelectFowardRef = (
  {
    children,
    allStatesOption,
    selectedOption,
    selectedOptionAbbreviation,
    validStates,
    ...props
  }: PropsWithChildren<CountryStateSelectProps>,
  ref: React.ForwardedRef<SelectRef>,
) => {
  const allStatesOptionValue = allStatesOption !== false

  const allCountryStates = useMemo(
    () => [
      { id: 1, name: 'Acre', abbreviation: 'AC' },
      { id: 2, name: 'Alagoas', abbreviation: 'AL' },
      { id: 3, name: 'Amapá', abbreviation: 'AP' },
      { id: 4, name: 'Amazonas', abbreviation: 'AM' },
      { id: 5, name: 'Bahia', abbreviation: 'BA' },
      { id: 6, name: 'Ceará', abbreviation: 'CE' },
      { id: 7, name: 'Espírito Santo', abbreviation: 'ES' },
      { id: 8, name: 'Goiás', abbreviation: 'GO' },
      { id: 9, name: 'Maranhão', abbreviation: 'MA' },
      { id: 10, name: 'Mato Grosso', abbreviation: 'MT' },
      { id: 11, name: 'Mato Grosso do Sul', abbreviation: 'MS' },
      { id: 12, name: 'Minas Gerais', abbreviation: 'MG' },
      { id: 13, name: 'Pará', abbreviation: 'PA' },
      { id: 14, name: 'Paraíba', abbreviation: 'PB' },
      { id: 15, name: 'Paraná', abbreviation: 'PR' },
      { id: 16, name: 'Pernambuco', abbreviation: 'PE' },
      { id: 17, name: 'Piauí', abbreviation: 'PI' },
      { id: 18, name: 'Rio de Janeiro', abbreviation: 'RJ' },
      { id: 19, name: 'Rio Grande do Norte', abbreviation: 'RN' },
      { id: 20, name: 'Rio Grande do Sul', abbreviation: 'RS' },
      { id: 21, name: 'Rondônia', abbreviation: 'RO' },
      { id: 22, name: 'Roraima', abbreviation: 'RR' },
      { id: 23, name: 'Santa Catarina', abbreviation: 'SC' },
      { id: 24, name: 'São Paulo', abbreviation: 'SP' },
      { id: 25, name: 'Sergipe', abbreviation: 'SE' },
      { id: 26, name: 'Tocantins', abbreviation: 'TO' },
      { id: 27, name: 'Distrito Federal', abbreviation: 'DF' },
    ],
    [],
  )

  const countryStates = useMemo(() => {
    if (!validStates) return allCountryStates
    return allCountryStates.filter(state => validStates.includes(state.abbreviation))
  }, [validStates, allCountryStates])

  const countrysStateOptions = useMemo(() => {
    return allStatesOptionValue
      ? [{ id: 0, name: 'Todos os estados', abbreviation: 'BR' }, ...countryStates]
      : countryStates
  }, [allStatesOptionValue, countryStates])

  const selectedOptionAbbreviationMap = useMemo(() => {
    return new Map(countrysStateOptions.map((option: CountryState) => [option.abbreviation, option]))
  }, [countrysStateOptions])

  const selectedOptionValue = useMemo(() => {
    if (selectedOption) {
      return {
        id: selectedOption.id,
        text: selectedOption.name,
        countryState: selectedOption,
      }
    }
    if (selectedOptionAbbreviation) {
      const selectedOptionMap = selectedOptionAbbreviationMap.get(selectedOptionAbbreviation)
      if (selectedOptionMap) {
        return {
          id: selectedOptionMap.id,
          text: selectedOptionMap.name,
          countryState: selectedOptionMap,
        }
      }
    }
    return null
  }, [selectedOption, selectedOptionAbbreviation, selectedOptionAbbreviationMap])

  const selectProps: SelectProps<{ text: string; id: number; countryState: CountryState }> = {
    ...props,
    placeholder: props.placeholder ?? 'Estado',
    options: countrysStateOptions.map(countryState => {
      return {
        id: countryState.id,
        text: countryState.name,
        countryState,
      }
    }),
    onOptionChange: option => {
      if (props.onOptionChange) {
        if (allStatesOption && !option) {
          props.onOptionChange({
            id: 0,
            name: 'Todos os estados',
            abbreviation: 'BR',
          })
          return
        } else {
          props.onOptionChange(option?.countryState ?? null)
        }
      }
    },
    selectedOption: selectedOptionValue,
  }

  return (
    <Select {...selectProps} ref={ref}>
      {children}
    </Select>
  )
}

export const CountryStateSelect = forwardRef(CountryStateSelectFowardRef) as (
  props: PropsWithChildren<CountryStateSelectProps> & { ref?: React.ForwardedRef<SelectRef> },
) => React.ReactElement
