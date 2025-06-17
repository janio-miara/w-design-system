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
      control: 'object',
      description: 'Message to display when there is no data',
    },
    rowClickable: {
      control: 'boolean',
      description: 'Permite clicar em qualquer parte da linha',
    },
    onRowClick: {
      control: false,
      description: 'Função chamada ao clicar em uma linha',
    },
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

type Column<T> = {
  header: string
  accessor?: keyof T
  width?: string
  sortable?: boolean
  onClick?: (row: T) => void
  Cell?: (row: T, handleExpandClick: (id: number) => void) => React.ReactNode
  align?: 'left' | 'center' | 'right'
}
// Aqui anotamos explicitamente o tipo das colunas para evitar inferência incorreta de "string":
const columns: Column<any>[] = [
  { header: 'id', accessor: 'id', width: 'auto' },
  { header: 'item', accessor: 'item', width: 'auto', sortable: true },
  { header: 'unidades', accessor: 'unidades', width: 'auto', sortable: true },
  {
    header: 'marca/ fabricante',
    accessor: 'marca_fabricante',
    width: 'auto',
    Cell: (row: any) => (
      <div
        onClick={e => {
          e.stopPropagation()
          alert('Marca clicada')
        }}
        style={{
          background: 'red',
          color: 'white',
          padding: '4px 2px',
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
  { header: 'modelo', accessor: 'modelo', width: 'auto', sortable: true },
  {
    header: 'quantidade solicitada',
    accessor: 'quantidade_solitada',
    width: 'auto',
    sortable: true,
  },
  {
    header: 'valor unitário',
    accessor: 'valor_estimado_unitario',
    width: 'auto',
    sortable: true,
  },
  {
    header: 'valor total',
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
        <ButtonRound
          icon={editSVG}
          onClick={e => {
            e.stopPropagation()
            handleExpandClick(row.id)
          }}
        />
        <ButtonRound
          icon={dumpSVG}
          onClick={e => {
            e.stopPropagation()
            alert(`Delete ID: ${row.id}`)
          }}
          variant={'danger'}
        />
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
    rowClickable: true,
    onRowClick: (row: any) => alert(`Você clicou na linha ID: ${row.id}`),

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
        modelo: 'modelo X',
        quantidade_solitada: '10000',
        valor_estimado_unitario: '1000',
        valor_estimado_total: '10000000',
        containerColapsed: ({ item }: any) => (
          <div>
            <Paragraph size={'large'} heavyBod>
              {item}
            </Paragraph>
            <Paragraph>Esta é uma informação adicional sobre {item}.</Paragraph>
          </div>
        ),
      },
      {
        id: 2,
        item: 'Ghostbusters',
        unidades: '1984',
        marca_fabricante: 'nike',
        modelo: 'modelo Y',
        quantidade_solitada: '20000',
        valor_estimado_unitario: '2000',
        valor_estimado_total: '40000000',
        containerColapsed: ({ item }: any) => (
          <div>
            <Paragraph size={'large'} heavyBod>
              {item}
            </Paragraph>
            <Paragraph>Detalhes adicionais sobre {item}.</Paragraph>
          </div>
        ),
      },
      {
        id: 3,
        item: 'Mad Max',
        unidades: '1979',
        marca_fabricante: 'puma',
        modelo: 'modelo Z',
        quantidade_solitada: '15000',
        valor_estimado_unitario: '1500',
        valor_estimado_total: '22500000',
        containerColapsed: ({ item }: any) => (
          <div>
            <Paragraph size={'large'} heavyBod>
              {item}
            </Paragraph>
            <Paragraph>Mais informações sobre {item} aqui.</Paragraph>
          </div>
        ),
      },
    ],
  },
}

// @ts-ignore
export const LoadingState: Story = {
  render: () => (
    <CardStories title={'Tabela'} subTitle={'tabela-loading'}>
      <div style={{ width: '900px', height: '800px' }}>
        <Table
          columns={columns}
          loading={true}
          height={'100%'}
          data={[]}
          onRowClick={student => {
            console.log('Linha selecionada:', student)
          }}
        />
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
