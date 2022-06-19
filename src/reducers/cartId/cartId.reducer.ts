// Funcion pura
// recibe un estado y una accion
// retorna un NUEVO estado (NO HAY MUTACION)

import { createReducer } from '@reduxjs/toolkit';
import * as ac from './action.creators'
import { actionTypes } from './action.types';

// const initialState: Array<cartProduct> = [];
const  initialState: number = 0;

export const cartIdReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(ac.idIncrement, (state) => state + 1)
       
        .addDefaultCase((state) => state);
});
