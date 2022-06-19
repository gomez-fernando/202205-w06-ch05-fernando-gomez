import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Card } from '.';
import { categories, sizes } from '../../models/product';
import { render } from '../../services/test-utils';
import { store } from '../../store/store';

const product = 
    {
        id: 1,
        promo: false,
        name: "Mock name",
      price: 10,
      size: sizes.S,
      origin: 'India',
      image: 'image.png',
      description: 'lo mejor de la cosecha',
      category: categories.coffee,
      stock: 200
};  


describe('When render the List component', () => {
    test('Renders name of a product', () => {
        const preloadedState = {};
        render(
            <BrowserRouter>
                <Card product={product}  />
            </BrowserRouter>,
            { preloadedState, store }
         );
        expect(screen.getByText(/Mock name/i)).toBeInTheDocument();
    });
});