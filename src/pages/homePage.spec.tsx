import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '../services/test-utils';
import { store } from '../store/store';
import HomePage from './homePage';


describe('When render the HomePage component', () => {
    test('Renders the h1', () => {
        const preloadedState = {};
        render(
            <BrowserRouter>
                <HomePage  />
            </BrowserRouter>,
            { preloadedState, store }
         );
        expect(screen.getByText(/Nuestras ofertas/i)).toBeInTheDocument();
    });
});