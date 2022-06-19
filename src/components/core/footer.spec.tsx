import { screen } from '@testing-library/react';
import { render } from '../../services/test-utils';
import { store } from '../../store/store';
import { Footer } from './footer';

describe('When render the Footer component', () => {
    test('Renders text and button', () => {
        const preloadedState = {
            
        };
        render(<Footer />, { preloadedState, store });
        expect(screen.getByText(/ISDI Coders/i)).toBeInTheDocument();
    });
});