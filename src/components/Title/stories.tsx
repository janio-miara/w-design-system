import type { Meta, StoryObj } from '@storybook/react'
import { theme } from '../Themes'
import { Title } from './index'

const sizes = theme.title

const meta: Meta<typeof Title> = {
  title: 'Components/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'select', options: ['medium', 'large'] },
      description: 'Font size of the title',
    },
    bold: {
      control: 'boolean',
      description: 'Apply bold font weight',
    },
    color: {
      control: 'color',
      description: 'Font color of the title',
    },
    children: {
      control: 'text',
      description: 'Content of the title',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const LargeBoldTitle: Story = {
  args: {
    size: 'large',
    bold: true,
    color: '#1A3D7F', // Example color
    children: 'Large Bold Title',
  },
}

export const MediumTitle: Story = {
  args: {
    size: 'medium',
    bold: false,
    color: '#025FDE', // Example color
    children: 'Medium Title',
  },
}

export const CustomColorTitle: Story = {
  args: {
    size: 'large',
    bold: true,
    color: '#FF5733', // Custom color
    children: 'Custom Color Title',
  },
}
