import { Meta, StoryObj } from '@storybook/react'
import exampleIcon from '../../assets/icon/image.svg'

import { VARIANTS_TYPES } from '../../utils/constanst'
import { ButtonRound } from './index'

const meta: Meta<typeof ButtonRound> = {
  title: 'Components/ButtonRound',
  component: ButtonRound,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: VARIANTS_TYPES,
      },
    },
    disabled: {
      control: 'boolean',
    },
    icon: {
      control: 'object',
      options: [exampleIcon],
      description: exampleIcon,
    },

    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof ButtonRound>

export default meta
type Story = StoryObj<typeof ButtonRound>

export const Playground: Story = {
  args: {
    variant: 'primary',
    children: 'ButtonPlayground',
    disabled: false,
    icon: exampleIcon,
  },
}
export const ButtonBadge: Story = {
  args: {
    variant: 'success',
    children: 'ButtonPlayground',
    disabled: false,
    icon: exampleIcon,
    badge: 10,
  },
}
