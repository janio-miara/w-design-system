import { Meta, StoryObj } from '@storybook/react'
import { PortalSelect, PortalSelectProps } from './index'
import React from 'react'

const meta: Meta<typeof PortalSelect> = {
  title: 'Components/PortalSelect',
  component: PortalSelect,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    selectedOption: { control: 'number' },
    onOptionChange: { action: 'selectedOptionChange' },
    dropDownTop: { control: 'boolean' },
  },
} satisfies Meta<typeof PortalSelect>

export default meta
type Story = StoryObj<typeof PortalSelect>

const portals = {
  1: 'ComprasNet',
  7: 'BLL COMPRAS',
  8: 'LicitaNet',
  9: 'Licitar Digital',
  10: 'Portal SIGA',
  11: 'BEC SP',
  12: 'E-compras Curitiba',
  13: 'Compras MG',
  14: 'S2GPR',
  15: 'ComprasNet SE',
  16: 'Portal de compras SC',
  17: 'Compras BR',
  18: 'Portal de compras SEPLAG',
  19: 'Registro de Preços Portal de compras MG',
  20: 'Portal de compras TJMS',
  21: 'Compras MS',
  22: 'Compras RS',
  23: 'Pregão Online Banrisul',
  24: 'Compras Natal',
  25: 'Compras PB',
  26: 'Compras EMPRO',
  27: 'ComprasNet BA',
  28: 'FIESC',
  29: 'Imprensa Oficial',
  30: 'Portal de Compras Pernambuco',
  31: 'Portal de Compras Publicas',
  32: 'Compras Fieb',
  33: 'Diário da União',
  34: 'Licitações-e',
  35: 'PNCP',
  36: 'COMPRAS PARÁ',
  37: 'BR Conectado',
  38: 'NOVO BBMNET LICITAÇÕES',
  39: 'Portal de Compras Indaiatuba/SP',
  40: 'CENTI',
  41: 'Bolsa Nacional De Compras - BNC',
  42: 'Portal de Compras São Bernardo do Campo',
  44: 'Portal LICITACON - TCE-RS',
  45: 'Procergs',
  46: 'GMS Paraná',
  47: 'Portal de Compras RJ',
  48: 'Portal de Compras Amazonas',
  49: 'Portal de Compras Recife',
}

const ComponentWrapper = ({ portals, ...args }: PortalSelectProps) => {
  const [selectedOption, setSelectOption] = React.useState<PortalSelectProps['selectedOption']>(null)

  return (
    <PortalSelect
      selectedOption={selectedOption}
      onOptionChange={option => setSelectOption(option)}
      portals={portals}
      {...args}
    />
  )
}

export const Default: Story = {
  render: () => (
    <ComponentWrapper
      label="Label"
      placeholder="Placeholder"
      portals={Object.entries(portals).map(([id, name]) => ({ id: Number(id), name }))}
    />
  ),
}
