import { Meta, StoryObj } from '@storybook/react'
import { Input } from './index'
import { VARIANTS_TYPES } from '../../utils/constanst'
import { useState } from 'react'
import React from 'react'
import { IconWrapper } from '../IconWrapper'
import { editSVG } from '../../assets/icon'
import { theme } from '../Themes'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    label: { control: 'text' },
    value: { control: 'text' },
    readonly: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: { action: 'change' },
    onInput: { action: 'input' },
    onKeyDown: { action: 'keydown' },
    onKeyUp: { action: 'keyup' },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Playground: Story = {
  args: {
    label: 'Label',
    placeholder: 'placeholder',
  },
}
const ComponentWrapper = ({ ...args }: any) => {
  const [value, setValue] = useState<string>('')
  return <Input {...args} value={value} onChange={e => setValue(e.target.value)} />
}

export const Default: StoryObj<typeof Input> = {
  render: args => <ComponentWrapper {...args} />,
}

export const Disabled: StoryObj<typeof Input> = {
  render: args => <ComponentWrapper {...args} placeholder="Disabled" label="Disabled" disabled />,
}

export const DisabledWithIcon: StoryObj<typeof Input> = {
  render: args => (
    <ComponentWrapper
      {...args}
      iconLeft={<IconWrapper src={editSVG} width="20px" color={theme.colors.shade30} />}
      placeholder="Disabled"
      label="Disabled"
      disabled
    />
  ),
}
