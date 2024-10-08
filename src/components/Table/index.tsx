import React, { useState } from 'react'
import styled from 'styled-components'
import { Paragraph } from '../Paragraph'
import { theme } from '../Themes'
import { ContainerLoading } from '../Loading'
import { EmptyState } from '../EmptyState'

type Column = {
  header: string
  accessor: string
  width?: string
  sortable?: boolean
  onClick?: (row: any) => void
  Cell?: (row: any, handleExpandClick: (id: number) => void) => React.ReactNode
  align?: 'left' | 'center' | 'right'
}

type emptyStateMessage = {
  title: string
  subTitle?: string
  description?: string
}
type TableProps = {
  columns: Column[] | any
  data: any[]
  height?: string
  loading?: boolean
  emptyStateMessage?: emptyStateMessage
  striped?: boolean
}

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-x: auto;
`

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  height: 100%;
`

const Thead = styled.thead`
  display: table-header-group;
  border-bottom: 1px solid #ddd;
`

const Tbody = styled.tbody<{ height?: string }>`
  display: block;
  width: 100%;
  overflow-y: auto;
  height: ${props => props.height || '100%'};
`

const Tr = styled.tr<{ striped?: boolean }>`
  display: table;
  width: 100%;
  table-layout: fixed;
`
const TrRow = styled.tr<{ striped?: boolean }>`
  display: table;
  width: 100%;
  table-layout: fixed;
  &:nth-of-type(n + 2) {
    background-color: ${props => (props.striped ? '#f9f9f9' : 'transparent')};
  }
  &:nth-of-type(odd) {
    background-color: ${props => (props.striped ? '#fff' : 'transparent')};
  }
`

const Th = styled.th<{ width?: string; align?: 'left' | 'center' | 'right' }>`
  padding: 10px;
  text-align: ${props => props.align || 'left'};
  width: ${props => props.width || 'auto'};
`

const Td = styled.td<{ width?: string; align: 'left' | 'center' | 'right' }>`
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

export const Table: React.FC<TableProps> = ({
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
}) => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null)

  const handleExpandClick = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id)
  }

  // @ts-ignore
  return (
    <TableContainer>
      <StyledTable>
        <Thead>
          <Tr striped={striped}>
            {columns.map(
              (
                col: {
                  width: string | undefined
                  align: any
                  header:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | null
                    | undefined
                },
                index: React.Key | null | undefined,
              ) => (
                <Th key={index} width={col.width} align={col.align}>
                  <Paragraph color={theme.colors.shade30} textTransform={'uppercase'} strongBod>
                    {col.header}
                  </Paragraph>
                </Th>
              ),
            )}
          </Tr>
        </Thead>
        <Tbody height={height}>
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
            data.map((row, rowIndex) => (
              <React.Fragment key={row.id}>
                <TrRow striped={striped}>
                  {columns.map(
                    (
                      col: {
                        width: string | undefined
                        align: any
                        Cell: (
                          arg0: any,
                          arg1: (id: number) => void,
                        ) =>
                          | string
                          | number
                          | boolean
                          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
                          | Iterable<React.ReactNode>
                          | React.ReactPortal
                          | null
                          | undefined
                        accessor: string | number
                      },
                      colIndex: React.Key | null | undefined,
                    ) => (
                      <Td key={colIndex} width={col?.width} align={col?.align}>
                        {col.Cell ? (
                          col.Cell(row, handleExpandClick)
                        ) : (
                          <Paragraph color={theme.colors.shade40}>{row[col.accessor]}</Paragraph>
                        )}
                      </Td>
                    ),
                  )}
                </TrRow>
                {expandedRow === row.id && row.containerColapsed && (
                  <ExpandableRow>{row.containerColapsed(row)}</ExpandableRow>
                )}
              </React.Fragment>
            ))
          )}
        </Tbody>
      </StyledTable>
    </TableContainer>
  )
}
