import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import TableButton from '../TableButton.js';
describe('TableButton Component', () => {
    it('should render a button', () => {
        render(_jsx(TableButton, {}));
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
    it('should display "Inserir Tabela" text', () => {
        render(_jsx(TableButton, {}));
        expect(screen.getByText('Inserir Tabela')).toBeInTheDocument();
    });
    it('should have type="button" attribute', () => {
        render(_jsx(TableButton, {}));
        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('type', 'button');
    });
});
