import React from 'react';
import { Container } from './styles';
import { IconWrapper } from '../IconWrapper';
import { chevronLeftSVG, chevronRightSVG } from '../../assets/icon';
import { Select } from '../Select';
export const Paginate = ({ currentPage, itemCount, onChangePage, itemsPerPage, onChangeItemsPerPage, itemPerPageOptions = [], dropDownTop, }) => {
    // Se itemsPerPage for undefined, o valor default e 20
    let itemsPerPageValue = itemsPerPage || 20;
    const pageCount = Math.ceil(itemCount / itemsPerPageValue);
    const pages = [];
    // o interval indica quantas paginas mostrar antes e depois da pagina atual
    const interval = 2;
    // Adiciona a primeira pagina
    if (pageCount > 0 && currentPage - interval > 1) {
        pages.push(1);
    }
    // Adiciona as paginas entre a primeira e a ultima do intervalo
    const start = Math.max(currentPage - interval, 1);
    const end = Math.min(currentPage + interval, pageCount);
    if (start > 2) {
        pages.push('elipsis');
    }
    for (let i = start; i <= end; i++) {
        pages.push(i);
    }
    if (end < pageCount - 1) {
        pages.push('elipsis');
    }
    if (pageCount > currentPage + interval) {
        pages.push(pageCount);
    }
    const minItem = (currentPage - 1) * itemsPerPageValue + 1;
    const maxItem = Math.min(currentPage * itemsPerPageValue, itemCount);
    const itemPerPageOptionsCopy = Array.from(itemPerPageOptions);
    if (itemsPerPage)
        itemPerPageOptionsCopy.push(itemsPerPage);
    const itemPerPageOptionsSorted = Array.from(new Set(itemPerPageOptionsCopy)).sort((a, b) => a - b);
    return (React.createElement(Container, null,
        React.createElement("ul", { className: "pagination" },
            React.createElement(IconWrapper, { className: currentPage === 1 ? 'icon-disabled' : 'icon', src: chevronLeftSVG, width: "14px", onClick: () => currentPage !== 1 && onChangePage(currentPage - 1) }),
            pages.map((page, index) => {
                if (page === 'elipsis') {
                    return React.createElement("li", { key: `elipsis-${index}` }, "...");
                }
                return (React.createElement("li", { key: page, className: page === currentPage ? 'page-active' : 'page', onClick: () => onChangePage(page) }, page));
            }),
            React.createElement(IconWrapper, { className: currentPage === pageCount ? 'icon-disabled' : 'icon', src: chevronRightSVG, width: "14px", onClick: () => currentPage !== pageCount && onChangePage(currentPage + 1) })),
        React.createElement("div", { className: "items-per-page-wrapper" },
            React.createElement("div", { className: "item-per-page" }, "Itens por pa\u0301gina"),
            React.createElement(Select, { className: "select", dropDownTop: dropDownTop !== false, value: itemsPerPageValue.toString(), onOptionChange: option => {
                    option && onChangeItemsPerPage(option.id);
                }, disabled: itemPerPageOptions.length <= 1, options: itemPerPageOptionsSorted.map(count => ({
                    id: count,
                    text: count === null || count === void 0 ? void 0 : count.toString(),
                })) }),
            React.createElement("div", { className: "items-per-page-selected" },
                minItem,
                " - ",
                maxItem,
                " de ",
                itemCount))));
};
//# sourceMappingURL=index.js.map