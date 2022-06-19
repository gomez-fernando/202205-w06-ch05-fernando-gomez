import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CartPage from './';
import { categories, sizes } from '../../models/product';
import { render } from '../../services/test-utils';
import { store } from '../../store/store';
import { cartProduct } from '../../models/cartProduct';

const products: cartProduct[] = [
    {
        id: 1,
        cartId: 1,
        promo: false,
        name: "Mock name",
      price: 10,
      size: sizes.S,
      origin: 'India',
      image: 'image.png',
      description: 'lo mejor de la cosecha',
      category: categories.coffee,
    }
];


describe('When render the List component', () => {
    test('Renders name of a product', () => {
        const preloadedState = {
            products
        };
        render(
            <BrowserRouter>
                <CartPage  />
            </BrowserRouter>,
            { preloadedState, store }
         );
        expect(screen.getByText(/Mock name/i)).toBeInTheDocument();
    });
});