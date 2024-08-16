import exampleIcon from '../../assets/icon/image.svg';
import { ButtonRadiusIcon } from './index';
import { VARIANTS_TYPES } from '../../utils/constanst'; // Update this path to your actual icon
const meta = {
    title: 'Components/ButtonRadiusIcon',
    component: ButtonRadiusIcon,
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
            control: 'text',
        },
        onClick: { action: 'clicked' },
    },
};
export default meta;
export const Playground = {
    args: {
        variant: 'primary',
        children: 'Primary Button',
        disabled: false,
        icon: exampleIcon,
    },
};
export const PlaygroundTitlePrimary = {
    args: {
        variant: 'secondary',
        children: 'Button:',
        disabled: false,
        icon: exampleIcon,
        subTitle: 'subTitle',
    },
};
//# sourceMappingURL=stories.js.map