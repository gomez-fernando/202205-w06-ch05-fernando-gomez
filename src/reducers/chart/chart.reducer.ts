// Funcion pura
// recibe un estado y una accion
// retorna un NUEVO estado (NO HAY MUTACION)

import { createReducer } from '@reduxjs/toolkit';
import { Product } from '../../models/product';
import * as ac from './action.creators'

const initialState: Array<Product> = [];

export const chartReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(ac.loadProductsChartAction, (state, action) => [
            ...action.payload,
        ])
        .addCase(ac.addProductChartAction, (state, action) => [
            ...state,
            action.payload,
        ])
        .addCase(ac.updateProductChartAction, (state, action) =>
            state.map((item) =>
                item.id === action.payload.id ? action.payload : item
            )
        )
        .addCase(ac.deleteProductChartAction, (state, action) =>
            state.filter((item) => item.id !== action.payload.id)
        )
        .addDefaultCase((state) => state);
});
