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
export const Button = (_a) => {
    var { variant = 'primary', children, disabled = false, icon, radius, outline, halfLeft, halfRight, fullWidth, size } = _a, props = __rest(_a, ["variant", "children", "disabled", "icon", "radius", "outline", "halfLeft", "halfRight", "fullWidth", "size"]);
    return (React.createElement(ButtonStyled, Object.assign({ variant: variant, disabled: disabled, radius: radius, outline: outline, halfLeft: halfLeft, halfRight: halfRight, fullWidth: fullWidth, size: size }, props),
        icon && (React.createElement(IconWrapper, { src: icon, color: 'white', className: 'buttonRadiusWrapperIcon', width: size !== 'large' ? '20px' : '24px', height: size !== 'large' ? '20px' : '24px' })),
        children));
};
//# sourceMappingURL=index.js.map