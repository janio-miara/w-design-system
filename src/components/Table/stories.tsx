import type { Meta, StoryObj } from '@storybook/react'
import { Table } from './index'
import React from 'react'
import { ButtonRound } from '../ButtonRound'
import { dumpSVG, editSVG } from '../../assets/icon'

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

const Buttons = () => {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <ButtonRound icon={editSVG} onClick={() => {}} variant="primary" size={'small'}>
        ButtonPlayground
      </ButtonRound>
      <ButtonRound icon={dumpSVG} onClick={() => {}} variant="danger" size={'small'} />
    </div>
  )
}

export const Default: Story = {
  args: {
    maxHeight: '200px',
    columns: [
      { header: 'ID', accessor: 'id', width: '30px' },
      { header: 'ITEM', accessor: 'age' },
      { header: 'UNIDADES', accessor: 'unidade' },
      { header: 'MARCA/FABRICANTE', accessor: 'marca' },
      { header: 'MODELO', accessor: 'modelo' },
      { header: 'QUANTIDADE SOLICITADA', accessor: 'quant_silicitada', width: '50px' },
      { header: 'VALOR ESTIMADO UNITÁRIO', accessor: 'valor', width: '10%' },
      { header: 'ACTIONS', accessor: 'icon', width: '80px' },
    ],
    data: [
      {
        id: 1,
        age: 'Item 1',
        unidade: 'Unidade 1',
        marca: 'Marca 1',
        modelo: 'Modelo 1',
        quant_silicitada: 10,
        valor: 100.0,
        icon: <Buttons />,
      },
      {
        id: 2,
        age: 'Item 2',
        unidade: 'Unidade 2',
        marca: 'Marca 2',
        modelo: 'Modelo 2',
        quant_silicitada: 20,
        valor: 200.0,
        icon: <Buttons />,
      },
      {
        id: 3,
        age: 'Item 3',
        unidade: 'Unidade 3',
        marca: 'Marca 3',
        modelo: 'Modelo 3',
        quant_silicitada: 30,
        valor: 300.0,
        icon: <Buttons />,
      },
      {
        id: 4,
        age: 'Item 3',
        unidade: 'Unidade 3',
        marca: 'Marca 3',
        modelo: 'Modelo 3',
        quant_silicitada: 30,
        valor: 300.0,
        icon: <Buttons />,
      },
      {
        id: 5,
        age: 'Item 3',
        unidade: 'Unidade 3',
        marca: 'Marca 3',
        modelo: 'Modelo 3',
        quant_silicitada: 30,
        valor: 300.0,
        icon: <Buttons />,
      },
    ],
  },
}

export const Empty: Story = {
  args: {
    columns: [
      { header: 'Nome', accessor: 'name', width: '10%' },
      { header: 'Idade', accessor: 'age', width: '80%' },
      { header: 'Email', accessor: 'email', width: '10%' },
    ],
    data: [],
  },
}

export const CustomWidths: Story = {
  args: {
    columns: [
      { header: 'Nome', accessor: 'name', width: '10%' },
      { header: 'Idade', accessor: 'age', width: '80%' },
      { header: 'Email', accessor: 'email', width: '10%' },
    ],
    data: [
      { name: 'João', age: 28, email: 'joao@example.com' },
      { name: 'Maria', age: 22, email: 'maria@example.com' },
      { name: 'Pedro', age: 35, email: 'pedro@example.com' },
    ],
  },
}
