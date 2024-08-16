import { FullScreenLoading, ContainerLoading } from './index';
import React from 'react';
import CardStories from '../CardStories';
const meta = {
    title: 'Components/Loading',
    component: FullScreenLoading,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select', options: ['small', 'medium', 'large'] },
            description: 'Select the size of the loading spinner',
        },
    },
};
export default meta;
export const FullScreenSmall = {
    args: {
        size: 'small',
    },
};
export const FullScreenMedium = {
    args: {
        size: 'medium',
    },
};
export const FullScreenLarge = {
    args: {
        size: 'large',
    },
};
export const ContainerSmall = {
    render: () => (React.createElement(CardStories, { title: "Loading", subTitle: "small" },
        React.createElement(ContainerLoading, { size: "small" }))),
};
export const ContainerMedium = {
    render: () => (React.createElement(CardStories, { title: "Loading", subTitle: "medium" },
        React.createElement(ContainerLoading, { size: "medium" }))),
};
export const ContainerLarge = {
    render: () => (React.createElement(CardStories, { title: "Loading", subTitle: "large" },
        React.createElement(ContainerLoading, { size: "large" }))),
};
//# sourceMappingURL=stories.js.map