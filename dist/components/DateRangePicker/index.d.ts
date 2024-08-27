import React, { HTMLAttributes } from 'react';
import { SelectProps } from '../Select';
type GetElementType<T> = T extends (infer U)[] ? U : never;
export interface DateRangePickerProps<T extends GetElementType<SelectProps['options']> = GetElementType<SelectProps['options']>> extends HTMLAttributes<HTMLDivElement> {
    isRange?: boolean;
    placeholder?: string;
    label?: string;
    options?: T[];
    selectedOption?: T | null;
    readonly?: boolean;
    disabled?: boolean;
    onSelectedOptionChange?: (option: T | null) => void;
    startCustomDate: Date | null;
    endCustomDate: Date | null;
    onSelectedCustomRange: (start: Date | null, end: Date | null) => void;
}
export declare const DateRangePicker: <T extends GetElementType<SelectProps["options"]>>({ label, options, selectedOption, onSelectedOptionChange, placeholder, onSelectedCustomRange, startCustomDate, endCustomDate, isRange, ...props }: DateRangePickerProps<T>) => React.JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map