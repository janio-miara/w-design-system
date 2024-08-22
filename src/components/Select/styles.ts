import styled from 'styled-components'
import { theme } from '../Themes'

export const SelectWrapper = styled.div`
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


export interface OptionButtonProps {
  selected: boolean
}

export const OptionButton = styled.button<OptionButtonProps>`
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
