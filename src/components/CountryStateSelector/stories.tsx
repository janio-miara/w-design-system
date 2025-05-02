import { Meta, StoryObj } from '@storybook/react'
import { CountryStateSelect, CountryStateSelectProps } from './index'
import React from 'react'

const meta: Meta<typeof CountryStateSelect> = {
  title: 'Components/CountryStateSelect',
  component: CountryStateSelect,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    selectedOption: { control: 'number' },
    onOptionChange: { action: 'selectedOptionChange' },
    dropDownTop: { control: 'boolean' },
    allStatesOption: { control: 'boolean' },
  },
} satisfies Meta<typeof CountryStateSelect>

export default meta
type Story = StoryObj<typeof CountryStateSelect>


const ComponentWrapper = ({ ...args }: CountryStateSelectProps) => {
  const [selectedOption, setSelectOption] = React.useState<CountryStateSelectProps['selectedOption']>(null)

  return (
    <CountryStateSelect
      {...args}
      selectedOption={selectedOption}
      onOptionChange={option => setSelectOption(option)}
    />
  )
}

export const Default: Story = {
  render: args => (
    <ComponentWrapper
      {...args}
      label="Label"
      placeholder="Placeholder"
    />
  ),
}



export const OnlySudesteRegion: Story = {
  render: args => (
    <ComponentWrapper
      {...args}
      label="Label"
      placeholder="Placeholder"
      validStates={['SP', 'RJ', 'MG', 'ES']}
    />
  ),
}



export const OnlySulRegion: Story = {
  render: args => (
    <ComponentWrapper
      {...args}
      label="Label"
      placeholder="Placeholder"
      validStates={['PR', 'SC', 'RS']}
    />
  ),
}


export const OnlySulRegionWithoutAllOption: Story = {
  render: args => (
    <ComponentWrapper
      {...args}
      label="Label"
      placeholder="Placeholder"
      validStates={['PR', 'SC', 'RS']}
      allStatesOption={false}
    />
  ),
}
