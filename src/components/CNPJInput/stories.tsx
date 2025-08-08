import { Meta, StoryObj } from '@storybook/react'
import { CNPJInput } from './index'
import { useState } from 'react'
import { IconWrapper } from '../IconWrapper'
import { editSVG } from '../../assets/icon'
import { theme } from '../Themes'

const meta: Meta<typeof CNPJInput> = {
  title: 'Components/CNPJInput',
  component: CNPJInput,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    label: { control: 'text' },
    value: { control: 'text' },
    readonly: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onKeyDown: { action: 'keydown' },
    onKeyUp: { action: 'keyup' },
  },
}

export default meta
type Story = StoryObj<typeof CNPJInput>

export const Playground: Story = {
  args: {
    label: 'Label',
    placeholder: 'placeholder',
  },
}
const ComponentWrapper = ({ ...args }) => {
  const [value, setValue] = useState<string>('')
  return <CNPJInput {...args} value={value} onInputValue={value => setValue(value)} />
}

export const Default: StoryObj<typeof CNPJInput> = {
  render: args => <ComponentWrapper {...args} />,
}

export const Disabled: StoryObj<typeof CNPJInput> = {
  render: args => <ComponentWrapper {...args} placeholder="Disabled" label="Disabled" disabled />,
}

export const DisabledWithIcon: StoryObj<typeof CNPJInput> = {
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
