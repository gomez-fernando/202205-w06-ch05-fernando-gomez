import { screen } from '@testing-library/react';
import { render } from '../services/test-utils';
import { Product } from '../models/product';
import { store } from '../store/store';
import  App  from './App';

test('renders learn react link', () => {
    const preloadedState = {
        products: [] as Array<Product>,
    };
    render(<App />, { preloadedState, store });
    expect(screen.getByText(/ISDI - Coffee/i)).toBeInTheDocument();
});