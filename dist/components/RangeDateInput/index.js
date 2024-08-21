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
import { CalendarDay, CalendarGrid, CalendarHeader, CalendarWeekDayLabel, Dropdown, DropdownWrapper, DefaultOptionButton, InputDateWrapper, CalendarDaySelectedBackground, CalendarDayValue, } from './styles';
import { calendarSVG, chevronDownSVG, chevronLeftSVG, chevronRightSVG } from '../../assets/icon';
import { IconWrapper } from '../IconWrapper';
import { Input } from '../Input';
import { theme } from '../Themes';
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
export const RangeDateInput = (_a) => {
    var _b, _c;
    var { label, defaultOptions, selectedOption, onSelectedOptionChange, placeholder, onSelectedCustomRange, startCustomDate, endCustomDate, isRange } = _a, props = __rest(_a, ["label", "defaultOptions", "selectedOption", "onSelectedOptionChange", "placeholder", "onSelectedCustomRange", "startCustomDate", "endCustomDate", "isRange"]);
    const [currentYear, setCurrentYear] = useState(0);
    const [currentMonth, setCurrentMonth] = useState(0);
    const [currentMouseHoverDate, setCurrentMouseHoverDate] = useState(null);
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);
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
        if (onSelectedOptionChange) {
            onSelectedOptionChange(option);
            if (onSelectedCustomRange)
                onSelectedCustomRange(null, null);
            setOpen(false);
        }
    };
    const onDayClick = (date) => {
        if (onSelectedOptionChange)
            onSelectedOptionChange(null);
        if (!startCustomDate) {
            onSelectedCustomRange && onSelectedCustomRange(date, null);
            currentMouseHoverDate && setCurrentMouseHoverDate(date);
            if (isRange === false)
                setOpen(false);
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
            setOpen(false);
        }
        else {
            if (isRange === false)
                setOpen(false);
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
        });
        day.setDate(day.getDate() + 1);
    }
    const value = useMemo(() => {
        var _a, _b;
        if (selectedOption !== null)
            return (_b = (_a = defaultOptions === null || defaultOptions === void 0 ? void 0 : defaultOptions.find(option => option.id === selectedOption)) === null || _a === void 0 ? void 0 : _a.text) !== null && _b !== void 0 ? _b : '';
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
    useEffect(() => {
        if (!open)
            return;
        const handler = (event) => {
            let element = event.target;
            console.log(element);
            while (element && element !== document.body.parentElement) {
                if (element === wrapperRef.current)
                    break;
                element = element.parentElement;
            }
            if (element === document.body.parentElement) {
                setOpen(false);
            }
        };
        document.addEventListener('click', handler);
        return () => {
            document.removeEventListener('click', handler);
        };
    }, [open]);
    placeholder = placeholder !== null && placeholder !== void 0 ? placeholder : 'Selecione um período';
    return (React.createElement(InputDateWrapper, Object.assign({}, props, { ref: wrapperRef }),
        React.createElement(Input, { iconLeft: React.createElement(IconWrapper, { className: "icon", src: calendarSVG, width: "20px", height: "20px", color: theme.colors.shade30 }), iconRight: React.createElement(IconWrapper, { className: `icon ${open ? 'icon-rotate' : ''}`, src: chevronDownSVG, width: "16px", color: theme.colors.shade30 }), placeholder: placeholder, label: label, value: value, readonly: true, onClick: () => setOpen(!open) }),
        open && (React.createElement(DropdownWrapper, null,
            React.createElement(Dropdown, null,
                ((_c = defaultOptions === null || defaultOptions === void 0 ? void 0 : defaultOptions.length) !== null && _c !== void 0 ? _c : 0) > 0 && (React.createElement("div", null, defaultOptions === null || defaultOptions === void 0 ? void 0 :
                    defaultOptions.map(option => (React.createElement(DefaultOptionButton, { selected: option.id === selectedOption, key: option.id, onClick: () => onSelectedOptionChangeHandler(option.id) }, option.text))),
                    React.createElement(DefaultOptionButton, { selected: !!firstDate }, "Per\u00EDodo Personalizado"))),
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
                        return (React.createElement(CalendarDay, { key: day.value, today: day.today, onClick: () => onDayClick(day.date), onMouseEnter: () => onMouseEnter(day.date), onMouseLeave: () => onMouseLeave(day.date) },
                            React.createElement(CalendarDaySelectedBackground, { selected: day.selected, today: day.today }),
                            React.createElement(CalendarDayValue, null, day.value)));
                    })))))));
};
//# sourceMappingURL=index.js.map