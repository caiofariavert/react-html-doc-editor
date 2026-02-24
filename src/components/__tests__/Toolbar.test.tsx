import React from 'react';
import { render, screen } from '@testing-library/react';
import Toolbar from '../Toolbar';

describe('Toolbar Component', () => {
  it('should render without crashing', () => {
    render(<Toolbar />);
    expect(screen.getByText('Toolbar')).toBeInTheDocument();
  });

  it('should have a div container', () => {
    const { container } = render(<Toolbar />);
    const div = container.querySelector('div');
    expect(div).toBeInTheDocument();
  });
});
