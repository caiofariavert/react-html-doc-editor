import React from 'react';
import { render, screen } from '@testing-library/react';
import Editor from '../Editor';

describe('Editor Component', () => {
  it('should render without crashing', () => {
    render(<Editor />);
    // Verificar se o container foi renderizado
    const container = document.querySelector('.editor-container');
    expect(container).toBeInTheDocument();
  });

  it('should have a WysiwygEditor container', () => {
    const { container } = render(<Editor />);
    const wysiwygContainer = container.querySelector('.wysiwyg-editor-container');
    expect(wysiwygContainer).toBeInTheDocument();
  });

  it('should have a toolbar with buttons', () => {
    const { container } = render(<Editor />);
    const toolbar = container.querySelector('.wysiwyg-toolbar');
    expect(toolbar).toBeInTheDocument();
    
    const buttons = toolbar?.querySelectorAll('button');
    expect(buttons && buttons.length > 0).toBe(true);
  });

  it('should have a DocxImport component', () => {
    const { container } = render(<Editor />);
    const fileInput = container.querySelector('input[type="file"]');
    expect(fileInput).toBeInTheDocument();
    expect(fileInput).toHaveAttribute('accept', '.docx');
  });

  it('should have editor content area', () => {
    const { container } = render(<Editor />);
    const editorContent = container.querySelector('.wysiwyg-editor-content');
    expect(editorContent).toBeInTheDocument();
  });
});
