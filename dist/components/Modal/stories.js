import React from 'react';
import { useState } from 'react';
import { Modal } from './index';
import { Paragraph } from '../Paragraph';
import { Button } from '../Button';
const meta = {
    title: 'Components/Modal',
    component: Modal,
};
export default meta;
export const Playground = {
    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [isOpen, setIsOpen] = useState(false);
        return (React.createElement(React.Fragment, null,
            React.createElement(Button, { onClick: () => setIsOpen(true) }, "Open Modal"),
            isOpen && (React.createElement(Modal, { onClose: () => setIsOpen(false), footer: React.createElement(React.Fragment, null,
                    React.createElement(Button, { onClick: () => setIsOpen(true), variant: 'gray' }, "Cancelar"),
                    React.createElement(Button, { onClick: () => setIsOpen(true) }, "Open Modal")) },
                React.createElement(Paragraph, { size: 'medium', heavyBod: true }, "Modal Title"),
                React.createElement(Paragraph, null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")))));
    },
};
//# sourceMappingURL=stories.js.map