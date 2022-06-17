import { createAction } from '@reduxjs/toolkit';
import { Product } from '../models/product';
import { actionTypes } from './action.types';

export interface iAction {
    type: actionTypes;
    payload?: any;
}

export const loadProductsAction = createAction<Array<Product>>(
    actionTypes['product@load']
);

export const addProductAction = createAction<Product>(
    actionTypes['product@add']
);

export const updateProductAction = createAction<Product>(
    actionTypes['product@update']
);

export const deleteProductAction = createAction<Product>(
    actionTypes['product@delete']
);

