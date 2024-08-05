import styled from 'styled-components'

export const TabsContainerStyled = styled.div`
  display: flex;
  align-items: flex-end;
`

export const TabStyled = styled.div<{ active: boolean }>`
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 24px 24px 0 0;
  background: white;
  opacity: ${props => (props.active ? 1 : 0.8)};
  height: ${props => (props.active ? '45px' : '40px')};
  min-width: 95px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  color: ${props => (props.active ? 'var(--PrimaryColor, #000)' : 'var(--SecondaryColor, #666)')};
  transition: opacity 0.3s;
`
