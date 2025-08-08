import styled from 'styled-components'


export interface PortalIconImageProps {
  $width?: string;
  $height?: string;
  $borderRadius?: string;
}

export const PortalIconImage = styled.img<PortalIconImageProps>`
  border-radius: ${({ $borderRadius }) => $borderRadius || '5px'};
  width: ${({ $width }) => $width || '28px'};
  height: ${({ $height }) => $height || '28px'};
  object-fit: contain;
`
