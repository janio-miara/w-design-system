import React, { HTMLAttributes, ReactNode } from 'react';
export interface SelectProps extends HTMLAttributes<HTMLDivElement> {
    disabled?: boolean;
    label?: string;
    leftIcon?: ReactNode;
    onOptionChange?: (option: number | null) => void;
    options?: {
        text: string;
        id: number;
    }[];
    placeholder?: string;
    rightIcon?: ReactNode;
    selectedOption?: number | null;
    value?: string;
}
export interface SelectRef {
    setOpen(open: boolean): void;
}
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<SelectRef>>;
//# sourceMappingURL=index.d.ts.map