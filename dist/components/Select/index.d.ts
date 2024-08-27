import React, { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
export interface SelectProps<T extends {
    text: string;
    id: number;
    icon?: ReactNode;
} = {
    text: string;
    id: number;
    icon?: ReactNode;
}> extends HTMLAttributes<HTMLDivElement> {
    disabled?: boolean;
    label?: string;
    leftIcon?: ReactNode;
    onOptionChange?: (option: T | null) => void;
    options?: T[];
    placeholder?: string;
    rightIcon?: ReactNode;
    selectedOption?: T | null;
    value?: string;
    dropDownTop?: boolean;
    dropDownWidth?: string;
}
export interface SelectRef {
    setOpen(open: boolean): void;
}
export declare const Select: <T extends {
    text: string;
    id: number;
    icon?: ReactNode;
}>(props: PropsWithChildren<SelectProps<T>> & {
    ref?: React.ForwardedRef<SelectRef>;
}) => React.ReactElement;
//# sourceMappingURL=index.d.ts.map