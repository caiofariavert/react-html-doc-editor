import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import Toolbar from '../Toolbar';
describe('Toolbar Component', () => {
    it('should render without crashing', () => {
        render(_jsx(Toolbar, {}));
        expect(screen.getByText('Toolbar')).toBeInTheDocument();
    });
    it('should have a div container', () => {
        const { container } = render(_jsx(Toolbar, {}));
        const div = container.querySelector('div');
        expect(div).toBeInTheDocument();
    });
});
