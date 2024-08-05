import type { Meta, StoryObj } from '@storybook/react'
import { Paragraph } from './index'

const meta: Meta<typeof Paragraph> = {
  title: 'Components/Paragraph',
  component: Paragraph,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select', options: ['x-small', 'small', 'medium', 'large'] },
      description: 'Select the size of the paragraph',
    },
    weight: {
      control: { type: 'select', options: [400, 600, 700, 800] },
      description: 'Select the font weight of the paragraph',
    },
    as: {
      control: { type: 'select', options: ['span', 'div', 'label', 'p'] },
      description: 'Select the HTML element to render',
    },
    color: {
      control: 'color', // Adicionando o controle de cor
      description: 'Select the color of the text',
    },
    children: {
      control: 'text',
      description: 'Content of the paragraph',
    },
  },
} satisfies Meta<typeof Paragraph>

export default meta
type Story = StoryObj<typeof meta>

// Define different stories for the Paragraph component

export const XSmall: Story = {
  args: {
    size: 'x-small',
    color: '#000000', // Definindo a cor para XSmall
    children: 'This is an X-small paragraph.',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    weight: 600,
    color: '#333333', // Definindo a cor para Small
    children: 'This is a small paragraph with weight 600.',
  },
}

export const Medium: Story = {
  args: {
    size: 'medium',
    weight: 700,
    color: '#666666', // Definindo a cor para Medium
    children: 'This is a medium paragraph with weight 700.',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    color: '#999999', // Definindo a cor para Large
    children: 'This is a large paragraph.',
  },
}

export const CustomElement: Story = {
  args: {
    size: 'medium',
    as: 'label',
    color: '#CC0000', // Definindo a cor para CustomElement
    children: 'This is a medium paragraph rendered as a label.',
  },
}

export const AllSizes: Story = {
  args: {
    size: 'medium',
    color: '#000000',
    children: 'This paragraph can be adjusted to any size using the controls.',
  },
}

export const AllWeights: Story = {
  args: {
    size: 'medium',
    weight: 400,
    color: '#000000',
    children: 'This paragraph weight can be adjusted to 400, 600, 700, or 800.',
  },
}

export const AllElements: Story = {
  args: {
    size: 'medium',
    as: 'div',
    color: '#000000',
    children: 'This paragraph can be rendered as different HTML elements.',
  },
}
