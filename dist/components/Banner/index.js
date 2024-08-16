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
import { BannerStyled } from './styles';
import { docCheckSVG, alertSVG, commentSVG, closeSVG } from '../../assets/icon';
import { IconWrapper } from '../IconWrapper';
import { Paragraph } from '../Paragraph';
import { theme } from '../Themes';
const { colors: { cyan40, mint40, honey40, red40, shade40, shade30 }, } = theme;
export const Banner = (_a) => {
    var { title, onClick, variant, subTitle } = _a, props = __rest(_a, ["title", "onClick", "variant", "subTitle"]);
    const searchIcon = () => {
        switch (variant) {
            case 'notice':
                return { icon: commentSVG, color: cyan40 };
            case 'success':
                return { icon: docCheckSVG, color: mint40 };
            case 'warning':
                return { icon: alertSVG, color: honey40 };
            case 'danger':
                return { icon: alertSVG, color: red40 };
            default:
                return { icon: commentSVG, color: cyan40 };
        }
    };
    const { icon, color } = searchIcon();
    return (React.createElement(BannerStyled, Object.assign({ variant: variant }, props),
        React.createElement("div", { className: 'bannerWrapper' },
            React.createElement(IconWrapper, { src: icon, className: 'buttonRadiusWrapperIcon' }),
            React.createElement("span", null,
                React.createElement(Paragraph, { size: 'medium', color: color }, title),
                subTitle && (React.createElement(Paragraph, { size: 'small', color: shade40 }, subTitle)))),
        React.createElement(IconWrapper, { src: closeSVG, width: '14px', height: '14px', color: shade30, onClick: onClick })));
};
//# sourceMappingURL=index.js.map