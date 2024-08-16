import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

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

const NewPaginate = (args: PropsPaginate) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage)
  const [itemCount, setItemCount] = useState(args.itemCount)
  const [itemsPerPage, setItemsPerPage] = useState(args.itemsPerPage)

  const handleChangePage = (page: number) => {
    setCurrentPage(page)
    action('changePage')(page)
  }

  const handleChangeItemsPerPage = (items: number) => {
    setItemsPerPage(items)
    action('changeItemsPerPage')(items)
  }
  return (
    <Paginate
      {...args}
      currentPage={currentPage}
      itemCount={itemCount}
      itemsPerPage={itemsPerPage}
      onChangePage={handleChangePage}
      onChangeItemsPerPage={handleChangeItemsPerPage}
    />
  )
}

export const Default: StoryObj<PropsPaginate> = {
  render: args => {
    return <NewPaginate {...args} />
  },
}
