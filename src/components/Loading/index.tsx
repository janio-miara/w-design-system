import React from 'react'
import styled, { keyframes } from 'styled-components'
import spinSVG from '../../assets/icon/spin.svg'
import { Paragraph } from '../Paragraph'
import { theme } from '../Themes'

// Animação de rotação
const spinAnimation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

// Estilos para o wrapper de tela cheia
const FullScreenWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(164, 162, 162);
  z-index: 9999;
`

// Estilos para o wrapper do contêiner
const ContainerWrapper = styled.div``

// Estilos para o wrapper do conteúdo
const ContainerWrapperStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`

// Estilos para a imagem de loading
const LoadingImage = styled.img<{ size: 'small' | 'medium' | 'large' }>`
  width: ${({ size }) => (size === 'small' ? '30px' : size === 'medium' ? '50px' : '70px')};
  height: ${({ size }) => (size === 'small' ? '30px' : size === 'medium' ? '50px' : '70px')};
  animation: ${spinAnimation} 2s linear infinite;
`

// Tipagem para as props de loading
interface LoadingProps {
  size?: 'small' | 'medium' | 'large'
}

// Componente de loading em tela cheia
export const FullScreenLoading: React.FC<LoadingProps> = ({ size = 'medium' }) => (
  <FullScreenWrapper>
    <ContainerWrapperStyles>
      <LoadingImage src={spinSVG} alt="loading" size={size} />
      <Paragraph color={theme.colors.shade50} size="x-small">
        CARREGANDO
      </Paragraph>
    </ContainerWrapperStyles>
  </FullScreenWrapper>
)

// Componente de loading no contêiner
export const ContainerLoading: React.FC<LoadingProps> = ({ size = 'medium' }) => (
  <ContainerWrapper>
    <ContainerWrapperStyles>
      <LoadingImage src={spinSVG} alt="loading" size={size} />
      <Paragraph color={theme.colors.shade30} size="x-small">
        CARREGANDO
      </Paragraph>
    </ContainerWrapperStyles>
  </ContainerWrapper>
)
