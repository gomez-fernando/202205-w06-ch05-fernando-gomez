// Funcion pura
// recibe un estado y una accion
// retorna un NUEVO estado (NO HAY MUTACION)

import { createReducer } from '@reduxjs/toolkit';
import { cartProduct } from '../../models/cartProduct';
import * as ac from './action.creators'

const initialState: Array<cartProduct> = [];

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
        // console.log('object')
            
             state.filter((item) => item.cartId !== action.payload.cartId)
           
        )
        .addDefaultCase((state) => state);
});
