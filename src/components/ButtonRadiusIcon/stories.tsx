import { Meta, StoryObj } from '@storybook/react'
import exampleIcon from '../../assets/icon/image.svg'
import { ButtonRadiusIcon } from './index'
import { VARIANTS_TYPES } from '../../utils/constanst' // Update this path to your actual icon

const meta: Meta<typeof ButtonRadiusIcon> = {
  title: 'Components/ButtonRadiusIcon',
  component: ButtonRadiusIcon,
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
      control: 'text',
    },
    onClick: { action: 'clicked' },
  },
}

export default meta
type Story = StoryObj<typeof ButtonRadiusIcon>

export const Playground: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    disabled: false,
    icon: exampleIcon,
  },
}

export const PlaygroundTitlePrimary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button:',
    disabled: false,
    icon: exampleIcon,
    subTitle: 'subTitle',
  },
}
