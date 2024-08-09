import React from 'react'
import styled from 'styled-components'
import { Paragraph } from '../Paragraph'
import { theme } from '../Themes'

interface Column {
  header: string
  accessor: string
  width?: string
}

interface TableProps {
  columns: Column[]
  data: Record<string, any>[]
  maxHeight?: string
}

const TableWrapper = styled.div<any>`
  width: 100%;
  overflow-x: auto;
  max-height: ${({ maxHeight }: { maxHeight?: string }) => maxHeight || 'auto'};
  position: relative;
`

const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`

const TheadStyled = styled.thead`
  position: sticky;
  top: 0;
  background-color: ${theme.colors.white};
  z-index: 1;
`

const ThStyled = styled.th<{ width?: string }>`
  width: ${({ width }) => width || 'auto'};
  border: none;
  border-bottom: 1px solid ${theme.colors.shade20};
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${theme.colors.white};
`

const TdStyled = styled.td<{ width?: string }>`
  width: ${({ width }) => width || 'auto'};
  padding: 0 12px;
  border: none;
  height: 50px;
`

const TrStyled = styled.tr`
  &:nth-child(even) {
    background-color: ${theme.colors.shade05};
  }
  &:nth-child(odd) {
    background-color: #ffffff;
  }
  &:hover {
    background-color: ${theme.colors.shade10};
  }
`

const TBodyStyled = styled.tbody`
  margin-top: 8px;
  width: 100%;
  overflow-y: auto;
`

export const Table: React.FC<TableProps> = ({ columns, data, maxHeight }) => {
  return (
    <TableWrapper maxHeight={maxHeight}>
      <TableStyled>
        <TheadStyled>
          <tr>
            {columns.map(column => (
              <ThStyled key={column.accessor} width={column.width}>
                <Paragraph size={'x-small'} color={theme.colors.shade30}>
                  {column.header}
                </Paragraph>
              </ThStyled>
            ))}
          </tr>
        </TheadStyled>

        <TBodyStyled>
          {data.map((row, rowIndex) => (
            <TrStyled key={rowIndex}>
              {columns.map(column => (
                <TdStyled key={column.accessor} width={column.width}>
                  {column.accessor === 'icon' ? (
                    row[column.accessor]
                  ) : (
                    <Paragraph size={'small'} color={theme.colors.shade40}>
                      {row[column.accessor]}
                    </Paragraph>
                  )}
                </TdStyled>
              ))}
            </TrStyled>
          ))}
        </TBodyStyled>
      </TableStyled>
    </TableWrapper>
  )
}
