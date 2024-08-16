import React from 'react';
export type PropsPaginate = {
    currentPage: number;
    itemCount: number;
    itemsPerPage?: number;
    onChangePage: (page: number) => void;
    onChangeItemsPerPage: (itemsPerPage: number) => void;
};
export declare const Paginate: ({ currentPage, itemCount, onChangePage, itemsPerPage, onChangeItemsPerPage, }: PropsPaginate) => React.JSX.Element;
//# sourceMappingURL=index.d.ts.map