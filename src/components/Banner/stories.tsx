import { Meta, StoryObj } from '@storybook/react'
import { VARIANTS_TYPES_BANNER } from '../../utils/constanst'

import { Banner } from './index'

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: VARIANTS_TYPES_BANNER,
      },
    },

    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Banner>

export default meta
type Story = StoryObj<typeof Banner>

export const Playground: Story = {
  args: {
    variant: 'success',
    title: 'Sucesso!',
    subTitle: 'Mensagem de sucesso.',
  },
}
