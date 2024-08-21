import React, { HTMLAttributes } from 'react';
export interface DateInputProps extends HTMLAttributes<HTMLDivElement> {
    placeholder?: string;
    label: string;
    defaultOptions?: {
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
export declare const DateInput: React.FC<DateInputProps>;
//# sourceMappingURL=index.d.ts.map