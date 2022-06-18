import { createAction } from '@reduxjs/toolkit';
import { Product } from '../../models/product';
import { actionTypes } from './action.types';

export interface iAction {
    type: actionTypes;
    payload?: any;
}

export const loadProductsChartAction = createAction<Array<Product>>(
    actionTypes['product@load']
);

export const addProductChartAction = createAction<Product>(
    actionTypes['product@add']
);

export const updateProductChartAction = createAction<Product>(
    actionTypes['product@update']
);

export const deleteProductChartAction = createAction<Product>(
    actionTypes['product@delete']
);

