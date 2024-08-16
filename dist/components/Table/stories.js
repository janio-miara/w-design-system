import React from 'react';
import { ButtonRound } from '../ButtonRound';
import { dumpSVG, editSVG } from '../../assets/icon';
import { Table } from './index';
import CardStories from '../CardStories';
import { Paragraph } from '../Paragraph';
const meta = {
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
};
export default meta;
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
        Cell: (row) => (React.createElement("div", { onClick: () => alert('aqui'), style: {
                background: 'red',
                color: 'white',
                padding: '4px, 2px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            } }, row.marca_fabricante)),
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
        Cell: (row, handleExpandClick) => (React.createElement("div", { style: { display: 'flex', gap: '8px', justifyContent: 'center' } },
            React.createElement(ButtonRound, { icon: editSVG, onClick: () => handleExpandClick(row.id) }),
            React.createElement(ButtonRound, { icon: dumpSVG, onClick: () => alert(`Delete ID: ${row.id}`), variant: 'danger' }))),
    },
];
export const Default = {
    args: {
        height: 'auto',
        columns: columns,
        striped: true,
        loading: false,
        emptyStateMessage: 'No data available',
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
                containerColapsed: ({ item }) => (React.createElement("div", null,
                    React.createElement(Paragraph, { size: 'large', heavyBod: true }, item),
                    React.createElement(Paragraph, null, "Esta \u00E9 uma informa\u00E7\u00E3o adicional sobre ."))),
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
                containerColapsed: ({ item }) => (React.createElement("div", null,
                    React.createElement(Paragraph, { size: 'large', heavyBod: true }, item),
                    React.createElement(Paragraph, null, "Esta \u00E9 uma informa\u00E7\u00E3o adicional sobre ."))),
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
                containerColapsed: ({ item }) => (React.createElement("div", null,
                    React.createElement(Paragraph, { size: 'large', heavyBod: true }, item),
                    React.createElement(Paragraph, null, "Esta \u00E9 uma informa\u00E7\u00E3o adicional sobre ."))),
            },
        ],
    },
};
export const LoadingState = {
    render: () => (React.createElement(CardStories, { title: 'Tabela', subTitle: 'tabela-loading' },
        React.createElement("div", { style: { width: '900px', height: '800px' } },
            React.createElement(Table, { columns: columns, loading: true, height: '100%', data: [] })))),
};
export const EmptyState = {
    args: Object.assign(Object.assign({}, Default.args), { data: [] }),
};
//# sourceMappingURL=stories.js.map