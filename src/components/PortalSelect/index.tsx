import React, { HTMLAttributes, PropsWithChildren, ReactNode } from 'react'
import { Select, SelectProps, SelectRef } from '../Select'
import defaultIcon from '../../assets/icon/portals/default.svg'
import portalImg01 from '../../assets/icon/portals/01.png'
import portalImg07 from '../../assets/icon/portals/07.svg'
import portalImg08 from '../../assets/icon/portals/08.svg'
import portalImg09 from '../../assets/icon/portals/09.png'
import portalImg10 from '../../assets/icon/portals/10.png'
import portalImg11 from '../../assets/icon/portals/11.png'
import portalImg12 from '../../assets/icon/portals/12.gif'
import portalImg13 from '../../assets/icon/portals/13.png'
import portalImg14 from '../../assets/icon/portals/14.png'
import portalImg15 from '../../assets/icon/portals/15.png'
import portalImg16 from '../../assets/icon/portals/16.png'
import portalImg17 from '../../assets/icon/portals/17.svg'
import portalImg18 from '../../assets/icon/portals/18.png'
import portalImg19 from '../../assets/icon/portals/19.png'
import portalImg20 from '../../assets/icon/portals/20.svg'
import portalImg21 from '../../assets/icon/portals/21.png'
import portalImg22 from '../../assets/icon/portals/22.png'
import portalImg23 from '../../assets/icon/portals/23.svg'
import portalImg24 from '../../assets/icon/portals/24.png'
import portalImg25 from '../../assets/icon/portals/25.svg'
import portalImg26 from '../../assets/icon/portals/26.png'
import portalImg27 from '../../assets/icon/portals/27.png'
import portalImg28 from '../../assets/icon/portals/28.svg'
import portalImg29 from '../../assets/icon/portals/29.svg'
import portalImg30 from '../../assets/icon/portals/30.png'
import portalImg31 from '../../assets/icon/portals/31.svg'
import portalImg32 from '../../assets/icon/portals/32.png'
import portalImg33 from '../../assets/icon/portals/33.png'
import portalImg34 from '../../assets/icon/portals/34.png'
import portalImg35 from '../../assets/icon/portals/35.svg'
import portalImg36 from '../../assets/icon/portals/36.svg'
import portalImg37 from '../../assets/icon/portals/37.png'
import portalImg38 from '../../assets/icon/portals/38.png'
import portalImg39 from '../../assets/icon/portals/39.png'
import portalImg40 from '../../assets/icon/portals/40.png'
import portalImg41 from '../../assets/icon/portals/41.svg'
import portalImg42 from '../../assets/icon/portals/42.png'
import portalImg44 from '../../assets/icon/portals/44.png'
import portalImg45 from '../../assets/icon/portals/45.png'
import portalImg46 from '../../assets/icon/portals/46.svg'
import portalImg47 from '../../assets/icon/portals/47.svg'
import portalImg48 from '../../assets/icon/portals/48.svg'
import portalImg49 from '../../assets/icon/portals/49.png'
import portalImg54 from '../../assets/icon/portals/54.png'
import { PortalIcon } from './styles'

export interface Portal {
  id: number
  name: string
}

export interface PortalSelectProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean
  label?: string
  leftIcon?: ReactNode
  onOptionChange?: (option: Portal | null) => void
  selectedOption?: Portal | null
  portals: Portal[]
  placeholder?: string
  rightIcon?: ReactNode
  value?: string
  dropDownTop?: boolean
  dropDownWidth?: string
  disableSearch?: boolean
  dropDownMaxHeight?: string
  allPortalsOption?: boolean
}

const portalIcons: Record<number, string> = {
  1: portalImg01,
  7: portalImg07,
  8: portalImg08,
  9: portalImg09,
  10: portalImg10,
  11: portalImg11,
  12: portalImg12,
  13: portalImg13,
  14: portalImg14,
  15: portalImg15,
  16: portalImg16,
  17: portalImg17,
  18: portalImg18,
  19: portalImg19,
  20: portalImg20,
  21: portalImg21,
  22: portalImg22,
  23: portalImg23,
  24: portalImg24,
  25: portalImg25,
  26: portalImg26,
  27: portalImg27,
  28: portalImg28,
  29: portalImg29,
  30: portalImg30,
  31: portalImg31,
  32: portalImg32,
  33: portalImg33,
  34: portalImg34,
  35: portalImg35,
  36: portalImg36,
  37: portalImg37,
  38: portalImg38,
  39: portalImg39,
  40: portalImg40,
  41: portalImg41,
  42: portalImg42,
  44: portalImg44,
  45: portalImg45,
  46: portalImg46,
  47: portalImg47,
  48: portalImg48,
  49: portalImg49,
  54: portalImg54, 
}
const PortalSelectFowardRef = (
  { children, portals, allPortalsOption, ...props }: PropsWithChildren<PortalSelectProps>,
  ref: React.ForwardedRef<SelectRef>,
) => {
  const allPortalsValue = allPortalsOption !== false
  const portalsValue = allPortalsValue ? [{ id: 0, name: 'Todos os portais' }, ...portals] : portals

  const selectProps: SelectProps<{ text: string; id: number; icon?: ReactNode; portal: Portal }> = {
    ...props,
    leftIcon: props.selectedOption != null && portalIcons[props.selectedOption.id] && (
      <PortalIcon src={props.selectedOption ? portalIcons[props.selectedOption.id] : defaultIcon} />
    ),
    options: portalsValue.map(portal => {
      const imageUrl = portalIcons[portal.id] as unknown as string
      return {
        id: portal.id,
        text: portal.name,
        icon: imageUrl && <PortalIcon src={imageUrl} alt={portal.name} />,
        portal,
      }
    }),
    onOptionChange: option => {
      if (props.onOptionChange) {
        if (allPortalsValue && !option) {
          props.onOptionChange({
            id: 0,
            name: 'Todos os portais',
          })
          return
        } else {
          props.onOptionChange(option?.portal ?? null)
        }
      }
    },
    selectedOption: props.selectedOption
      ? {
          id: props.selectedOption.id,
          text: props.selectedOption.name,
          icon: portalIcons[props.selectedOption.id] && (
            <PortalIcon src={portalIcons[props.selectedOption.id]} alt={props.selectedOption.name} />
          ),
          portal: props.selectedOption,
        }
      : null,
  }

  return (
    <Select {...selectProps} ref={ref}>
      {children}
    </Select>
  )
}

export const PortalSelect = React.forwardRef(PortalSelectFowardRef) as (
  props: PropsWithChildren<PortalSelectProps> & { ref?: React.ForwardedRef<SelectRef> },
) => React.ReactElement
