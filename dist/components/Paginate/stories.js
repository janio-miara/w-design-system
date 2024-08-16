import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { fn } from '@storybook/test';
import { Paginate } from '.';
const meta = {
    title: 'Components/Paginate',
    component: Paginate,
    tags: ['autodocs'],
    args: {
        currentPage: 1,
        itemCount: 100,
        itemsPerPage: 10,
        onChangePage: fn(),
        onChangeItemsPerPage: fn(),
    },
};
export default meta;
const NewPaginate = (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    const [itemCount, setItemCount] = useState(args.itemCount);
    const [itemsPerPage, setItemsPerPage] = useState(args.itemsPerPage);
    const handleChangePage = (page) => {
        setCurrentPage(page);
        action('changePage')(page);
    };
    const handleChangeItemsPerPage = (items) => {
        setItemsPerPage(items);
        action('changeItemsPerPage')(items);
    };
    return (React.createElement(Paginate, Object.assign({}, args, { currentPage: currentPage, itemCount: itemCount, itemsPerPage: itemsPerPage, onChangePage: handleChangePage, onChangeItemsPerPage: handleChangeItemsPerPage })));
};
export const Default = {
    render: args => {
        return React.createElement(NewPaginate, Object.assign({}, args));
    },
};
//# sourceMappingURL=stories.js.map