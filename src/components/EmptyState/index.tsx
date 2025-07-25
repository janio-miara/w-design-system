import { ContainerEmptyState } from './styles'
import { Paragraph } from '../Paragraph'
import { theme } from '../Themes'
import { logoWaveGrayPNG } from '../../assets/icon'

interface ICardEmptyState {
  title: string
  subTitle?: string
  description?: string
}

export const EmptyState = ({ title, subTitle, description }: ICardEmptyState) => {
  return (
    <ContainerEmptyState>
      <Paragraph strongBod color={theme.colors.cyan50} size={'large'}>
        {title}
      </Paragraph>
      <Paragraph color={theme.colors.shade40} size={'medium'}>
        {subTitle}
      </Paragraph>
      <Paragraph color={theme.colors.cyan40} size={'medium'}>
        {description}
      </Paragraph>

      <div className={'empty-state-logo'}>
        <img src={logoWaveGrayPNG} alt="Logo" className={'clearer-image'} />
      </div>
    </ContainerEmptyState>
  )
}
