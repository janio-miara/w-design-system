import { ContainerEmptyState } from './styles'
import { Paragraph } from '../Paragraph'
import { theme } from '../Themes'
import { logoWaveGrayPNG } from '../../assets/icon'

export interface EmptyStateProps {
  title: string
  subTitle?: string
  description?: string
}

export function EmptyState({ title, subTitle, description }: EmptyStateProps) {
  return (
    <ContainerEmptyState>
      <Paragraph strongBold color={theme.colors.cyan50} size={'large'}>
        {title}
      </Paragraph>
      <Paragraph color={theme.colors.shade50} size={'medium'}>
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
