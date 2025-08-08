import type { Meta, StoryObj } from '@storybook/react'
import { Paragraph } from '../Paragraph'
import CardStories from './index'

const meta: Meta<typeof CardStories> = {
  title: 'Components/CardStories',
  component: CardStories,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardStories>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Default Title',
    subTitle: 'Default Subtitle',
    children: 'This is the default content.',
  },
}

export const WithCustomContent: Story = {
  args: {
    title: 'Custom Title',
    subTitle: 'Custom Subtitle',
    children: (
      <>
        <Paragraph>This is custom content.</Paragraph>
        <Paragraph size="small">Additional custom content.</Paragraph>
      </>
    ),
  },
}

export const WithoutSubtitle: Story = {
  args: {
    title: 'Title Only',
    children: <Paragraph>This card has no subtitle.</Paragraph>,
  },
}
