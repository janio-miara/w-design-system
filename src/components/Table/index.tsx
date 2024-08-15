import React, { useState } from 'react'
import styled from 'styled-components'
import { Paragraph } from '../Paragraph'
import { theme } from '../Themes'
import { editSVG, chevronDownSVG } from '../../assets/icon'
import { ButtonRound } from '../ButtonRound'
import { ContainerLoading } from '../Loading'
import { IconWrapper } from '../IconWrapper'

interface Column {
  header: string
  accessor: string
  width?: string
  actionIcon?: boolean
  customRender?: (row: Record<string, any>) => React.ReactNode
  sortable?: boolean
  onClick?: (row: string) => void
}

interface TableProps {
  columns: Column[]
  data: Record<string, any>[]
  maxHeight?: string
  loading?: boolean
}

export const Table: React.FC<TableProps> = ({ columns, data, maxHeight, loading = false }) => {
  const [editRowIndex, setEditRowIndex] = useState<number | null>(null)

  const handleEditClick = (index: number) => {
    setEditRowIndex(index === editRowIndex ? null : index)
  }

  return (
    <TableWrapper maxHeight={maxHeight}>
      <TableStyled>
        <TheadStyled>
          <tr>
            {columns?.map(column => (
              <ThStyled
                key={column.accessor}
                width={column.width}
                sortable={column.sortable}
                onClick={() => column.onClick && column.onClick(column?.accessor)}
              >
                <Paragraph size="x-small" color={theme.colors.shade30}>
                  {column.header} {column.sortable && <IconWrapper src={chevronDownSVG} width={'10px'} />}
                </Paragraph>
              </ThStyled>
            ))}
          </tr>
        </TheadStyled>
        <TBodyStyled>
          {loading ? (
            <LoadingWrapper>
              <ContainerLoading size={'small'} />
            </LoadingWrapper>
          ) : (
            data?.map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                <TrStyled>
                  {columns?.map(column => {
                    if (column.customRender) {
                      return (
                        <TdStyled key={column.accessor} width={column.width}>
                          {column.customRender(row)}
                        </TdStyled>
                      )
                    }
                    if (column.actionIcon) {
                      return (
                        <TdStyled key={column.accessor} width={column.width}>
                          {row[column.accessor](row)}
                        </TdStyled>
                      )
                    }
                    if (column.accessor === 'edit') {
                      return (
                        <TdActionStyled key={column.accessor} width={column.width}>
                          <ButtonRound
                            icon={editSVG}
                            onClick={() => handleEditClick(rowIndex)}
                            variant="primary"
                            size="small"
                          />
                        </TdActionStyled>
                      )
                    }
                    return (
                      <TdStyled key={column.accessor} width={column.width}>
                        <Paragraph size="small" color={theme.colors.shade40}>
                          {row[column.accessor]}
                        </Paragraph>
                      </TdStyled>
                    )
                  })}
                </TrStyled>
                {editRowIndex === rowIndex && (
                  <tr>
                    <td colSpan={columns.length + 2}>
                      <EditBox>
                        <Paragraph size="small" color={theme.colors.shade40}>
                          Editing row {rowIndex + 1}
                        </Paragraph>
                      </EditBox>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))
          )}
        </TBodyStyled>
      </TableStyled>
    </TableWrapper>
  )
}
