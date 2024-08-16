import { theme } from '../Themes';
import { Title } from './index';
const sizes = theme.title;
const meta = {
    title: 'Components/Title',
    component: Title,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            control: { type: 'select', options: ['medium', 'large'] },
            description: 'Font size of the title',
        },
        bold: {
            control: 'boolean',
            description: 'Apply bold font weight',
        },
        as: {
            control: { type: 'select', options: ['h1', 'h2', 'h3'] },
            description: 'HTML element to render',
        },
        color: {
            control: 'color',
            description: 'Font color of the title',
        },
        children: {
            control: 'text',
            description: 'Content of the title',
        },
    },
};
export default meta;
export const LargeBoldTitle = {
    args: {
        size: 'large',
        bold: true,
        as: 'h1',
        color: '#1A3D7F', // Example color
        children: 'Large Bold Title',
    },
};
export const MediumTitle = {
    args: {
        size: 'medium',
        bold: false,
        as: 'h2',
        color: '#025FDE', // Example color
        children: 'Medium Title',
    },
};
export const CustomColorTitle = {
    args: {
        size: 'large',
        bold: true,
        as: 'h3',
        color: '#FF5733', // Custom color
        children: 'Custom Color Title',
    },
};
//# sourceMappingURL=stories.js.map