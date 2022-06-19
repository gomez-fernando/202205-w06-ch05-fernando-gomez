import { screen } from '@testing-library/react';
import { render } from '../services/test-utils';
import { store } from '../store/store';
import  App  from './App';

describe('When render the App component', () => {
    test('Renders text and button', () => {
        const preloadedState = {
            
        };
        render(<App />, { preloadedState, store });
        expect(screen.getByText(/ISDI - Coffee/i)).toBeInTheDocument();
    });
});