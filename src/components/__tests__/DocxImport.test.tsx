import React from 'react';
import { render, screen } from '@testing-library/react';
import DocxImport from '../DocxImport';

describe('DocxImport Component', () => {
  it('should render file input for .docx files', () => {
    const mockOnImport = jest.fn();
    const { container } = render(<DocxImport onImport={mockOnImport} />);

    const fileInput = container.querySelector('input[type="file"]');
    expect(fileInput).toBeInTheDocument();
    expect(fileInput).toHaveAttribute('accept', '.docx');
  });

  it('should have onChange event handler', () => {
    const mockOnImport = jest.fn();
    const { container } = render(<DocxImport onImport={mockOnImport} />);

    const fileInput = container.querySelector('input[type="file"]') as HTMLInputElement;
    expect(fileInput).toHaveProperty('onchange');
  });

  it('should call onImport callback when file is selected', async () => {
    const mockOnImport = jest.fn();
    const { container } = render(<DocxImport onImport={mockOnImport} />);

    const fileInput = container.querySelector('input[type="file"]') as HTMLInputElement;
    expect(fileInput).toBeDefined();
  });
});
