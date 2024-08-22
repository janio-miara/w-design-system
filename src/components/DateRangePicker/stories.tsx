import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { DateRangePicker, DateRangePickerProps } from './index'

const meta: Meta<typeof DateRangePicker> = {
  title: 'Components/DateRangePicker',
  component: DateRangePicker,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    label: { control: 'text' },
    readonly: { control: 'boolean' },
    disabled: { control: 'boolean' },
    selectedOption: { control: 'number' },
    startCustomDate: { control: 'date' },
    endCustomDate: { control: 'date' },
    onSelectedOptionChange: { action: 'selectedOptionChange' },
    onSelectedCustomRange: { action: 'selectedCustomRange' },
  },
} satisfies Meta<typeof DateRangePicker>

export default meta
type Story = StoryObj<typeof DateRangePicker>

const ComponentWrapper = ({ options, ...args }: Partial<DateRangePickerProps>) => {
  const [selectedOption, setSelectOption] = React.useState<number | null>(null)
  const [startDate, setStartDate] = React.useState<Date | null>(null)
  const [endDate, setEndDate] = React.useState<Date | null>(null)

  return (
    <DateRangePicker
      {...args}
      selectedOption={selectedOption}
      startCustomDate={startDate}
      endCustomDate={endDate}
      onSelectedCustomRange={(start, end) => {
        setStartDate(start)
        setEndDate(end)
      }}
      onSelectedOptionChange={option => setSelectOption(option)}
      options={
        options ?? [
          {
            text: 'Últimos 30 dias',
            id: 30,
          },
          {
            text: 'Últimos 60 dias',
            id: 60,
          },
          {
            text: 'Últimos 90 dias',
            id: 90,
          },
        ]
      }
    />
  )
}

export const SelecionarIntervaloDeDatas: Story = {
  render: args => <ComponentWrapper label="Período da Disputa" placeholder="Placeholder" />,
}

export const SelecionarIntervaloDeDatasSimples: Story = {
  render: args => <ComponentWrapper options={[]} />,
}
