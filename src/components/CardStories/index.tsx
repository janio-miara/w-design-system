import React from 'react'
import styled from 'styled-components'
import { Paragraph } from '../Paragraph'
import { theme } from '../Themes'

const ContainerCardStories = styled.div`
  min-height: 300px;
  min-width: 200px;
  height: auto;
  width: auto;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  min-height: 240px;
  min-width: 200px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
`
const WrapperFooter = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #e0e0e0;
  flex-direction: column;
`

interface CardStoriesProps {
  title?: string
  subTitle?: string
  children?: React.ReactNode
}
const CardStories = ({ title, subTitle, children }: CardStoriesProps) => {
  return (
    <ContainerCardStories>
      <Wrapper>{children}</Wrapper>
      <WrapperFooter>
        <Paragraph color={theme.colors.shade50} heavyBod>
          {title}
        </Paragraph>
        <Paragraph size={'x-small'} color={theme.colors.shade30}>
          {subTitle}
        </Paragraph>
      </WrapperFooter>
    </ContainerCardStories>
  )
}

export default CardStories
