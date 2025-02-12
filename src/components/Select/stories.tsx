import { Meta, StoryObj } from '@storybook/react'
import { Select, SelectProps } from './index'
import React from 'react'

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    selectedOption: { control: 'number' },
    onOptionChange: { action: 'selectedOptionChange' },
    dropDownTop: { control: 'boolean' },
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof Select>

const ComponentWrapper = ({ options, ...args }: SelectProps) => {
  const [selectedOption, setSelectOption] = React.useState<SelectProps['selectedOption']>(null)

  return (
    <Select
      selectedOption={selectedOption}
      onOptionChange={option => setSelectOption(option)}
      options={
        options ??
        new Array(20).fill(0).map((_, index) => ({
          id: index,
          text: `Opção ${index + 1}`,
          badge: 13,
        }))
      }
      {...args}
    />
  )
}

export const Default: Story = {
  render: () => <ComponentWrapper label="Label" placeholder="Placeholder" />,
}
