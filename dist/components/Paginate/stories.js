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
        dropDownTop: true,
    },
};
export default meta;
const NewPaginate = (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    const [itemsPerPage, setItemsPerPage] = useState(args.itemsPerPage);
    const handleChangePage = (page) => {
        setCurrentPage(page);
        action('changePage')(page);
    };
    const handleChangeItemsPerPage = (items) => {
        setItemsPerPage(items);
        action('changeItemsPerPage')(items);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: { height: '500px', width: '100%' } }),
        React.createElement(Paginate, Object.assign({}, args, { currentPage: currentPage, itemCount: args.itemCount, itemsPerPage: itemsPerPage, onChangePage: handleChangePage, onChangeItemsPerPage: handleChangeItemsPerPage }))));
};
export const Default = {
    render: args => {
        return React.createElement(NewPaginate, Object.assign({}, args));
    },
};
export const Bottom = {
    render: args => {
        return React.createElement(NewPaginate, Object.assign({}, args, { itemPerPageOptions: [10, 50, 100] }));
    },
};
//# sourceMappingURL=stories.js.map