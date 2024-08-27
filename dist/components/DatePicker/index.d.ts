import React, { HTMLAttributes } from 'react';
import { DateRangePickerProps } from '../DateRangePicker';
type GetElementType<T> = T extends (infer U)[] ? U : never;
export interface DatePickerProps<T extends GetElementType<DateRangePickerProps['options']> = GetElementType<DateRangePickerProps['options']>> extends HTMLAttributes<HTMLDivElement> {
    placeholder?: string;
    label: string;
    options?: T[];
    selectedOption?: T | null;
    readonly?: boolean;
    disabled?: boolean;
    onSelectedOptionChange?: (option: T | null) => void;
    customDate: Date | null;
    onSelectedCustomDate?: (date: Date | null) => void;
}
export declare const DatePicker: <T extends GetElementType<DateRangePickerProps["options"]> = {
    text: string;
    id: number;
    icon?: React.ReactNode;
}>({ onSelectedCustomDate, customDate, ...props }: DatePickerProps<T>) => React.JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map