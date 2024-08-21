import { Meta, StoryObj } from '@storybook/react'
import { RangeDateInput } from './index'
import { VARIANTS_TYPES } from '../../utils/constanst'
import React from 'react'

const meta: Meta<typeof RangeDateInput> = {
  title: 'Components/RangeDateInput',
  component: RangeDateInput,
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
} satisfies Meta<typeof RangeDateInput>

export default meta
type Story = StoryObj<typeof RangeDateInput>

const ComponentWrapper = ({ defaultOptions, ...args }: any) => {
  const [selectedOption, setSelectOption] = React.useState<number | null>(null)
  const [startDate, setStartDate] = React.useState<Date | null>(null)
  const [endDate, setEndDate] = React.useState<Date | null>(null)

  return (
    <RangeDateInput
      selectedOption={selectedOption}
      startCustomDate={startDate}
      endCustomDate={endDate}
      onSelectedCustomRange={(start, end) => {
        setStartDate(start)
        setEndDate(end)
      }}
      onSelectedOptionChange={option => setSelectOption(option)}
      defaultOptions={
        defaultOptions ?? [
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
      {...args}
    />
  )
}

export const SelecionarIntervaloDeDatas: Story = {
  render: args => <ComponentWrapper label="Período da Disputa" placeholder="Placeholder" />,
}

export const SelecionarIntervaloDeDatasSimples: Story = {
  render: args => <ComponentWrapper defaultOptions={[]} />,
}
