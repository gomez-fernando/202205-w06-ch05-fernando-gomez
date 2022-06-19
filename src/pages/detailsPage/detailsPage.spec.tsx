import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DetailsPage from './';
import { render } from '../../services/test-utils';
import { store } from '../../store/store';


describe('When render the DetailsPage component', () => {
    test('Renders the h1', () => {
        const preloadedState = {};
        render(
            <BrowserRouter>
                <DetailsPage  />
            </BrowserRouter>,
            { preloadedState, store }
         );
        expect(screen.getByText(/Carrito/i)).toBeInTheDocument();
    });
});