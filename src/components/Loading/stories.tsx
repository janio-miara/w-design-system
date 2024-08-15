// src/components/Loading/stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { FullScreenLoading, ContainerLoading } from './index'
import React from 'react'
import CardStories from '../CardStories'

const meta: Meta<typeof FullScreenLoading> = {
  title: 'Components/Loading',
  component: FullScreenLoading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      description: 'Select the size of the loading spinner',
    },
  },
} satisfies Meta<typeof FullScreenLoading>

export default meta
type Story = StoryObj<typeof meta>

export const FullScreenSmall: Story = {
  args: {
    size: 'small',
  },
}

export const FullScreenMedium: Story = {
  args: {
    size: 'medium',
  },
}

export const FullScreenLarge: Story = {
  args: {
    size: 'large',
  },
}

export const ContainerSmall: Story = {
  render: () => (
    <CardStories title="Loading" subTitle="small">
      <ContainerLoading size="small" />
    </CardStories>
  ),
}

export const ContainerMedium: Story = {
  render: () => (
    <CardStories title="Loading" subTitle="medium">
      <ContainerLoading size="medium" />
    </CardStories>
  ),
}

export const ContainerLarge: Story = {
  render: () => (
    <CardStories title="Loading" subTitle="large">
      <ContainerLoading size="large" />
    </CardStories>
  ),
}
