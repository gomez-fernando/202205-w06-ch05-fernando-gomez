import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '../services/test-utils';
import { store } from '../store/store';
import CoffeePage from './coffeePage';


describe('When render the CoffePage component', () => {
    test('Renders the h1', () => {
        const preloadedState = {};
        render(
            <BrowserRouter>
                <CoffeePage  />
            </BrowserRouter>,
            { preloadedState, store }
         );
        expect(screen.getByText(/Nuestros cafés/i)).toBeInTheDocument();
        expect(screen.getByText(/Mock name/i)).toBeInTheDocument();
    });
});