import { Meta, StoryObj } from '@storybook/react'
import exampleIcon from '../../assets/icon/image.svg'
import { Button } from './index'
import { VARIANTS_TYPES } from '../../utils/constanst'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
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
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Playground: Story = {
  args: {
    variant: 'primary',
    children: 'ButtonPlayground',
    disabled: false,
  },
}

export const ButtonDefault: Story = {
  args: {
    variant: 'secondary',
    children: 'ButtonPlayground',
    disabled: false,
  },
}

export const ButtonOutilne: Story = {
  args: {
    variant: 'secondary',
    children: 'ButtonPlayground',
    disabled: false,
    outline: true,
  },
}
export const ButtonRadius: Story = {
  args: {
    variant: 'success',
    children: 'ButtonPlayground',
    disabled: false,
    radius: true,
  },
}

export const ButtonDisabled: Story = {
  args: {
    variant: 'danger',
    children: 'ButtonPlayground',
    disabled: true,
  },
}

export const ButtonIcon: Story = {
  args: {
    variant: 'primary',
    children: 'ButtonPlayground',
    icon: exampleIcon,
  },
}

export const ButtonIconHalfRightOutiline: Story = {
  args: {
    variant: 'success',
    children: 'ButtonPlayground',
    icon: exampleIcon,
    halfRight: true,
    outline: true,
  },
}
export const ButtonIconHalfLeft: Story = {
  args: {
    variant: 'success',
    children: 'ButtonPlayground',
    icon: exampleIcon,
    halfLeft: true,
  },
}
