import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Paginate, PaginateProps } from '.'

const meta: Meta<PaginateProps> = {
  title: 'Components/Paginate',
  component: Paginate,
  tags: ['autodocs'],
  args: {
    currentPage: 1,
    itemCount: 100,
    itemsPerPage: 10,
    onChangePage:  (page => {
      console.log(`Page changed to: ${page}`)
    }),
    onChangeItemsPerPage: (itemsPerPage => {
      console.log(`Items per page changed to: ${itemsPerPage}`)
    }),
    itemPerPageOptions: [10, 20, 50, 100],
    dropDownTop: true,
  },
} satisfies Meta<PaginateProps>

export default meta

const NewPaginate = (args: PaginateProps) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage)
  const [itemsPerPage, setItemsPerPage] = useState(args.itemsPerPage)

  const handleChangePage = (page: number) => {
    setCurrentPage(page)
  }

  const handleChangeItemsPerPage = (items: number) => {
    setItemsPerPage(items)
  }
  return (
    <>
      <div style={{ height: '500px', width: '100%' }}></div>
      <Paginate
        {...args}
        currentPage={currentPage}
        itemCount={args.itemCount}
        itemsPerPage={itemsPerPage}
        onChangePage={handleChangePage}
        onChangeItemsPerPage={handleChangeItemsPerPage}
      />
    </>
  )
}

export const Default: StoryObj<PaginateProps> = {
  render: args => {
    return <NewPaginate {...args} />
  },
}

export const Bottom: StoryObj<PaginateProps> = {
  render: args => {
    return <NewPaginate {...args} itemPerPageOptions={[10, 50, 100]} />
  },
}
