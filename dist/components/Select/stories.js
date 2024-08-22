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
import { Select } from './index';
import React from 'react';
const meta = {
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
        placeholder: { control: 'text' },
        label: { control: 'text' },
        disabled: { control: 'boolean' },
        selectedOption: { control: 'number' },
        onOptionChange: { action: 'selectedOptionChange' },
    },
};
export default meta;
const ComponentWrapper = (_a) => {
    var { options } = _a, args = __rest(_a, ["options"]);
    const [selectedOption, setSelectOption] = React.useState(null);
    return (React.createElement(Select, Object.assign({ selectedOption: selectedOption, onOptionChange: option => setSelectOption(option), options: options !== null && options !== void 0 ? options : [
            {
                text: 'Opção 1',
                id: 1,
            },
            {
                text: 'Opção 2',
                id: 2,
            },
            {
                text: 'Opção 3',
                id: 3,
            },
        ] }, args)));
};
export const Default = {
    render: args => React.createElement(ComponentWrapper, { label: "Label", placeholder: "Placeholder" }),
};
//# sourceMappingURL=stories.js.map