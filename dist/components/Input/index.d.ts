import React, { HTMLAttributes, ReactNode } from 'react';
export interface InputProps extends HTMLAttributes<HTMLDivElement> {
    placeholder?: string;
    iconLeft?: ReactNode;
    label: string;
    value?: string;
    readonly?: boolean;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    iconRight?: ReactNode;
}
export interface Position {
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare const Input: React.FC<InputProps>;
//# sourceMappingURL=index.d.ts.map