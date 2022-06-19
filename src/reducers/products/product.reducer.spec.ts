import { Product, categories, sizes } from "../../models/product";
import { productReducer } from "./product.reducer";
import * as actions from './action.creators';
import { AnyAction } from "@reduxjs/toolkit";

const mockProduct: Product = {
    id: 1,
    promo: false,
    name: "Café",
  price: 10,
  size: sizes.S,
  origin: 'India',
  image: 'image.png',
  description: 'lo mejor de la cosecha',
  category: categories.coffee,
  stock: 200
};

const newProduct: Product = { ...mockProduct, id: 2, promo: true, category: categories.coffee };

describe("Given the productReducer", () => {
    

    describe("When we use the loadProducts action", () => {
      test("Then it should load the mockProduct in the array", () => {
        const initialState: Array<Product> = [];

        const newState = productReducer(
          initialState,
          actions.loadProductsAction([mockProduct, newProduct])
        );
  
        expect(newState).toHaveLength(2);
        expect(Array.isArray(newState)).toBe(true);
        expect(newState).toStrictEqual([mockProduct, newProduct]);
        expect(newState.find(item => item.id ===  1) ).toStrictEqual(mockProduct);
        expect(newState.find((item) => item.id === 1)?.promo).toBe(false);
        expect(newState[0].promo).toBe(false);
      });
    });

    describe("When we use the addProduct function", () => {
        test("Then it should add the newProduct", () => {
          const initialState: Array<Product> = [mockProduct];

          
          
          const newState = productReducer(
            initialState,
            actions.addProductAction(newProduct)
          );
    
          expect(newState).toHaveLength(2);
          expect(newState).toStrictEqual([mockProduct, newProduct]);
          expect(newState.find(item => item.id ===  2) ).toStrictEqual(newProduct);
          expect(newState.find((item) => item.id === 2)?.promo).toBe(true);
          expect(newState[1].promo).toBe(true);
        });
      });

      describe("When we use the updateProduct function", () => {
        test("Then it should update the mockProduct", () => {
          const initialState: Array<Product> = [mockProduct];
          const updateMockProduct = { ...mockProduct, promo: true };
          const newState = productReducer(
            initialState,
            actions.updateProductAction(updateMockProduct)
          );
    
          expect(newState).toHaveLength(1);
          expect(newState).toStrictEqual([updateMockProduct]);
          expect(newState.find(item => item.id ===  1) ).toStrictEqual(updateMockProduct);
          expect(newState.find((item) => item.id === 1)?.promo).toBe(true);
          expect(newState[0].promo).toBe(true);
        });
      });

      describe("When we use the deleteProduct function", () => {
        test("Then it should delete the mockProduct", () => {
          const initialState: Array<Product> = [mockProduct];
          const newState = productReducer(
            initialState,
            actions.deleteProductAction(mockProduct)
          );
    
          expect(newState).toHaveLength(0);
          expect(newState).toStrictEqual([]);
        });
      });

      describe('When we call it with a non existing action', () => {
        test('It shoul return a new state equals to the previous one', () => {
            const initialState: Array<Product> = [mockProduct];
            const newState = productReducer(
                initialState,
                {} as AnyAction
            )
            expect(newState).toStrictEqual(initialState);

        });
      });
})

