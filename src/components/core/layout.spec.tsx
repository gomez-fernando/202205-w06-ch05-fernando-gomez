import { screen } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { JsxElement } from 'typescript';
import { aMenuItems } from '../../interfaces/menu-items';
import { render } from '../../services/test-utils';
import { store } from '../../store/store';
import { Layout } from './layout';

const HomePage = React.lazy(() => import('../../pages/homePage'));
const CoffePage = React.lazy(() => import('../../pages/coffeePage'));

const options: aMenuItems = [
    { path: '', label: 'Home - Ofertas', page: <HomePage /> },
    { path: 'coffee', label: 'Cafés', page: <CoffePage /> },
];

const children = (): ReactElement => {
    return (
        <div>
            <p>Hello!</p>
        </div>
    )
}
describe('When render the Header component', () => {
    test('Renders navigation links', () => {
        const preloadedState = {};
        render(
            <BrowserRouter>
                    <Layout options={options} children={(children as unknown) as ReactElement}/>
            </BrowserRouter>,
         { preloadedState, store });

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(screen.getByText(/Hello!/i)).toBeInTheDocument();
    });
});