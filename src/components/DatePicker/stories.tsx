import { Meta, StoryObj } from '@storybook/react'
import { DatePicker as DatePicker } from './index'
import React from 'react'

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    label: { control: 'text' },
    readonly: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof DatePicker>

const ComponentWrapper = ({ defaultOptions, ...args }: any) => {
  const [selectedOption, setSelectOption] = React.useState<number | null>(null)

  const [customDate, setCustomDate] = React.useState<Date | null>(null)
  const onSelectedOptionChange = (option: number | null) => {
    setSelectOption(option)
    if (option === null) {
      setCustomDate(null)
      return
    }
    const date = new Date()
    date.setDate(date.getDate() + option)
    setCustomDate(date)

  }
  return (
    <DatePicker
      selectedOption={selectedOption}
      customDate={customDate}
      onSelectedOptionChange={onSelectedOptionChange}
      onSelectedCustomDate={date => setCustomDate(date)}
      options={
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
