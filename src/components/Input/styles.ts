import styled from 'styled-components'
import { theme } from '../Themes'
import type { Position } from '.'

export const InputWrapper = styled.div`
  height: 54px;
  border-radius: 4px;
`

export const StyledInput = styled.input`
  width: 100%;
  font-family: ${theme.fonts.join(', ')};
  outline: none;
  font-size: ${theme.paragraph.medium};
  border: none;
  color: ${theme.colors.shade50};
  z-index: 1;

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
`

export const StyledLabel = styled.label`
  position: absolute;
  left: 15px;
  top: -8px;
  padding: 0 1px;
  font-weight: 600;
  font-size: ${theme.paragraph.small};
  color: ${theme.colors.shade50};
  font-family: 'Nunito Sans', sans-serif;
  text-wrap: nowrap;
`

export const StyledInputContent = styled.div`
  position: relative;
  padding: 18px 16px 14px 16px;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  cursor: text;
`

export interface StyledInputBorderProps {
  label: Position
  content: Position
}

/**
 * O clip-path faz com que o elemento fique transparente na região do label
 * @see https://stackoverflow.com/questions/3742479/how-to-cut-a-hole-in-an-svg-rectangle
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
 */
export const StyledInputBorder = styled.div<StyledInputBorderProps>`
  position: absolute;
  inset: 0px;
  border-radius: 4px;
  border: 1px solid ${theme.colors.shade20};
  clip-rule: evenodd;
  clip-path: path(
    '${({ label, content }) =>
      `M ${content.x} ${content.y} l ${content.width} 0 l 0 ${content.height} l -${content.width} 0z M ${label.x} ${label.y} l 0 ${label.height} l ${label.width} 0 l 0 -${label.height}z`}'
  );
`
