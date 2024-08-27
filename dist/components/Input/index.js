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
import React, { useCallback, useEffect, useId, useRef } from 'react';
import { InputWrapper, StyledInput, StyledInputBorder, StyledInputContent, StyledLabel } from './styles';
export const Input = (_a) => {
    var { label, readonly, onChange, onInput, value, onKeyDown, disabled, onKeyUp, leftIcon, rightIcon } = _a, props = __rest(_a, ["label", "readonly", "onChange", "onInput", "value", "onKeyDown", "disabled", "onKeyUp", "leftIcon", "rightIcon"]);
    const id = useId();
    const [labelPosition, setLabelPosition] = React.useState({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    });
    const [contentPosition, setContentPosition] = React.useState({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    });
    const contentRef = useRef(null);
    const labelRef = useRef(null);
    const inputRef = useRef(null);
    const updatePositions = useCallback(() => {
        if (contentRef.current) {
            setContentPosition({
                x: 0,
                y: 0,
                width: contentRef.current.offsetWidth,
                height: contentRef.current.offsetHeight,
            });
        }
        if (labelRef.current) {
            setLabelPosition({
                x: labelRef.current.offsetLeft,
                y: labelRef.current.offsetTop,
                width: labelRef.current.offsetWidth,
                height: labelRef.current.offsetHeight,
            });
        }
    }, []);
    const onClickHandler = () => {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    useEffect(() => {
        const handler = () => updatePositions();
        let resizeObserver = null;
        if (ResizeObserver) {
            resizeObserver = new ResizeObserver(handler);
            if (contentRef.current) {
                resizeObserver.observe(contentRef.current);
            }
            if (labelRef.current) {
                resizeObserver.observe(labelRef.current);
            }
        }
        else {
            window.addEventListener('resize', handler);
        }
        return () => {
            if (resizeObserver) {
                resizeObserver.disconnect();
            }
            else {
                window.removeEventListener('resize', handler);
            }
        };
    }, []);
    useEffect(() => {
        updatePositions();
    }, [label]);
    return (React.createElement(InputWrapper, Object.assign({}, props),
        React.createElement(StyledInputContent, { disabled: disabled, ref: contentRef, onClick: onClickHandler },
            React.createElement(StyledInputBorder, { content: contentPosition, label: labelPosition }),
            React.createElement(StyledLabel, { htmlFor: id, ref: labelRef }, label),
            leftIcon,
            React.createElement(StyledInput, { id: id, disabled: disabled, value: value, placeholder: props.placeholder, ref: inputRef, onChange: onChange, onInput: onInput, onKeyDown: onKeyDown, onKeyUp: onKeyUp, readOnly: readonly }),
            rightIcon)));
};
//# sourceMappingURL=index.js.map