import { Product, categories, sizes } from "../models/product";
import { productReducer } from "./product.reducer";
import * as actions from './action.creators'

describe("Given the productReducer", () => {
    const mockProduct = {
        id: 1,
        promo: false,
        name: "Café",
      price: 10,
      size: sizes.S,
      origin: 'India',
      image: 'image.png',
      description: 'lo mejor de la cosecha',
      category: categories.coffe
    };

    describe("When we use the loadProducts function", () => {
      test("Then it should load the mockProduct array", () => {
        const initialState: Array<Product> = [];

        const newState = productReducer(
          initialState,
          actions.loadProductsAction([mockProduct])
        );
  
        expect(newState).toHaveLength(1);
        expect(newState).toStrictEqual([mockProduct]);
      });
    });

    describe("When we use the addProduct function", () => {
        test("Then it should add the newProduct", () => {
          const initialState: Array<Product> = [mockProduct];

          const newProduct = { ...mockProduct, id: 2, promo: true, category: categories.coffe };
          
          const newState = productReducer(
            initialState,
            actions.addProductAction(newProduct)
          );
    
          expect(newState).toHaveLength(2);
          expect(newState).toStrictEqual([mockProduct, newProduct]);
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
})

