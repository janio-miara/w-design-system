import { Meta, StoryObj } from '@storybook/react'
import { DateInput } from './index'
import React from 'react'

const meta: Meta<typeof DateInput> = {
  title: 'Components/DateInput',
  component: DateInput,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    label: { control: 'text' },
    readonly: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof DateInput>

export default meta
type Story = StoryObj<typeof DateInput>

const ComponentWrapper = ({ defaultOptions, ...args }: any) => {
  const [selectedOption, setSelectOption] = React.useState<number | null>(null)
  const [customDate, setCustomDate] = React.useState<Date | null>(null)
  return (
    <DateInput
      selectedOption={selectedOption}
      customDate={customDate}
      onSelectedOptionChange={option => setSelectOption(option)}
      onSelectedCustomDate={date => setCustomDate(date)}
      defaultOptions={
        defaultOptions ?? [
          {
            text: 'Ontem',
            id: -1,
          },
          {
            text: 'Hoje',
            id: 0,
          },
          {
            text: 'Amanhã',
            id: 1,
          },
        ]
      }
      {...args}
    />
  )
}

export const SelecionarDataDeDatas: Story = {
  render: args => <ComponentWrapper label="Data da Disputa" placeholder="Placeholder" />,
}

export const SelecionarDatasSimples: Story = {
  render: args => <ComponentWrapper defaultOptions={[]} />,
}
