// Funcion pura
// recibe un estado y una accion
// retorna un NUEVO estado (NO HAY MUTACION)

import { createReducer } from '@reduxjs/toolkit';
import { iProduct } from '../../models/product';
import * as ac from './action.creators'

const initialState: Array<iProduct> = [];

export const cartReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(ac.loadProductsAction, (state, action) => [
            
            ...action.payload,
        ])
        .addCase(ac.addProductAction, (state, action) => [
            ...state,
            action.payload,
        ])
        .addCase(ac.updateProductAction, (state, action) =>
            state.map((item) =>
                item.id === action.payload.id ? action.payload : item
            )
        )
        .addCase(ac.deleteProductAction, (state, action) =>
            state.filter((item) => item.id !== action.payload.id)
        )
        .addDefaultCase((state) => state);
});