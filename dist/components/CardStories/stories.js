import CardStories from './index';
import { Paragraph } from '../Paragraph';
import React from 'react';
const meta = {
    title: 'Components/CardStories',
    component: CardStories,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    args: {
        title: 'Default Title',
        subTitle: 'Default Subtitle',
        children: 'This is the default content.',
    },
};
export const WithCustomContent = {
    args: {
        title: 'Custom Title',
        subTitle: 'Custom Subtitle',
        children: (React.createElement(React.Fragment, null,
            React.createElement(Paragraph, null, "This is custom content."),
            React.createElement(Paragraph, { size: "small" }, "Additional custom content."))),
    },
};
export const WithoutSubtitle = {
    args: {
        title: 'Title Only',
        children: React.createElement(Paragraph, null, "This card has no subtitle."),
    },
};
//# sourceMappingURL=stories.js.map