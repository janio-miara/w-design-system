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
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { calendarSVG, chevronLeftSVG, chevronRightSVG } from '../../assets/icon';
import { IconWrapper } from '../IconWrapper';
import { Select } from '../Select';
import { theme } from '../Themes';
import { CalendarDay, CalendarDaySelectedBackground, CalendarDayValue, CalendarGrid, CalendarHeader, CalendarWeekDayLabel, } from './styles';
const monthNames = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
];
const weekDays = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];
export const DateRangePicker = (_a) => {
    var _b, _c, _d;
    var { label, options, selectedOption, onSelectedOptionChange, placeholder, onSelectedCustomRange, startCustomDate, endCustomDate, isRange } = _a, props = __rest(_a, ["label", "options", "selectedOption", "onSelectedOptionChange", "placeholder", "onSelectedCustomRange", "startCustomDate", "endCustomDate", "isRange"]);
    const [currentYear, setCurrentYear] = useState(0);
    const [currentMonth, setCurrentMonth] = useState(0);
    const [currentMouseHoverDate, setCurrentMouseHoverDate] = useState(null);
    const selectRef = useRef(null);
    useEffect(() => {
        const date = new Date();
        setCurrentYear(date.getFullYear());
        setCurrentMonth(date.getMonth());
    }, []);
    const days = [];
    const changeMonth = (delta) => {
        const newDate = new Date(currentYear, currentMonth + delta);
        setCurrentYear(newDate.getFullYear());
        setCurrentMonth(newDate.getMonth());
    };
    const onSelectedOptionChangeHandler = (option) => {
        var _a;
        if (onSelectedOptionChange) {
            onSelectedOptionChange(option);
            if (onSelectedCustomRange)
                onSelectedCustomRange(null, null);
            (_a = selectRef.current) === null || _a === void 0 ? void 0 : _a.setOpen(false);
        }
    };
    const onDayClick = (date) => {
        var _a, _b, _c;
        if (onSelectedOptionChange)
            onSelectedOptionChange(null);
        if (!startCustomDate) {
            onSelectedCustomRange && onSelectedCustomRange(date, null);
            currentMouseHoverDate && setCurrentMouseHoverDate(date);
            if (isRange === false)
                (_a = selectRef.current) === null || _a === void 0 ? void 0 : _a.setOpen(false);
        }
        else if (!endCustomDate) {
            let firstDate = startCustomDate;
            let secondDate = date;
            if (firstDate && secondDate && firstDate > secondDate) {
                const temp = firstDate;
                firstDate = secondDate;
                secondDate = temp;
            }
            onSelectedCustomRange && onSelectedCustomRange(firstDate, secondDate);
            (_b = selectRef.current) === null || _b === void 0 ? void 0 : _b.setOpen(false);
        }
        else {
            if (isRange === false)
                (_c = selectRef.current) === null || _c === void 0 ? void 0 : _c.setOpen(false);
            onSelectedCustomRange && onSelectedCustomRange(date, null);
            setCurrentMouseHoverDate(date);
        }
    };
    const onMouseEnter = (date) => {
        if (startCustomDate && !endCustomDate) {
            setCurrentMouseHoverDate(date);
        }
    };
    const onMouseLeave = (date) => { };
    const day = new Date(currentYear, currentMonth, 1);
    for (let i = 0; i < day.getDay(); i++) {
        days.push({ type: 'empty', key: `before-${i}` });
    }
    const todayString = new Date().toDateString();
    let firstDate = startCustomDate;
    let secondDate = endCustomDate !== null && endCustomDate !== void 0 ? endCustomDate : currentMouseHoverDate;
    if (firstDate && secondDate && firstDate > secondDate) {
        const temp = firstDate;
        firstDate = secondDate;
        secondDate = temp;
    }
    while (day.getMonth() === currentMonth) {
        const isSelected = (_b = (firstDate && secondDate && day >= firstDate && day <= secondDate)) !== null && _b !== void 0 ? _b : false;
        days.push({
            type: 'day',
            value: day.getDate(),
            today: day.toDateString() === todayString,
            selected: isSelected,
            date: new Date(day),
            isFirstSelected: (_c = (firstDate && firstDate.toDateString() === day.toDateString())) !== null && _c !== void 0 ? _c : false,
            isLastSelected: (_d = (secondDate && secondDate.toDateString() === day.toDateString())) !== null && _d !== void 0 ? _d : false,
        });
        day.setDate(day.getDate() + 1);
    }
    const value = useMemo(() => {
        if (selectedOption !== null)
            return '';
        if (!firstDate && !secondDate)
            return '';
        if (firstDate && !secondDate)
            return firstDate.toLocaleDateString();
        if (secondDate && (firstDate === null || firstDate === void 0 ? void 0 : firstDate.toLocaleDateString()) === secondDate.toLocaleDateString())
            return firstDate.toLocaleDateString();
        if (firstDate && secondDate)
            return `${firstDate.toLocaleDateString()} - ${secondDate.toLocaleDateString()}`;
        return '';
    }, [selectedOption, firstDate, secondDate]);
    placeholder = placeholder !== null && placeholder !== void 0 ? placeholder : 'Selecione um período';
    const { customOption, optionComputed } = useMemo(() => {
        if (options && options.length > 0) {
            const customOptionId = Math.max(...options.map(option => { var _a; return (_a = option.id) !== null && _a !== void 0 ? _a : 0; })) + 1;
            const customOption = {
                text: 'Período Personalizado',
                id: customOptionId,
            };
            const optionComputed = [...options, customOption];
            return { customOption, optionComputed };
        }
        return { customOption: null, optionComputed: [] };
    }, [options]);
    return (React.createElement(Select, Object.assign({ dropDownWidth: "284px", ref: selectRef, placeholder: placeholder, label: label, value: value, leftIcon: React.createElement(IconWrapper, { className: "icon", src: calendarSVG, width: "20px", height: "20px", color: theme.colors.shade30 }), options: optionComputed, selectedOption: selectedOption !== null && selectedOption !== void 0 ? selectedOption : (firstDate ? customOption : null), onOptionChange: onSelectedOptionChangeHandler }, props),
        React.createElement(CalendarHeader, null,
            React.createElement(IconWrapper, { className: "icon", src: chevronLeftSVG, width: "14px", onClick: () => changeMonth(-1) }),
            monthNames[currentMonth],
            " ",
            currentYear,
            React.createElement(IconWrapper, { className: "icon", src: chevronRightSVG, width: "14px", onClick: () => changeMonth(1) })),
        React.createElement(CalendarGrid, null,
            weekDays.map(weekDay => (React.createElement(CalendarWeekDayLabel, { key: weekDay }, weekDay))),
            days.map(day => {
                if (day.type === 'empty') {
                    return React.createElement("div", { key: day.key });
                }
                return (React.createElement(CalendarDay, { isFirstSelected: day.isFirstSelected, isLastSelected: day.isLastSelected, key: day.value, today: day.today, onClick: () => onDayClick(day.date), onMouseEnter: () => onMouseEnter(day.date), onMouseLeave: () => onMouseLeave(day.date) },
                    React.createElement(CalendarDaySelectedBackground, { isFirstSelected: day.isFirstSelected, isLastSelected: day.isLastSelected, selected: day.selected, today: day.today }),
                    React.createElement(CalendarDayValue, null, day.value)));
            }))));
};
//# sourceMappingURL=index.js.map