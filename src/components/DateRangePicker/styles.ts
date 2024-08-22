import styled from 'styled-components'
import { theme } from '../Themes'

export const CalendarGrid = styled.div`
  display: grid;
  font-family: 'Nunito Sans', sans-serif;
  grid-template-columns: repeat(7, 36px);
  align-items: center;
  justify-items: center;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 100%;
  width: 100%;
  font-size: ${theme.paragraph.small};
  color: ${theme.colors.shade50};
`

export const CalendarWeekDayLabel = styled.div`
  font-size: ${theme.paragraph['xx-small']};
  color: ${theme.colors.shade30};
  font-weight: 600;
  margin-bottom: 4px;
`

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${theme.paragraph.small};
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 600;

  .icon,
  .icon svg,
  .icon svg path {
    fill: ${theme.colors.shade50} !important;
  }

  .icon:hover,
  .icon:hover svg,
  .icon:hover svg path {
    fill: ${theme.colors.cyan30} !important;
  }

  .icon-disabled,
  .icon-disabled svg,
  .icon-disabled svg path {
    fill: ${theme.colors.shade20} !important;
  }
`
export interface CalendarDayProps {
  today: boolean
  isFirstSelected: boolean
  isLastSelected: boolean
}

export const CalendarDay = styled.div<CalendarDayProps>`
  position: relative;
  cursor: pointer;
  width: 36px;
  height: 36px;
  box-sizing: border-box;
  color: ${({ isFirstSelected, isLastSelected }) =>
    isFirstSelected || isLastSelected ? theme.colors.white : theme.colors.shade50};

  &:before {
    position: absolute;
    content: '';
    inset: 0;
    border-radius: 50%;
    pointer-events: none;

    ${({ today, isFirstSelected, isLastSelected }) =>
      today && !(isFirstSelected || isLastSelected) ? `border: 1px solid ${theme.colors.cyan40}` : ''};
  }
`

export interface CalendarDaySelectedBackgroundProps {
  today: boolean
  isFirstSelected: boolean
  isLastSelected: boolean
  selected: boolean
}
export const CalendarDaySelectedBackground = styled.div<CalendarDaySelectedBackgroundProps>`
  position: absolute;
  background-color: ${({ selected }) => selected && theme.colors.cyan30opacity16};
  width: 100%;
  height: 100%;
  inset: 0;

  border-radius: ${({ isFirstSelected, isLastSelected }) => {
    if (isFirstSelected && isLastSelected) return '50%'
    if (isFirstSelected) return '50% 0 0 50%'
    if (isLastSelected) return '0 50% 50% 0'
    return '0'
  }};

  &:hover {
    border-radius: ${({ isFirstSelected, isLastSelected, selected }) => {
      if (isFirstSelected && isLastSelected) return '50%'
      if (isFirstSelected) return '50% 0 0 50%'
      if (isLastSelected) return '0 50% 50% 0'
      if (selected) return '0'
      return '50%'
    }};
    background-color: ${theme.colors.cyan30opacity16};
  }

  &::before {
    content: '';
    border-radius: 50%;
    background-color: ${({ isFirstSelected, isLastSelected }) =>
      isFirstSelected || isLastSelected ? theme.colors.cyan40 : 'transparent'};
    position: absolute;
    inset: 0;
  }
`
export const CalendarDayValue = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`
