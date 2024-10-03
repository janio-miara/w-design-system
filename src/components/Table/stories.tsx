import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ButtonRound } from '../ButtonRound'
import { dumpSVG, editSVG } from '../../assets/icon'
import { Table } from './index'
import CardStories from '../CardStories'
import { Paragraph } from '../Paragraph'

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
    loading: {
      control: 'boolean',
      description: 'Loading state of the table',
    },
    emptyStateMessage: {
      control: 'text',
      description: 'Message to display when there is no data',
    },
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const columns = [
  {
    header: 'id',
    accessor: 'id',
    width: 'auto',
  },
  {
    header: 'item',
    accessor: 'item',
    width: 'auto',
    sortable: true,
  },
  {
    header: 'unidades',
    accessor: 'unidades',
    width: 'auto',
    sortable: true,
  },
  {
    header: 'marca/ fabricante',
    accessor: 'marca_fabricante',
    width: 'auto',
    Cell: (row: any) => (
      <div
        onClick={() => alert('aqui')}
        style={{
          background: 'red',
          color: 'white',
          padding: '4px, 2px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {row.marca_fabricante}
      </div>
    ),
  },
  {
    header: 'modelo',
    accessor: 'modelo',
    width: 'auto',
    sortable: true,
  },
  {
    header: 'quantidade solitada',
    accessor: 'quantidade_solitada',
    width: 'auto',
    sortable: true,
  },
  {
    header: 'valor estimado unitario',
    accessor: 'valor_estimado_unitario',
    width: 'auto',
    sortable: true,
  },
  {
    header: 'valor estimado total',
    accessor: 'valor_estimado_total',
    width: 'auto',
    sortable: true,
  },
  {
    header: 'Actions',
    accessor: 'valor_estimado_total',
    width: '100px',
    align: 'center',
    Cell: (row: any, handleExpandClick: (id: number) => void) => (
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
        <ButtonRound icon={editSVG} onClick={() => handleExpandClick(row.id)} />
        <ButtonRound icon={dumpSVG} onClick={() => alert(`Delete ID: ${row.id}`)} variant={'danger'} />
      </div>
    ),
  },
]

export const Default: Story = {
  args: {
    height: 'auto',
    columns: columns,
    striped: true,
    loading: false,
    emptyStateMessage: {
      title: 'Nenhum registro encontrado',
      subTitle: 'Não há registros para exibir',
      description: 'Não há registros para exibir',
    },
    data: [
      {
        id: 1,
        item: 'Beetlejuice',
        unidades: '1988',
        marca_fabricante: 'adidas',
        modelo: 'modelo',
        quantidade_solitada: '10000',
        valor_estimado_unitario: '1000',
        valor_estimado_total: '10000000',
        colapsed: true,
        containerColapsed: ({ item }: any) => (
          <div>
            <Paragraph size={'large'} heavyBod>
              {item}
            </Paragraph>
            <Paragraph>Esta é uma informação adicional sobre .</Paragraph>
          </div>
        ),
      },
      {
        id: 2,
        item: 'Beetlejuice',
        unidades: '1988',
        marca_fabricante: 'adidas',
        modelo: 'modelo',
        quantidade_solitada: '10000',
        valor_estimado_unitario: '1000',
        valor_estimado_total: '10000000',
        containerColapsed: ({ item }: any) => (
          <div>
            <Paragraph size={'large'} heavyBod>
              {item}
            </Paragraph>
            <Paragraph>Esta é uma informação adicional sobre .</Paragraph>
          </div>
        ),
      },
      {
        id: 3,
        item: 'Beetlejuice',
        unidades: '1988',
        marca_fabricante: 'adidas',
        modelo: 'modelo',
        quantidade_solitada: '10000',
        valor_estimado_unitario: '1000',
        valor_estimado_total: '10000000',
        containerColapsed: ({ item }: any) => (
          <div>
            <Paragraph size={'large'} heavyBod>
              {item}
            </Paragraph>
            <Paragraph>Esta é uma informação adicional sobre .</Paragraph>
          </div>
        ),
      },
    ],
  },
}

export const LoadingState: Story = {
  render: () => (
    <CardStories title={'Tabela'} subTitle={'tabela-loading'}>
      <div style={{ width: '900px', height: '800px' }}>
        <Table columns={columns} loading={true} height={'100%'} data={[]} />
      </div>
    </CardStories>
  ),
}

export const EmptyState: Story = {
  args: {
    ...Default.args,
    data: [],
  },
}
