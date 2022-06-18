import { configureStore } from '@reduxjs/toolkit';
import { Product } from '../models/product';
import { chartReducer } from '../reducers/chart/chart.reducer';
import { productReducer } from '../reducers/products/product.reducer';


export interface iState {
    products: Array<Product>;
    chart: Product[];
}

const preloadedState = {
    products: [] as Array<Product>,
    chart: [] as Array<Product>,
};

export const store = configureStore({
    reducer: {
        products: productReducer,
        chart: chartReducer,
    },
    preloadedState,
});
