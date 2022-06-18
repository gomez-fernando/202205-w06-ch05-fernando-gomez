import { configureStore } from '@reduxjs/toolkit';
import { categories, Product, sizes } from '../models/product';
import { cartReducer } from '../reducers/cart/chart.reducer';
import { productReducer } from '../reducers/products/product.reducer';


export interface iState {
    products: Array<Product>;
    cart: Product[];
}

const preloadedState = {
    products: [] as Array<Product>,
    cart: [] as Array<Product>,
};

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
    },
    preloadedState,
});
