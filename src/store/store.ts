import { configureStore } from '@reduxjs/toolkit';
import { cartProduct } from '../models/cartProduct';
import { Product } from '../models/product';
import { cartIdReducer } from '../reducers/cartId/cartId.reducer';
import { cartReducer } from '../reducers/cart/chart.reducer';
import { productReducer } from '../reducers/products/product.reducer';


export interface iState {
    products: Array<Product>;
    cart: cartProduct[];
    cartId: number
}

const preloadedState: iState = {
    products: [] as Array<Product>,
    cart: [] as Array<cartProduct>,
    cartId: 0 as number
};

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        cartId: cartIdReducer
    },
    preloadedState,
});
