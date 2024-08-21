import { Meta, StoryObj } from '@storybook/react'
import { Input } from './index'
import { VARIANTS_TYPES } from '../../utils/constanst'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof Input>

export const Playground: Story = {
  args: {
    label: 'teste',
    placeholder: 'teste',
  },
}
