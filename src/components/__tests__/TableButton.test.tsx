import React from 'react';
import { render, screen } from '@testing-library/react';
import TableButton from '../TableButton';

describe('TableButton Component', () => {
  it('should render a button', () => {
    render(<TableButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should display "Inserir Tabela" text', () => {
    render(<TableButton />);
    expect(screen.getByText('Inserir Tabela')).toBeInTheDocument();
  });

  it('should have type="button" attribute', () => {
    render(<TableButton />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
  });
});
