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
        options ?? [
          {
            text: 'Opção 1',
            id: 1,
          },
          {
            text: 'Opção 2',
            id: 2,
          },
          {
            text: 'Opção 3',
            id: 3,
          },
        ]
      }
      {...args}
    />
  )
}

export const Default: Story = {
  render: () => <ComponentWrapper label="Label" placeholder="Placeholder" />,
}
