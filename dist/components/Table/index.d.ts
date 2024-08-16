import React from 'react';
type Column = {
    header: string;
    accessor: string;
    width?: string;
    sortable?: boolean;
    onClick?: (row: any) => void;
    Cell?: (row: any, handleExpandClick: (id: number) => void) => React.ReactNode;
    align?: 'left' | 'center' | 'right';
};
type TableProps = {
    columns: Column[] | any;
    data: any[];
    height?: string;
    loading?: boolean;
    emptyStateMessage?: string;
    striped?: boolean;
};
export declare const Table: React.FC<TableProps>;
export {};
//# sourceMappingURL=index.d.ts.map