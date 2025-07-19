import { Meta, StoryObj } from '@storybook/react'
import { MultiSelect, MultiSelectProps } from './index'
import React from 'react'

const meta: Meta<typeof MultiSelect> = {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    selectedOptions: { control: 'number' },
    onOptionChange: { action: 'selectedOptionChange' },
    dropDownTop: { control: 'boolean' },
  },
} satisfies Meta<typeof MultiSelect>

export default meta
type Story = StoryObj<typeof MultiSelect>

const ComponentWrapper = ({ options, ...args }: MultiSelectProps) => {
  const [selectedOption, setSelectOption] = React.useState<MultiSelectProps['selectedOptions']>([])

  return (
    <MultiSelect
      selectedOptions={selectedOption}
      onOptionChange={option => setSelectOption(option)}
      options={
        options ?? (new Array(5)).fill(0).map((_, index) => ({
          id: index,
          text: `Opção ${index + 1}`,
        }))
      }
      {...args}
    />
  )
}

export const Default: Story = {
  render: () => <ComponentWrapper label="Label" placeholder="Placeholder" />,
}
