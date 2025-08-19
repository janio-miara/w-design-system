import React, { useState } from 'react';
import styled from 'styled-components';
import { Paragraph } from '../Paragraph';
import { theme } from '../Themes';
import { ContainerLoading } from '../Loading';
import { EmptyState } from '../EmptyState';

type Column<T> = {
  header: string;
  accessor?: keyof T;
  width?: string;
  sortable?: boolean;
  onClick?: (row: T) => void;
  Cell?: (row: T, handleExpandClick: (id: number) => void) => React.ReactNode;
  align?: 'left' | 'center' | 'right';
};

type EmptyStateMessage = {
  title: string;
  subTitle?: string;
  description?: string;
};

export type TableProps<T extends { id: number }> = {
  columns: Column<T>[];
  data: T[];
  height?: string;
  loading?: boolean;
  emptyStateMessage?: EmptyStateMessage;
  striped?: boolean;
  rowClickable?: boolean;
  onRowClick?: (row: T) => void;
};

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export interface StyledTableProps {
  $height?: string;
}

const StyledTable = styled.table<StyledTableProps>`
  width: 100%;
  position: relative;
  border-collapse: collapse;
  height: ${props => props.$height || 'auto'};
`;

const Thead = styled.thead`
  border-bottom: 1px solid ${theme.colors.shade10};
`;

const Tbody = styled.tbody`
  overflow-y: auto;
`;

const Tr = styled.tr<{ $striped?: boolean; $clickable?: boolean; $selected?: boolean }>`
  background-color: ${({ $selected, $striped }) =>
    $selected ? theme.colors.cyan10 : $striped ? 'white' : 'transparent'};
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};

  &:nth-child(even) {
    background-color: ${({ $selected, $striped }) =>
      $selected ? theme.colors.cyan10 : $striped ? theme.colors.shade05 : 'transparent'};
  }

  &:hover {
    background-color: ${({ $clickable, $selected }) => ($clickable && !$selected ? theme.colors.cyan10 : '')};
  }
`;

const Th = styled.th<{ $width?: string; $align?: 'left' | 'center' | 'right' }>`
  background-color: ${theme.colors.white};
  position: sticky;
  z-index: 2;
  top: 0;
  padding: 10px;
  text-align: ${({ $align }) => $align || 'left'};
  width: ${({ $width }) => $width || 'auto'};
  vertical-align: middle;
`;

const Td = styled.td<{ $width?: string; $align?: 'left' | 'center' | 'right' }>`
  padding: 12px;
  width: ${({ $width }) => $width || 'auto'};
  text-align: ${({ $align }) => $align || 'left'};
`;

const ExpandableRow = styled.div`
  padding: 8px;
  min-height: 50px;
`;

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const EmptyStateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const Table = <T extends { id: number; containerColapsed?: (row: T) => React.ReactNode }>({
  columns,
  data,
  height = 'auto',
  loading = false,
  emptyStateMessage = {
    title: 'Nenhum registro encontrado',
    subTitle: 'Não há registros para exibir',
    description: 'Não há registros para exibir'
  },
  striped = false,
  rowClickable = false,
  onRowClick
}: TableProps<T>) => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  const [selectedRowId, setSelectedRowId] = useState<number | null>(null);

  const handleRowClick = (row: T) => {
    setSelectedRowId(row.id);
    onRowClick?.(row);
  };

  const handleExpandClick = (id: number) => {
    setExpandedRows(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]));
  };

  return (
    <TableContainer>
      <StyledTable $height={height}>
        <Thead>
          <Tr>
            {columns.map((col, index) => (
              <Th key={index} $width={col.width} $align={col.align}>
                <Paragraph color={theme.colors.shade30} textTransform="uppercase" strongBold>
                  {col.header}
                </Paragraph>
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {loading ? (
            <Tr>
              <Td colSpan={columns.length}>
                <LoadingWrapper>
                  <ContainerLoading size="small" />
                </LoadingWrapper>
              </Td>
            </Tr>
          ) : data.length === 0 ? (
            <Tr>
              <Td colSpan={columns.length}>
                <EmptyStateWrapper>
                  <EmptyState
                    title={emptyStateMessage.title}
                    subTitle={emptyStateMessage.subTitle}
                    description={emptyStateMessage.description}
                  />
                </EmptyStateWrapper>
              </Td>
            </Tr>
          ) : (
            data.map(row => (
              <React.Fragment key={row.id}>
                <Tr
                  $striped={striped}
                  $clickable={rowClickable && !!onRowClick}
                  $selected={selectedRowId === row.id}
                  onClick={() => rowClickable && onRowClick && handleRowClick(row)}
                >
                  {columns.map((col, colIndex) => (
                    <Td key={colIndex} $width={col.width} $align={col.align}>
                      {col.Cell
                        ? col.Cell(row, handleExpandClick)
                        : col.accessor &&
                          row[col.accessor] && (
                            <Paragraph color={theme.colors.shade50}>{String(row[col.accessor])}</Paragraph>
                          )}
                    </Td>
                  ))}
                </Tr>

                {expandedRows.includes(row.id) &&
                  'containerColapsed' in row &&
                  typeof row.containerColapsed === 'function' && (
                    <ExpandableRow>{row.containerColapsed(row)}</ExpandableRow>
                  )}
              </React.Fragment>
            ))
          )}
        </Tbody>
      </StyledTable>
    </TableContainer>
  );
};
