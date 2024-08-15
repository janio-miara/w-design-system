import type { Meta, StoryObj } from '@storybook/react'
import { Table } from './index'
import React from 'react'
import { ButtonRound } from '../ButtonRound'
import { dumpSVG, editSVG } from '../../assets/icon'
import CardStories from '../CardStories'
import { ContainerLoading } from '../Loading'

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'object',
      description: 'Array of column definitions',
    },
    data: {
      control: 'object',
      description: 'Array of data objects',
    },
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const columns = [
  {
    header: 'Title',
    accessor: 'title',
    width: 'auto',
    sortable: true, // aqui deixar uma opção para ordenar passando uma função
    onClick: (row: any) => alert('Title'),
    align: 'center',
  },
  {
    header: 'Year',
    accessor: 'year',
    width: 'auto',
  },
  {
    header: 'Actions',
    accessor: 'id',
    width: '50px',
    onClick: () => alert('Title'),
  },
]

export const Default: Story = {
  args: {
    maxHeight: '300px',
    columns: [
      {
        header: 'Title',
        accessor: 'title',
        width: 'auto',
        sortable: true, // aqui deixar uma opção para ordenar passando uma função
        onClick: (row: string) => alert(row),
      },
      {
        header: 'Year',
        accessor: 'year',
        width: 'auto',
      },
      {
        header: 'Actions',
        accessor: 'id',
        width: '50px',
        onClick: (row: string) => alert(row),
      },
    ],
    data: [
      {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
        colapsed: true,
        containerColapsed: ({ title }: any) => <div>{title}</div>,
      },
      {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
      },
    ],
  },
}
