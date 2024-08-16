import React from 'react';
interface ParagraphProps {
    size?: 'x-small' | 'small' | 'medium' | 'large';
    as?: 'span' | 'div' | 'label' | 'p';
    color?: string;
    textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
    children: React.ReactNode;
    lightBod?: boolean;
    semiBod?: boolean;
    strongBod?: boolean;
    heavyBod?: boolean;
}
export declare const Paragraph: React.FC<ParagraphProps>;
export {};
//# sourceMappingURL=index.d.ts.map