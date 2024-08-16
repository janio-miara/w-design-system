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
import styled from 'styled-components';
const sizes = {
    'x-small': '12px',
    small: '14px',
    medium: '16px',
    large: '18px',
};
const weights = {
    lightBod: 400,
    semiBod: 600,
    strongBod: 700,
    heavyBod: 800,
};
const getFontWeight = (props) => {
    if (props.heavyBod)
        return weights.heavyBod;
    if (props.strongBod)
        return weights.strongBod;
    if (props.semiBod)
        return weights.semiBod;
    return weights.lightBod;
};
const ParagraphStyled = styled.p `
  margin: 0;
  padding: 0;
  font-size: ${({ size = 'small' }) => sizes[size]};
  font-weight: ${props => getFontWeight(props)};
  line-height: 140%;
  font-family: 'Nunito Sans', sans-serif;
  color: ${({ color = 'inherit' }) => color};
  text-transform: ${({ textTransform = 'none' }) => textTransform};
`;
export const Paragraph = (_a) => {
    var { size = 'small', as = 'p', color = 'inherit', textTransform = 'none', children } = _a, props = __rest(_a, ["size", "as", "color", "textTransform", "children"]);
    return (React.createElement(ParagraphStyled, Object.assign({ as: as, size: size, color: color, textTransform: textTransform }, props), children));
};
//# sourceMappingURL=index.js.map