import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { action } from '@storybook/addon-actions'
import { fn } from '@storybook/test'
import { Paginate, PropsPaginate } from '.'

const meta: Meta<PropsPaginate> = {
  title: 'Components/Paginate',
  component: Paginate,
  tags: ['autodocs'],
  args: {
    currentPage: 1,
    itemCount: 100,
    itemsPerPage: 10,
    onChangePage: fn(),
    onChangeItemsPerPage: fn(),
  },
}

export default meta

export const Default: StoryObj<PropsPaginate> = {
  render: args => (
    <Paginate {...args} onChangePage={action('changePage')} onChangeItemsPerPage={action('changeItemsPerPage')} />
  ),
}
