import { screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { aMenuItems } from '../../interfaces/menu-items';
import { render } from '../../services/test-utils';
import { store } from '../../store/store';
import { Header } from './header';

const HomePage = React.lazy(() => import('../../pages/homePage'));
const CoffePage = React.lazy(() => import('../../pages/coffeePage'));

const options: aMenuItems = [
    { path: '', label: 'Home - Ofertas', page: <HomePage /> },
    { path: 'coffee', label: 'Cafés', page: <CoffePage /> },
];

describe('When render the Header component', () => {
    test('Renders navigation links', () => {
        const preloadedState = {};
        render(
            <BrowserRouter>
                <Header options={options}/>
            </BrowserRouter>,
         { preloadedState, store });
         
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });
});