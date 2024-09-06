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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        const margin = 30;
        setContentPosition({
            x: ((_b = (_a = contentRef.current) === null || _a === void 0 ? void 0 : _a.offsetLeft) !== null && _b !== void 0 ? _b : 0) - margin,
            y: ((_d = (_c = contentRef.current) === null || _c === void 0 ? void 0 : _c.offsetTop) !== null && _d !== void 0 ? _d : 0) - margin,
            width: ((_f = (_e = contentRef.current) === null || _e === void 0 ? void 0 : _e.offsetWidth) !== null && _f !== void 0 ? _f : 0) + margin * 2,
            height: ((_h = (_g = contentRef.current) === null || _g === void 0 ? void 0 : _g.offsetHeight) !== null && _h !== void 0 ? _h : 0) + margin * 2,
        });
        setLabelPosition({
            x: (_k = (_j = labelRef.current) === null || _j === void 0 ? void 0 : _j.offsetLeft) !== null && _k !== void 0 ? _k : 0,
            y: (_m = (_l = labelRef.current) === null || _l === void 0 ? void 0 : _l.offsetTop) !== null && _m !== void 0 ? _m : 0,
            width: (_p = (_o = labelRef.current) === null || _o === void 0 ? void 0 : _o.offsetWidth) !== null && _p !== void 0 ? _p : 0,
            height: (_r = (_q = labelRef.current) === null || _q === void 0 ? void 0 : _q.offsetHeight) !== null && _r !== void 0 ? _r : 0,
        });
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
    }, [updatePositions]);
    useEffect(() => {
        updatePositions();
    }, [label, updatePositions]);
    return (React.createElement(InputWrapper, Object.assign({}, props),
        React.createElement(StyledInputContent, { disabled: disabled, ref: contentRef, onClick: onClickHandler },
            React.createElement(StyledInputBorder, { content: contentPosition, label: labelPosition }),
            React.createElement(StyledLabel, { htmlFor: id, ref: labelRef }, label),
            leftIcon,
            React.createElement(StyledInput, { id: id, disabled: disabled, value: value, placeholder: props.placeholder, ref: inputRef, onChange: onChange, onInput: onInput, onKeyDown: onKeyDown, onKeyUp: onKeyUp, readOnly: readonly }),
            rightIcon)));
};
//# sourceMappingURL=index.js.map