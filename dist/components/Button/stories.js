import exampleIcon from '../../assets/icon/image.svg';
import { Button } from './index';
import { VARIANTS_TYPES } from '../../utils/constanst';
const meta = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: VARIANTS_TYPES,
            },
        },
        disabled: {
            control: 'boolean',
        },
        icon: {
            control: 'object',
            options: [exampleIcon],
            description: exampleIcon,
        },
        onClick: { action: 'clicked' },
    },
};
export default meta;
export const Playground = {
    args: {
        variant: 'primary',
        children: 'ButtonPlayground',
        disabled: false,
    },
};
export const ButtonDefault = {
    args: {
        variant: 'secondary',
        children: 'ButtonPlayground',
        disabled: false,
    },
};
export const ButtonOutilne = {
    args: {
        variant: 'secondary',
        children: 'ButtonPlayground',
        disabled: false,
        outline: true,
    },
};
export const ButtonRadius = {
    args: {
        variant: 'success',
        children: 'ButtonPlayground',
        disabled: false,
        radius: true,
    },
};
export const ButtonDisabled = {
    args: {
        variant: 'danger',
        children: 'ButtonPlayground',
        disabled: true,
    },
};
export const ButtonIcon = {
    args: {
        variant: 'primary',
        children: 'ButtonPlayground',
        icon: exampleIcon,
    },
};
export const ButtonIconHalfRightOutiline = {
    args: {
        variant: 'success',
        children: 'ButtonPlayground',
        icon: exampleIcon,
        halfRight: true,
        outline: true,
    },
};
export const ButtonIconHalfLeft = {
    args: {
        variant: 'success',
        children: 'ButtonPlayground',
        icon: exampleIcon,
        halfLeft: true,
    },
};
//# sourceMappingURL=stories.js.map