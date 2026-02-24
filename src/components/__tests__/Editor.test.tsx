import React from 'react';
import { render, screen } from '@testing-library/react';
import Editor from '../Editor';

describe('Editor Component', () => {
  it('should render without crashing', () => {
    render(<Editor />);
    expect(screen.getByText(/Editor de texto/i)).toBeInTheDocument();
  });

  it('should have a container div with editor-container class', () => {
    const { container } = render(<Editor />);
    const editorContainer = container.querySelector('.editor-container');
    expect(editorContainer).toBeInTheDocument();
  });

  it('should display default message when no HTML is imported', () => {
    render(<Editor />);
    expect(screen.getByText('Editor de texto (em desenvolvimento)')).toBeInTheDocument();
  });

  it('should have a DocxImport component', () => {
    const { container } = render(<Editor />);
    const fileInput = container.querySelector('input[type="file"]');
    expect(fileInput).toBeInTheDocument();
    expect(fileInput).toHaveAttribute('accept', '.docx');
  });
});
