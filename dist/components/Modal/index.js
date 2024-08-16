var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import ReactDOM from 'react-dom';
import { closeSVG } from '../../assets/icon';
import { theme } from '../Themes';
import { Title } from '../Title';
import { IconWrapper } from '../IconWrapper';
import { ModalContainer, Overlay } from './styles';
const { colors: { cyan50, shade30 }, } = theme;
export const Modal = (_a) => {
    var { children, onClose, footer } = _a, props = __rest(_a, ["children", "onClose", "footer"]);
    return ReactDOM.createPortal(React.createElement(React.Fragment, null,
        React.createElement(Overlay, { onClick: onClose }),
        React.createElement(ModalContainer, Object.assign({}, props),
            React.createElement("div", { className: 'modalHeader' },
                React.createElement(Title, { size: 'medium', bold: true, color: cyan50 }, "Enviar"),
                React.createElement(IconWrapper, { src: closeSVG, width: '14px', height: '14px', color: shade30, onClick: onClose })),
            React.createElement("div", { className: 'modalContainer' }, children),
            React.createElement("div", { className: 'modalFooter' }, footer))), document.body);
};
//# sourceMappingURL=index.js.map