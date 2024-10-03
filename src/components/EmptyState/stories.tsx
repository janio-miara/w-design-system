import type { Meta, StoryObj } from '@storybook/react'
import { EmptyState } from './index'

const meta: Meta<typeof EmptyState> = {
  title: 'Components/CardEmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the empty state card',
    },
    subTitle: {
      control: 'text',
      description: 'Subtitle of the empty state card',
    },
    description: {
      control: 'text',
      description: 'Description of the empty state card',
    },
  },
} satisfies Meta<typeof EmptyState>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Licitações sem proposta',
    subTitle: 'A data de disputa está próxima e você não enviou uma proposta!',
    description: 'Você não possui propostas aguardando disputa!',
  },
}
