import React from 'react';
export type PaginateProps = {
    currentPage: number;
    itemCount: number;
    itemsPerPage?: number;
    onChangePage: (page: number) => void;
    onChangeItemsPerPage: (itemsPerPage: number) => void;
    dropDownTop?: boolean;
    itemPerPageOptions?: number[];
};
export declare const Paginate: ({ currentPage, itemCount, onChangePage, itemsPerPage, onChangeItemsPerPage, itemPerPageOptions, dropDownTop, }: PaginateProps) => React.JSX.Element;
//# sourceMappingURL=index.d.ts.map