import { createAction } from '@reduxjs/toolkit';
import { cartProduct } from '../../models/cartProduct';
import { actionTypes } from './action.types';

export interface iAction {
    type: actionTypes;
    payload?: any;
}

export const loadProductsAction = createAction<Array<cartProduct>>(
    actionTypes['cart@load']
);

export const addProductAction = createAction<cartProduct>(
    actionTypes['cart@add']
);

export const updateProductAction = createAction<cartProduct>(
    actionTypes['cart@update']
);

export const deleteProductAction = createAction<cartProduct>(
    actionTypes['cart@delete']
);

