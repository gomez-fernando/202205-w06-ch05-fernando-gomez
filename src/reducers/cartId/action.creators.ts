import { createAction } from '@reduxjs/toolkit';
import { cartProduct } from '../../models/cartProduct';
import { actionTypes } from './action.types';

export interface iAction {
    type: actionTypes;
    payload?: any;
}

export const idIncrement = createAction(
    actionTypes['cartId@add']
);


