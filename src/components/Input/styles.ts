import styled, { css } from 'styled-components'
import { theme } from '../Themes'
import { Position } from '../InputTag'

export const InputWrapper = styled.div`
  position: relative;
  border-radius: 4px;
`

export const StyledInput = styled.input`
  position: relative;
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
`

export const StyledLabel = styled.label`
  position: absolute;
  color: ${theme.colors.shade50};

  box-sizing: content-box;
  left: 15px;
  top: -8px;
  padding: 0 1px;

  font-family: 'Nunito Sans', sans-serif;
  font-size: ${theme.paragraph.small};
  font-weight: 600;
  white-space: nowrap;
`

export interface StyledInputContentProps {
  $disabled?: boolean
  $hasError?: boolean
}

export const StyledInputContent = styled.div<StyledInputContentProps>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: content-box;
  padding: 18px 16px 14px 16px;
  height: 22px;
  gap: 8px;
  border-radius: 4px;

  background-color: ${({ $disabled }) => ($disabled ? theme.colors.shade10 : theme.colors.white)};

  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
`

export interface StyledInputBorderProps {
  $label: Position
  $content: Position
  $hasError?: boolean
}

export const StyledInputBorder = styled.div<StyledInputBorderProps>`
  position: absolute;
  box-sizing: content-box;
  inset: 0px;
  border-radius: 4px;

  border: 1px solid ${({ $hasError }) => ($hasError ? theme.colors.red40 : theme.colors.shade20)};

  clip-rule: evenodd;
  clip-path: path(
    '${({ $label, $content }) =>
      $label.height !== 0 && $label.width !== 0
        ? `M ${$content.x} ${$content.y} l ${$content.width} 0 l 0 ${$content.height} l -${$content.width} 0z M ${$label.x} ${$label.y} l 0 ${$label.height} l ${$label.width} 0 l 0 -${$label.height}z`
        : ''}'
  );

  ${({ $hasError }) =>
    $hasError &&
    css`
      border-color: ${theme.colors.red30};
      box-shadow: 0 0 0 2px ${theme.colors.red10};
    `}
`

export const StyledErrorMessage = styled.span`
  display: block;
  color: ${theme.colors.red30};
  font-size: 16px;
  margin-top: 4px;
  margin-left: 4px;
`
