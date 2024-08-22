import React, { HTMLAttributes } from 'react';
export interface DateRangePickerProps extends HTMLAttributes<HTMLDivElement> {
    isRange?: boolean;
    placeholder?: string;
    label?: string;
    options?: {
        text: string;
        id: number;
    }[];
    selectedOption?: number | null;
    readonly?: boolean;
    disabled?: boolean;
    onSelectedOptionChange?: (option: number | null) => void;
    startCustomDate: Date | null;
    endCustomDate: Date | null;
    onSelectedCustomRange: (start: Date | null, end: Date | null) => void;
}
export declare const DateRangePicker: React.FC<DateRangePickerProps>;
//# sourceMappingURL=index.d.ts.map