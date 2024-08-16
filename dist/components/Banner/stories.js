import { VARIANTS_TYPES_BANNER } from '../../utils/constanst';
import { Banner } from './index';
const meta = {
    title: 'Components/Banner',
    component: Banner,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: VARIANTS_TYPES_BANNER,
            },
        },
        onClick: { action: 'clicked' },
    },
};
export default meta;
export const Playground = {
    args: {
        variant: 'success',
        title: 'Sucesso!',
        subTitle: 'Mensagem de sucesso.',
    },
};
//# sourceMappingURL=stories.js.map