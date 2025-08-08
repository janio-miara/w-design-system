import { Meta, StoryObj } from '@storybook/react'
import { DatePicker, DatePickerProps } from './index'
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

interface ComponentWrapperProps extends Omit<DatePickerProps, 'options' | 'selectedOption' | 'customDate' | 'onSelectedOptionChange' | 'onSelectedCustomDate'> {
  defaultOptions?: { text: string; id: number }[]
}

const ComponentWrapper: React.FC<ComponentWrapperProps> = ({ defaultOptions, ...args }) => {
  const [selectedOption, setSelectOption] = React.useState<DatePickerProps['selectedOption']>(null)

  const [customDate, setCustomDate] = React.useState<Date | null>(null)
  const onSelectedOptionChange = (option: DatePickerProps['selectedOption']) => {
    setSelectOption(option)
    if (option == null) {
      setCustomDate(null)
      return
    }
    const date = new Date()
    date.setDate(date.getDate() + option?.id)
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
  render: () => <ComponentWrapper label="Data da Disputa" placeholder="Placeholder" />,
}

export const SelecionarDatasSimples: Story = {
  render: () => <ComponentWrapper defaultOptions={[]} label="Data da Disputa" placeholder="Placeholder" />,
}
