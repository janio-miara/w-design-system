import React from 'react';
import { Container } from './styles';
import { IconWrapper } from '../IconWrapper';
import { chevronLeftSVG, chevronRightSVG } from '../../assets/icon';
export const Paginate = ({ currentPage, itemCount, onChangePage, itemsPerPage, onChangeItemsPerPage, }) => {
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
    const itemPerPageOptions = Array.from(new Set([10, 20, 50, 100, itemsPerPage]));
    return (React.createElement(Container, null,
        React.createElement("ul", { className: "pagination" },
            React.createElement(IconWrapper, { className: currentPage === 1 ? 'icon-disabled' : 'icon', src: chevronLeftSVG, width: "14px", onClick: () => onChangePage(currentPage - 1) }),
            pages.map((page, index) => {
                if (page === 'elipsis') {
                    return React.createElement("li", { key: `elipsis-${index}` }, "...");
                }
                return (React.createElement("li", { key: page, className: page === currentPage ? 'page-active' : 'page', onClick: () => onChangePage(page) }, page));
            }),
            React.createElement(IconWrapper, { className: currentPage === pageCount ? 'icon-disabled' : 'icon', src: chevronRightSVG, width: "14px", onClick: () => onChangePage(currentPage + 1) })),
        React.createElement("div", { className: "items-per-page-wrapper" },
            React.createElement("div", { className: "item-per-page" }, "Itens por pa\u0301gina"),
            React.createElement("select", { value: itemsPerPageValue, onChange: e => {
                    onChangeItemsPerPage(Number(e.target.value));
                } }, itemPerPageOptions.map((item, index) => {
                return (React.createElement("option", { key: index, value: item }, item));
            })),
            React.createElement("div", { className: "items-per-page-selected" },
                minItem,
                " - ",
                maxItem,
                " de ",
                itemCount))));
};
//# sourceMappingURL=index.js.map