import { Meta, StoryObj } from '@storybook/react'
import { RangeDateInput } from './index'
import { VARIANTS_TYPES } from '../../utils/constanst'
import React from 'react'

const meta: Meta<typeof RangeDateInput> = {
  title: 'Components/RangeDateInput',
  component: RangeDateInput,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RangeDateInput>

export default meta
type Story = StoryObj<typeof RangeDateInput>

export const Playground: Story = {
  args: {
    label: 'Período da Disputa',
    placeholder: 'teste',
    defaultOptions: [90, 60, 30],
  },
}

const ComponentWrapper = ({ ...args }: any) => {
  const [selectedOption, setSelectOption] = React.useState<number | null>( null)
  return (
    <RangeDateInput
      selectedOption={selectedOption}
      onSelectedOptionChange={option => setSelectOption(option)}
      defaultOptions={[90, 60, 30]}
      {...args}
    />
  )
}

export const Default: StoryObj<typeof RangeDateInput> = {
  render: args => <ComponentWrapper />,
}
