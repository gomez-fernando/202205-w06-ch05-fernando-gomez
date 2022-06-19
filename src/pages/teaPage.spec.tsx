import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '../services/test-utils';
import { store } from '../store/store';
import TeaPage from './teaPage';


describe('When render the CoffePage component', () => {
    test('Renders the h1', () => {
        const preloadedState = {};
        render(
            <BrowserRouter>
                <TeaPage  />
            </BrowserRouter>,
            { preloadedState, store }
         );
        expect(screen.getByText(/Nuestros tés/i)).toBeInTheDocument();
    });
});