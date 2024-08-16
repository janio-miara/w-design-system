import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './index';
describe('Button Component', () => {
    test('renders button with primary variant', () => {
        render(React.createElement(Button, { variant: "primary" }, "Primary Button"));
        const button = screen.getByText('Primary Button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveStyle(`background-color: #1A3D7F`);
    });
    test('renders button with secondary variant', () => {
        render(React.createElement(Button, { variant: "secondary" }, "Secondary Button"));
        const button = screen.getByText('Secondary Button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveStyle(`background-color: #217EFD`);
    });
    test('button responds to click event', () => {
        const handleClick = jest.fn();
        render(React.createElement(Button, { variant: "primary", onClick: handleClick }, "Clickable Button"));
        const button = screen.getByText('Clickable Button');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
    test('button is disabled when the disabled prop is true', () => {
        render(React.createElement(Button, { variant: "primary", disabled: true }, "Disabled Button"));
        const button = screen.getByText('Disabled Button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveStyle(`opacity: 0.5`);
        expect(button).toHaveStyle(`cursor: not-allowed`);
    });
});
//# sourceMappingURL=test.js.map