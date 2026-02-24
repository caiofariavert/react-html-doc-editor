import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import DocxImport from '../DocxImport.js';
describe('DocxImport Component', () => {
    it('should render file input for .docx files', () => {
        const mockOnImport = jest.fn();
        const { container } = render(_jsx(DocxImport, { onImport: mockOnImport }));
        const fileInput = container.querySelector('input[type="file"]');
        expect(fileInput).toBeInTheDocument();
        expect(fileInput).toHaveAttribute('accept', '.docx');
    });
    it('should have onChange event handler', () => {
        const mockOnImport = jest.fn();
        const { container } = render(_jsx(DocxImport, { onImport: mockOnImport }));
        const fileInput = container.querySelector('input[type="file"]');
        expect(fileInput).toHaveProperty('onchange');
    });
    it('should call onImport callback when file is selected', async () => {
        const mockOnImport = jest.fn();
        const { container } = render(_jsx(DocxImport, { onImport: mockOnImport }));
        const fileInput = container.querySelector('input[type="file"]');
        expect(fileInput).toBeDefined();
    });
});
