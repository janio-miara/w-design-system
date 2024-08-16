import { Paragraph } from './index';
const meta = {
    title: 'Components/Paragraph',
    component: Paragraph,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select', options: ['x-small', 'small', 'medium', 'large'] },
            description: 'Select the size of the paragraph',
        },
        as: {
            control: { type: 'select', options: ['span', 'div', 'label', 'p'] },
            description: 'Select the HTML element to render',
        },
        color: {
            control: 'color',
            description: 'Select the color of the text',
        },
        children: {
            control: 'text',
            description: 'Content of the paragraph',
        },
        semiBod: { control: 'boolean', description: 'Use semiBod weight' },
        strongBod: { control: 'boolean', description: 'Use strongBod weight' },
        heavyBod: { control: 'boolean', description: 'Use heavyBod weight' },
    },
};
export default meta;
export const XSmall = {
    args: {
        size: 'x-small',
        color: '#000000',
        children: 'This is an X-small paragraph with LightBod weight.',
    },
};
export const Small = {
    args: {
        size: 'small',
        semiBod: true,
        color: '#333333',
        children: 'This is a small paragraph with SemiBod weight.',
    },
};
export const Medium = {
    args: {
        size: 'medium',
        strongBod: true,
        color: '#666666',
        children: 'This is a medium paragraph with StrongBod weight.',
    },
};
export const Large = {
    args: {
        size: 'large',
        color: '#999999',
        children: 'This is a large paragraph with LightBod weight.',
    },
};
export const CustomElement = {
    args: {
        size: 'medium',
        as: 'label',
        color: '#CC0000',
        children: 'This is a medium paragraph rendered as a label with LightBod weight.',
        strongBod: true,
    },
};
export const AllSizes = {
    args: {
        size: 'medium',
        color: '#000000',
        children: 'This paragraph can be adjusted to any size using the controls.',
    },
};
export const AllWeights = {
    args: {
        size: 'medium',
        color: '#000000',
        children: 'This paragraph weight can be adjusted to LightBod, SemiBod, StrongBod, or HeavyBod.',
    },
};
export const AllElements = {
    args: {
        size: 'medium',
        as: 'div',
        color: '#000000',
        children: 'This paragraph can be rendered as different HTML elements.',
    },
};
//# sourceMappingURL=stories.js.map