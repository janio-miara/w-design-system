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
import React, { useEffect, useImperativeHandle, useMemo, useRef, useState, } from 'react';
import { chevronDownSVG } from '../../assets/icon';
import { IconWrapper } from '../IconWrapper';
import { Input } from '../Input';
import { theme } from '../Themes';
import { OptionButton, Dropdown, DropdownWrapper, SelectWrapper } from './styles';
const SelectFowardRef = (_a, ref) => {
    var _b;
    var { children, label, leftIcon, onOptionChange, options, placeholder, rightIcon, selectedOption, value } = _a, props = __rest(_a, ["children", "label", "leftIcon", "onOptionChange", "options", "placeholder", "rightIcon", "selectedOption", "value"]);
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);
    useImperativeHandle(ref, () => ({
        setOpen,
    }));
    useEffect(() => {
        if (!open)
            return;
        const handler = (event) => {
            let element = event.target;
            while (element && element !== document.body.parentElement) {
                if (element === wrapperRef.current)
                    break;
                element = element.parentElement;
            }
            if (element === document.body.parentElement) {
                setOpen(false);
            }
        };
        document.addEventListener('click', handler);
        return () => {
            document.removeEventListener('click', handler);
        };
    }, [open]);
    const onOptionClick = (option) => {
        onOptionChange && onOptionChange(option);
        setOpen(false);
    };
    const valueComputed = useMemo(() => {
        if (value)
            return value;
        if (selectedOption) {
            const option = options === null || options === void 0 ? void 0 : options.find(option => option.id === selectedOption);
            return option === null || option === void 0 ? void 0 : option.text;
        }
        return '';
    }, [value, selectedOption, options]);
    return (React.createElement(SelectWrapper, Object.assign({}, props, { ref: wrapperRef }),
        React.createElement(Input, { leftIcon: leftIcon, rightIcon: React.createElement(React.Fragment, null,
                rightIcon,
                React.createElement(IconWrapper, { className: `icon ${open ? 'icon-rotate' : ''}`, src: chevronDownSVG, width: "16px", color: theme.colors.shade30 })), placeholder: placeholder, label: label, value: valueComputed, readonly: true, onClick: () => setOpen(!open) }),
        open && (React.createElement(DropdownWrapper, null,
            React.createElement(Dropdown, null,
                ((_b = options === null || options === void 0 ? void 0 : options.length) !== null && _b !== void 0 ? _b : 0) > 0 && (React.createElement("div", null, options === null || options === void 0 ? void 0 : options.map(option => (React.createElement(OptionButton, { selected: option.id === selectedOption, key: option.id, onClick: () => onOptionClick(option.id) }, option.text))))),
                children)))));
};
export const Select = React.forwardRef(SelectFowardRef);
//# sourceMappingURL=index.js.map