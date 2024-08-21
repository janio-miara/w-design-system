import styled from 'styled-components'
import { theme } from '../Themes'

export const InputDateWrapper = styled.div`
  position: relative;
  .icon {
    transition: transform 0.3s;
  }
  .icon-rotate {
    transform: rotate(180deg) translateY(5px);
  }
`

export const Dropdown = styled.div`
  position: absolute;
  width: 252px;
  padding: 16px;
  z-index: 1;
  border-radius: 4px;
  border: 1px solid ${theme.colors.shade20};
  margin-top: 7px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
`

export const DropdownWrapper = styled.div`
  position: relative;
`

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

export interface DefaultOptionButtonProps {
  selected: boolean
}

export const DefaultOptionButton = styled.button<DefaultOptionButtonProps>`
  background-color: transparent;
  border: none;
  font-size: ${theme.paragraph.medium};
  font-family: 'Nunito Sans', sans-serif;
  color: ${({ selected }) => (selected ? theme.colors.cyan30 : theme.colors.shade40)};
  cursor: pointer;
  padding: 0;
  width: 100%;
  text-align: left;
  height: 46px;
  display: flex;
  align-items: center;

  &:not(:last-child) {
    border-bottom: 1px solid ${theme.colors.shade10};
  }

  &:hover {
    color: ${theme.colors.cyan30};
  }
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
}

export const CalendarDay = styled.div<CalendarDayProps>`
  position: relative;
  cursor: pointer;
  color: ${({ today }) => (today ? theme.colors.white : theme.colors.shade50)};
  width: 36px;
  height: 36px;
`

export interface CalendarDaySelectedBackgroundProps {
  today: boolean
  selected: boolean
}
export const CalendarDaySelectedBackground = styled.div<CalendarDaySelectedBackgroundProps>`
  position: absolute;
  background-color: ${({ selected }) => selected && 'rgba(33, 126, 253, 0.16)'};
  width: 100%;
  height: 100%;
  inset: 0;
  &::before {
    content: '';
    border-radius: 50%;
    position: absolute;
    background-color: ${({ today }) => (today ? theme.colors.cyan40 : 'transparent')};
    inset: 0;
  }
`
export const CalendarDayValue = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
