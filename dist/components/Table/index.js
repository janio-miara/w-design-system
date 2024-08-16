import React, { useState } from 'react';
import styled from 'styled-components';
import { Paragraph } from '../Paragraph';
import { theme } from '../Themes';
import { ContainerLoading } from '../Loading';
const TableContainer = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-x: auto;
`;
const StyledTable = styled.table `
  width: 100%;
  border-collapse: collapse;
  height: 100%;
`;
const Thead = styled.thead `
  display: table-header-group;
  border-bottom: 1px solid #ddd;
`;
const Tbody = styled.tbody `
  display: block;
  width: 100%;
  overflow-y: auto;
  height: ${props => props.height || '100%'};
`;
const Tr = styled.tr `
  display: table;
  width: 100%;
  table-layout: fixed;
`;
const TrRow = styled.tr `
  display: table;
  width: 100%;
  table-layout: fixed;
  &:nth-of-type(n + 2) {
    background-color: ${props => (props.striped ? '#f9f9f9' : 'transparent')};
  }
  &:nth-of-type(odd) {
    background-color: ${props => (props.striped ? '#fff' : 'transparent')};
  }
`;
const Th = styled.th `
  padding: 10px;
  text-align: ${props => props.align || 'left'};
  width: ${props => props.width || 'auto'};
`;
const Td = styled.td `
  padding: 12px;
  width: ${props => (props === null || props === void 0 ? void 0 : props.width) || 'auto'};
  text-align: ${props => (props === null || props === void 0 ? void 0 : props.align) || 'left'};
`;
const ExpandableRow = styled.div `
  padding: 8px;
  min-height: 50px;
`;
const LoadingWrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const EmptyStateWrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
`;
export const Table = ({ columns, data, height = '100%', loading = false, emptyStateMessage = 'No data available', striped = false, }) => {
    const [expandedRow, setExpandedRow] = useState(null);
    const handleExpandClick = (id) => {
        setExpandedRow(expandedRow === id ? null : id);
    };
    // @ts-ignore
    return (React.createElement(TableContainer, null,
        React.createElement(StyledTable, null,
            React.createElement(Thead, null,
                React.createElement(Tr, { striped: striped }, columns.map((col, index) => (React.createElement(Th, { key: index, width: col.width, align: col.align },
                    React.createElement(Paragraph, { color: theme.colors.shade30, textTransform: 'uppercase' }, col.header)))))),
            React.createElement(Tbody, { height: height }, loading ? (React.createElement(LoadingWrapper, null,
                React.createElement(ContainerLoading, { size: 'small' }))) : data.length === 0 ? (React.createElement(EmptyStateWrapper, null,
                React.createElement(Paragraph, null, emptyStateMessage))) : (data.map((row, rowIndex) => (React.createElement(React.Fragment, { key: row.id },
                React.createElement(TrRow, { striped: striped }, columns.map((col, colIndex) => (React.createElement(Td, { key: colIndex, width: col === null || col === void 0 ? void 0 : col.width, align: col === null || col === void 0 ? void 0 : col.align }, col.Cell ? (col.Cell(row, handleExpandClick)) : (React.createElement(Paragraph, { color: theme.colors.shade40 }, row[col.accessor])))))),
                expandedRow === row.id && row.containerColapsed && (React.createElement(ExpandableRow, null, row.containerColapsed(row)))))))))));
};
//# sourceMappingURL=index.js.map