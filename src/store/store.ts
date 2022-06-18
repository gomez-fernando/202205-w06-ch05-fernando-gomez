import { configureStore } from '@reduxjs/toolkit';
import { Product } from '../models/product';
import { productReducer } from '../reducers/product.reducer';


export interface iState {
    products: Array<Product>;
}

const preloadedState = {
    products: [] as Array<Product>,
};

export const store = configureStore({
    reducer: {
        products: productReducer,
    },
    preloadedState,
});
