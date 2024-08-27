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
import { DatePicker } from './index';
import React from 'react';
const meta = {
    title: 'Components/DatePicker',
    component: DatePicker,
    tags: ['autodocs'],
    argTypes: {
        placeholder: { control: 'text' },
        label: { control: 'text' },
        readonly: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
};
export default meta;
const ComponentWrapper = (_a) => {
    var { defaultOptions } = _a, args = __rest(_a, ["defaultOptions"]);
    const [selectedOption, setSelectOption] = React.useState(null);
    const [customDate, setCustomDate] = React.useState(null);
    const onSelectedOptionChange = (option) => {
        setSelectOption(option);
        if (option == null) {
            setCustomDate(null);
            return;
        }
        const date = new Date();
        date.setDate(date.getDate() + (option === null || option === void 0 ? void 0 : option.id));
        setCustomDate(date);
    };
    return (React.createElement(DatePicker, Object.assign({ selectedOption: selectedOption, customDate: customDate, onSelectedOptionChange: onSelectedOptionChange, onSelectedCustomDate: date => setCustomDate(date), options: defaultOptions !== null && defaultOptions !== void 0 ? defaultOptions : [
            {
                text: 'Ontem',
                id: -1,
            },
            {
                text: 'Hoje',
                id: 0,
            },
            {
                text: 'Amanhã',
                id: 1,
            },
        ] }, args)));
};
export const SelecionarDataDeDatas = {
    render: args => React.createElement(ComponentWrapper, { label: "Data da Disputa", placeholder: "Placeholder" }),
};
export const SelecionarDatasSimples = {
    render: args => React.createElement(ComponentWrapper, { defaultOptions: [] }),
};
//# sourceMappingURL=stories.js.map