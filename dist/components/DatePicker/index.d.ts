import React, { HTMLAttributes } from 'react';
export interface DatePickerProps extends HTMLAttributes<HTMLDivElement> {
    placeholder?: string;
    label: string;
    options?: {
        text: string;
        id: number;
    }[];
    selectedOption?: number | null;
    readonly?: boolean;
    disabled?: boolean;
    onSelectedOptionChange?: (option: number | null) => void;
    customDate: Date | null;
    onSelectedCustomDate?: (date: Date | null) => void;
}
export declare const DatePicker: React.FC<DatePickerProps>;
//# sourceMappingURL=index.d.ts.map