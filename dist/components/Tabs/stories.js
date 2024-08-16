import React from 'react';
import { Paragraph } from '../Paragraph';
import { Tabs } from './index';
import { useState } from 'react';
const meta = {
    title: 'Components/Tabs',
    component: Tabs,
};
export default meta;
export const Playground = {
    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [activeTab, setActiveTab] = useState('Tab 1');
        const handleTabChange = (activeTab) => {
            setActiveTab(activeTab);
        };
        return (React.createElement("div", { style: { background: '#e0dede', padding: '50px', height: '100vh' } },
            React.createElement(Tabs, { tabs: ['Tab 1', 'Tab 2', 'Tab 3'], defaultActiveTab: "Tab 1", onTabChange: handleTabChange }),
            React.createElement("div", { style: { background: 'white', padding: '50px 20px', borderRadius: '8px', marginTop: '-5px' } },
                activeTab === 'Tab 1' && (React.createElement(React.Fragment, null,
                    React.createElement(Paragraph, { size: 'medium', heavyBod: true }, "Tab 1"),
                    React.createElement(Paragraph, null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"))),
                activeTab === 'Tab 2' && (React.createElement(React.Fragment, null,
                    React.createElement(Paragraph, { size: 'medium', heavyBod: true }, "Tab 2"),
                    React.createElement(Paragraph, null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"))),
                activeTab === 'Tab 3' && (React.createElement(React.Fragment, null,
                    React.createElement(Paragraph, { size: 'medium', heavyBod: true }, "Tab 3"),
                    React.createElement(Paragraph, null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"))))));
    },
};
//# sourceMappingURL=stories.js.map