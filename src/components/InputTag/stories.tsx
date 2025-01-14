import { Meta, StoryObj } from '@storybook/react'
import { InputTag } from './index'
import React, { useState } from 'react'

const meta: Meta<typeof InputTag> = {
  title: 'Components/InputTag',
  component: InputTag,
  argTypes: {
    placeholder: { control: 'text' },
    label: { control: 'text' },
    readonly: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof InputTag>

const Template = (args: any) => {
  const [tags, setTags] = useState<string[]>(['Tag1', 'Tag2'])

  return <InputTag {...args} tags={tags} setTags={setTags} />
}

export const Playground: Story = {
  render: args => <Template {...args} />,
  args: {
    label: 'Label',
    placeholder: 'Digite uma tag',
  },
}
