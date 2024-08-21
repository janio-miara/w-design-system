import type { Position } from '.';
export declare const InputWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const StyledInput: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, never>> & string;
export declare const StyledLabel: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, never>> & string;
export interface StyledInputContentProps {
    disabled?: boolean;
}
export declare const StyledInputContent: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, StyledInputContentProps>> & string;
export interface StyledInputBorderProps {
    label: Position;
    content: Position;
}
/**
 * O clip-path faz com que o elemento fique transparente na região do label
 * @see https://stackoverflow.com/questions/3742479/how-to-cut-a-hole-in-an-svg-rectangle
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
 */
export declare const StyledInputBorder: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, StyledInputBorderProps>> & string;
//# sourceMappingURL=styles.d.ts.map