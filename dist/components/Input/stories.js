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
import { Input } from './index';
import { useState } from 'react';
import React from 'react';
import { IconWrapper } from '../IconWrapper';
import { editSVG } from '../../assets/icon';
import { theme } from '../Themes';
const meta = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        placeholder: { control: 'text' },
        label: { control: 'text' },
        value: { control: 'text' },
        readonly: { control: 'boolean' },
        disabled: { control: 'boolean' },
        onChange: { action: 'change' },
        onInput: { action: 'input' },
        onKeyDown: { action: 'keydown' },
        onKeyUp: { action: 'keyup' },
    },
};
export default meta;
export const Playground = {
    args: {
        label: 'Label',
        placeholder: 'placeholder',
    },
};
const ComponentWrapper = (_a) => {
    var args = __rest(_a, []);
    const [value, setValue] = useState('');
    return React.createElement(Input, Object.assign({}, args, { value: value, onChange: e => setValue(e.target.value) }));
};
export const Default = {
    render: args => React.createElement(ComponentWrapper, Object.assign({}, args)),
};
export const Disabled = {
    render: args => React.createElement(ComponentWrapper, Object.assign({}, args, { placeholder: "Disabled", label: "Disabled", disabled: true })),
};
export const DisabledWithIcon = {
    render: args => (React.createElement(ComponentWrapper, Object.assign({}, args, { iconLeft: React.createElement(IconWrapper, { src: editSVG, width: "20px", color: theme.colors.shade30 }), placeholder: "Disabled", label: "Disabled", disabled: true }))),
};
//# sourceMappingURL=stories.js.map