import styled from 'styled-components'
import { theme } from '../Themes'

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  .icon {
    transition: transform 0.3s;
  }
  .icon-rotate {
    transform: rotate(180deg) translateY(5px);
  }
`
export interface DropdownProps {
  dropDownTop?: boolean
  dropDownWidth?: string
  dropDownMaxHeight?: string
}

export const Dropdown = styled.div<DropdownProps>`
  position: absolute;

  z-index: ${theme.zIndex.z9};

  background-color: ${theme.colors.white};
  width: ${({ dropDownWidth }) => (dropDownWidth ? dropDownWidth : '100%')};
  ${({ dropDownTop }) => (dropDownTop ? 'bottom: 58px;' : 'margin-top: 4px;')};
  padding: 16px;

  border-radius: 4px;
  border: 1px solid ${theme.colors.shade20};
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  height: auto;
  max-height: ${({ dropDownMaxHeight }) => (dropDownMaxHeight ? dropDownMaxHeight : '300px')};
  overflow-y: auto;
`

export const DropdownWrapper = styled.div`
  position: relative;
  z-index: ${theme.zIndex.z9};
`

export interface OptionButtonProps {
  selected: boolean
}

export const OptionButton = styled.button<OptionButtonProps>`
  display: flex;

  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  color: ${({ selected }) => (selected ? theme.colors.cyan30 : theme.colors.shade40)};
  background-color: transparent;
  border: none;

  cursor: pointer;

  font-family: 'Nunito Sans', sans-serif;
  font-size: ${theme.paragraph.medium};
  text-align: left;

  height: 46px;
  width: 100%;
  padding: 0;

  &:not(:last-child) {
    border-bottom: 1px solid ${theme.colors.shade10};
  }

  &:hover {
    color: ${theme.colors.cyan30};
  }
`

export const OptionText = styled.div`
  flex-grow: 1;
`
