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
import { RangeDateInput } from './index';
import React from 'react';
const meta = {
    title: 'Components/RangeDateInput',
    component: RangeDateInput,
    tags: ['autodocs'],
    argTypes: {
        placeholder: { control: 'text' },
        label: { control: 'text' },
        readonly: { control: 'boolean' },
        disabled: { control: 'boolean' },
        selectedOption: { control: 'number' },
        startCustomDate: { control: 'date' },
        endCustomDate: { control: 'date' },
        onSelectedOptionChange: { action: 'selectedOptionChange' },
        onSelectedCustomRange: { action: 'selectedCustomRange' },
    },
};
export default meta;
const ComponentWrapper = (_a) => {
    var { defaultOptions } = _a, args = __rest(_a, ["defaultOptions"]);
    const [selectedOption, setSelectOption] = React.useState(null);
    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);
    return (React.createElement(RangeDateInput, Object.assign({ selectedOption: selectedOption, startCustomDate: startDate, endCustomDate: endDate, onSelectedCustomRange: (start, end) => {
            setStartDate(start);
            setEndDate(end);
        }, onSelectedOptionChange: option => setSelectOption(option), defaultOptions: defaultOptions !== null && defaultOptions !== void 0 ? defaultOptions : [
            {
                text: 'Últimos 30 dias',
                id: 30,
            },
            {
                text: 'Últimos 60 dias',
                id: 60,
            },
            {
                text: 'Últimos 90 dias',
                id: 90,
            },
        ] }, args)));
};
export const SelecionarIntervaloDeDatas = {
    render: args => React.createElement(ComponentWrapper, { label: "Per\u00EDodo da Disputa", placeholder: "Placeholder" }),
};
export const SelecionarIntervaloDeDatasSimples = {
    render: args => React.createElement(ComponentWrapper, { defaultOptions: [] }),
};
//# sourceMappingURL=stories.js.map