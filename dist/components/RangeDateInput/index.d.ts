import React, { HTMLAttributes } from 'react';
export interface RangeDateInputProps extends HTMLAttributes<HTMLDivElement> {
    isRange?: boolean;
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
    startCustomDate: Date | null;
    endCustomDate: Date | null;
    onSelectedCustomRange: (start: Date | null, end: Date | null) => void;
}
export interface Position {
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare const RangeDateInput: React.FC<RangeDateInputProps>;
//# sourceMappingURL=index.d.ts.map