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
    color: {
      control: 'color',
      description: 'Select the color of the text',
    },
    textAlign: {
      control: { type: 'select', options: ['left', 'center', 'right', 'justify'] },
      description: 'Select the text alignment',
    },
    lineHeight: {
      control: 'text',
      description: 'Set the line height of the paragraph',
    },
    letterSpacing: {
      control: 'text',
      description: 'Set the letter spacing of the paragraph',
    },
    margin: {
      control: 'text',
      description: 'Set the margin of the paragraph',
    },
    padding: {
      control: 'text',
      description: 'Set the padding of the paragraph',
    },
    children: {
      control: 'text',
      description: 'Content of the paragraph',
    },
    semiBold: { control: 'boolean', description: 'Use semiBold weight' },
    strongBold: { control: 'boolean', description: 'Use strongBold weight' },
    heavyBold: { control: 'boolean', description: 'Use heavyBold weight' },
  },
} satisfies Meta<typeof Paragraph>

export default meta
type Story = StoryObj<typeof meta>

export const XSmall: Story = {
  args: {
    size: 'x-small',
    color: '#000000',
    children: 'This is an X-small paragraph with lightBold weight.',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    semiBold: true,
    color: '#333333',
    children: 'This is a small paragraph with semiBold weight.',
  },
}

export const Medium: Story = {
  args: {
    size: 'medium',
    strongBold: true,
    color: '#666666',
    children: 'This is a medium paragraph with strongBold weight.',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    color: '#999999',
    children: 'This is a large paragraph with lightBold weight.',
  },
}

export const CustomElement: Story = {
  args: {
    size: 'medium',
    color: '#CC0000',
    children: 'This is a medium paragraph rendered as a label with lightBold weight.',
    strongBold: true,
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
    color: '#000000',
    children: 'This paragraph weight can be adjusted to lightBold, semiBold, strongBold, or heavyBold.',
  },
}

export const AllElements: Story = {
  args: {
    size: 'medium',
    color: '#000000',
    children: 'This paragraph can be rendered as different HTML elements.',
  },
}
