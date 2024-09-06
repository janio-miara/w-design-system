import React from 'react';
import { Sidebar } from './index';
import { action } from '@storybook/addon-actions';
import { dashboardSVG } from '../../assets/icon';
const meta = {
    title: 'Components/Sidebar',
    tags: ['autodocs'],
    component: Sidebar,
};
export default meta;
export const Playground = {
    render: () => {
        return (React.createElement(Sidebar, { layout: [
                {
                    type: 'item',
                    id: 'DASHBOARD',
                },
                { type: 'group', id: 'group1' },
            ], items: {
                DASHBOARD: {
                    menuTitle: 'Dashboard',
                    icon: dashboardSVG,
                    link: '/dashboard',
                    disabled: true,
                },
            }, currentItemId: '', currentGroupId: '', setLink: action('setLink'), groups: {
                group1: {
                    name: 'Group 1',
                    icon: dashboardSVG,
                    itemIds: ['DASHBOARD'],
                },
            }, logoUrl: '' }));
    },
};
//# sourceMappingURL=stories.js.map