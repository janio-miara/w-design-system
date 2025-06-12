import React, { useState } from 'react'
import styled from 'styled-components'
import { Paragraph } from '../Paragraph'
import { theme } from '../Themes'
import { ContainerLoading } from '../Loading'
import { EmptyState } from '../EmptyState'

type Column<T> = {
  header: string
  accessor?: keyof T
  width?: string
  sortable?: boolean
  onClick?: (row: T) => void
  Cell?: (row: T, handleExpandClick: (id: number) => void) => React.ReactNode
  align?: 'left' | 'center' | 'right'
}

type EmptyStateMessage = {
  title: string
  subTitle?: string
  description?: string
}

type TableProps<T extends { id: number }> = {
  columns: Column<T>[]
  data: T[]
  height?: string
  loading?: boolean
  emptyStateMessage?: EmptyStateMessage
  striped?: boolean
  rowClickable?: boolean
  onRowClick?: (row: T) => void
}

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`

const Thead = styled.thead`
  border-bottom: 1px solid #ddd;
`

const TbodyContainer = styled.div<{ height?: string }>`
  overflow-y: auto;
  height: ${props => props.height || '100%'};
`

const Tbody = styled.tbody``

const Tr = styled.tr<{ striped?: boolean; clickable?: boolean }>`
  display: table;
  width: 100%;
  table-layout: fixed;
  background-color: ${props => (props.striped ? '#f9f9f9' : 'transparent')};
  cursor: ${props => (props.clickable ? 'pointer' : 'default')};

  &:nth-child(odd) {
    background-color: ${props => (props.striped ? '#fff' : 'transparent')};
  }
`

const Th = styled.th<{ width?: string; align?: 'left' | 'center' | 'right' }>`
  padding: 10px;
  text-align: ${props => props.align || 'left'};
  width: ${props => props.width || 'auto'};
  vertical-align: middle;
`

const Td = styled.td<{ width?: string; align?: 'left' | 'center' | 'right' }>`
  padding: 12px;
  width: ${props => props?.width || 'auto'};
  text-align: ${props => props?.align || 'left'};
`

const ExpandableRow = styled.div`
  padding: 8px;
  min-height: 50px;
`

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const EmptyStateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
`

export const Table = <T extends { id: number }>({
  columns,
  data,
  height = '100%',
  loading = false,
  emptyStateMessage = {
    title: 'Nenhum registro encontrado',
    subTitle: 'Não há registros para exibir',
    description: 'Não há registros para exibir',
  },
  striped = false,
  rowClickable = false,
  onRowClick,
}: TableProps<T>) => {
  const [expandedRows, setExpandedRows] = useState<number[]>([])
  const [selectedRowId, setSelectedRowId] = useState<number | null>(null)

  const handleRowClick = (row: T) => {
    setSelectedRowId(row.id)
    onRowClick?.(row) // dispara a função recebida por props
  }
  const handleExpandClick = (id: number) => {
    setExpandedRows(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]))
  }

  return (
    <TableContainer>
      <StyledTable>
        <Thead>
          <Tr striped={striped}>
            {columns.map((col, index) => (
              <Th key={index} width={col.width} align={col.align}>
                <Paragraph color={theme.colors.shade30} textTransform={'uppercase'} strongBod>
                  {col.header}
                </Paragraph>
              </Th>
            ))}
          </Tr>
        </Thead>
      </StyledTable>
      <TbodyContainer height={height}>
        <StyledTable>
          <Tbody>
            {loading ? (
              <LoadingWrapper>
                <ContainerLoading size={'small'} />
              </LoadingWrapper>
            ) : data.length === 0 ? (
              <EmptyStateWrapper>
                <EmptyState
                  title={emptyStateMessage?.title}
                  subTitle={emptyStateMessage?.subTitle}
                  description={emptyStateMessage?.description}
                />
              </EmptyStateWrapper>
            ) : (
              data.map(row => (
                <React.Fragment key={row.id}>
                  <Tr
                    striped={striped}
                    clickable={rowClickable && !!onRowClick}
                    onClick={() => rowClickable && onRowClick && handleRowClick(row)}
                    style={{
                      border: `1px solid ${selectedRowId === row.id ? theme.colors.cyan30 : 'transparent'}`,
                      background: selectedRowId === row.id ? theme.colors.cyan10 : 'transparent',
                    }}
                  >
                    {columns.map((col, colIndex) => (
                      <Td key={colIndex} width={col.width} align={col.align || 'left'}>
                        {col.Cell ? (
                          // Exemplo de uso de stopPropagation():
                          // Se o Cell renderiza um botão, no onClick do botão faça event.stopPropagation()
                          col.Cell(row, handleExpandClick)
                        ) : col.accessor ? (
                          <Paragraph color={theme.colors.shade40}>{String(row[col.accessor])}</Paragraph>
                        ) : null}
                      </Td>
                    ))}
                  </Tr>
                  {expandedRows.includes(row.id) &&
                    'containerColapsed' in row &&
                    typeof (row as any).containerColapsed === 'function' && (
                      <ExpandableRow>{(row as any).containerColapsed(row)}</ExpandableRow>
                    )}
                </React.Fragment>
              ))
            )}
          </Tbody>
        </StyledTable>
      </TbodyContainer>
    </TableContainer>
  )
}
