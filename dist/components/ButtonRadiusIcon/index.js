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
import { IconWrapper } from '../IconWrapper';
import { ButtonStyled } from './styles';
export const ButtonRadiusIcon = (_a) => {
    var { variant = 'primary', children, disabled = false, icon, subTitle, size } = _a, props = __rest(_a, ["variant", "children", "disabled", "icon", "subTitle", "size"]);
    return (React.createElement(ButtonStyled, Object.assign({ variant: variant, disabled: disabled, subTitle: subTitle }, props, { size: size }),
        React.createElement("span", { className: 'buttonRadiusIconContainer' },
            children,
            " ",
            subTitle && React.createElement("p", { className: 'buttonRadiusIconTitle' }, subTitle)),
        React.createElement("span", { className: 'buttonRadiusIconWrapperIcon' },
            React.createElement(IconWrapper, { src: icon || '', color: 'white', className: 'buttonRadiusWrapperIcon', width: size !== 'large' ? '20px' : '24px', height: size !== 'large' ? '20px' : '24px' }))));
};
//# sourceMappingURL=index.js.map