// Funcion pura
// recibe un estado y una accion
// retorna un NUEVO estado (NO HAY MUTACION)

import { createReducer } from '@reduxjs/toolkit';
import { cartProduct } from '../../models/cartProduct';
import * as ac from './action.creators'

// const initialState: Array<cartProduct> = [];
const  initialState: number = 0;

export const cartIdReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(ac.idIncrement, (state, action) => state + 1)
       
        .addDefaultCase((state) => state);
});
