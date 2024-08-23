import styled from 'styled-components';
import { theme } from '../Themes';
export const SelectWrapper = styled.div `
  position: relative;
  .icon {
    transition: transform 0.3s;
  }
  .icon-rotate {
    transform: rotate(180deg) translateY(5px);
  }
`;
export const Dropdown = styled.div `
  position: absolute;

  box-sizing: content-box;
  width: 252px;
  margin-top: 7px;
  padding: 16px;

  border-radius: 4px;
  border: 1px solid ${theme.colors.shade20};
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
`;
export const DropdownWrapper = styled.div `
  position: relative;
  z-index: ${theme.zIndex.z9};
`;
export const OptionButton = styled.button `
  display: flex;

  align-items: center;

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
`;
//# sourceMappingURL=styles.js.map