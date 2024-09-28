import styled from 'styled-components';
import { theme } from '../Themes';
export const InputWrapper = styled.div `
  position: relative;
  border-radius: 4px;
`;
export const StyledInput = styled.input `
  width: 100%;

  background-color: transparent;
  border: none;
  outline: none;

  color: ${theme.colors.shade50};

  font-family: ${theme.fonts.join(', ')};
  font-size: ${theme.paragraph.medium};

  &:active,
  &:focus {
    outline: none;
    border: none;
  }

  &::placeholder {
    color: ${theme.colors.shade30};
    font-size: ${theme.paragraph.medium};
    opacity: 1;
  }

  &:disabled {
    background-color: transparent;
    cursor: not-allowed;
  }
`;
export const StyledLabel = styled.label `
  position: absolute;
  color: ${theme.colors.shade50};

  box-sizing: content-box;
  left: 15px;
  top: -8px;
  padding: 0 1px;

  font-family: 'Nunito Sans', sans-serif;
  font-size: ${theme.paragraph.small};
  font-weight: 600;
  text-wrap: nowrap;
`;
export const StyledInputContent = styled.div `
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: content-box;
  padding: 18px 16px 14px 16px;
  height: 22px;
  gap: 8px;
  border-radius: 4px;

  background-color: ${({ disabled }) => disabled ? theme.colors.shade10 : theme.colors.white};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
/**
 * O clip-path faz com que o elemento fique transparente na região do label
 * @see https://stackoverflow.com/questions/3742479/how-to-cut-a-hole-in-an-svg-rectangle
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
 */
export const StyledInputBorder = styled.div `
  position: absolute;

  box-sizing: content-box;
  inset: 0px;
  border-radius: 4px;
  border: 1px solid ${theme.colors.shade20};
  clip-rule: evenodd;
  clip-path: path(
    '${({ label, content }) => label.height !== 0 && label.width !== 0
    ? `M ${content.x} ${content.y} l ${content.width} 0 l 0 ${content.height} l -${content.width} 0z M ${label.x} ${label.y} l 0 ${label.height} l ${label.width} 0 l 0 -${label.height}z`
    : ''}'
  );
`;
//# sourceMappingURL=styles.js.map