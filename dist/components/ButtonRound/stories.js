import exampleIcon from '../../assets/icon/image.svg';
import { VARIANTS_TYPES } from '../../utils/constanst';
import { ButtonRound } from './index';
const meta = {
    title: 'Components/ButtonRound',
    component: ButtonRound,
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
        icon: exampleIcon,
    },
};
export const ButtonBadge = {
    args: {
        variant: 'primary',
        children: 'ButtonPlayground',
        disabled: false,
        icon: exampleIcon,
    },
};
//# sourceMappingURL=stories.js.map