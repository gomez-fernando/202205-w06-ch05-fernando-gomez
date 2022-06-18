import { createAction } from '@reduxjs/toolkit';
import { iProduct } from '../../models/product';
import { actionTypes } from './action.types';

export interface iAction {
    type: actionTypes;
    payload?: any;
}

export const loadProductsAction = createAction<Array<iProduct>>(
    actionTypes['cart@load']
);

export const addProductAction = createAction<iProduct>(
    actionTypes['cart@add']
);

export const updateProductAction = createAction<iProduct>(
    actionTypes['cart@update']
);

export const deleteProductAction = createAction<iProduct>(
    actionTypes['cart@delete']
);

