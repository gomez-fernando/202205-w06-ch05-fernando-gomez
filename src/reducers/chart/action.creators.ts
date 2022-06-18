import { createAction } from '@reduxjs/toolkit';
import { Product } from '../../models/product';
import { actionTypes } from './action.types';

export interface iAction {
    type: actionTypes;
    payload?: any;
}

export const loadProductsAction = createAction<Array<Product>>(
    actionTypes['chart@load']
);

export const addProductAction = createAction<Product>(
    actionTypes['chart@add']
);

export const updateProductAction = createAction<Product>(
    actionTypes['chart@update']
);

export const deleteProductAction = createAction<Product>(
    actionTypes['chart@delete']
);

