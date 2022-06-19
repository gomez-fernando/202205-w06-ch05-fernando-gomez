import { Product, categories, sizes } from "../../models/product";
import { cartReducer } from "./chart.reducer";
import { cartProduct } from "../../models/cartProduct";
import * as actions from './action.creators'

describe("Given the cartReducer", () => {
    const mockProduct = {
        id: 1,
        cartId: 1,
        promo: false,
        name: "Café",
      price: 10,
      size: sizes.S,
      origin: 'India',
      image: 'image.png',
      description: 'lo mejor de la cosecha',
      category: categories.coffee
    };
    const newProduct = { ...mockProduct, id: 2, promo: true, category: categories.tea, name: 'Té' };
    const updateMockProduct = { ...mockProduct, promo: true, category: categories.tea, name: 'Té' };

    describe("When we use the loadProducts function", () => {
      test("Then it should load the mockProduct array", () => {
        const initialState: cartProduct[] = [];

        const newState = cartReducer(
          initialState,
          actions.loadProductsAction([mockProduct])
        );
  
        expect(newState).toHaveLength(1);
        expect(newState).toStrictEqual([mockProduct]);
        expect(newState.find(item => item.id ===  1) ).toStrictEqual(mockProduct);
        expect(newState.find((item) => item.id === 1)?.name).toBe('Café');
        expect(newState[0].promo).toBe(false);
      });
    });

    describe("When we use the addProduct function", () => {
        test("Then it should add the newProduct", () => {
          const initialState: cartProduct[] = [mockProduct];
          
          const newState = cartReducer(
            initialState,
            actions.addProductAction(newProduct)
          );
    
          expect(newState).toHaveLength(2);
          expect(newState).toStrictEqual([mockProduct, newProduct]);
          expect(newState.find(item => item.id ===  2) ).toStrictEqual(newProduct);
          expect(newState.find((item) => item.id === 2)?.name).toBe('Té');
          expect(newState[1].promo).toBe(true);
        });
      });

      describe("When we use the updateProduct function", () => {
        test("Then it should update the mockProduct", () => {
          const initialState: cartProduct[] = [mockProduct];
          const newState = cartReducer(
            initialState,
            actions.updateProductAction(updateMockProduct)
          );
    
          expect(newState).toHaveLength(1);
          expect(newState).toStrictEqual([updateMockProduct]);
          expect(newState.find(item => item.id ===  1) ).toStrictEqual(updateMockProduct);
          expect(newState.find((item) => item.id === 1)?.name).toBe('Té');
          expect(newState[0].promo).toBe(true);
        });
      });

      describe("When we use the deleteProduct function", () => {
        test("Then it should delete the mockProduct", () => {
          const initialState:  cartProduct[] = [mockProduct];
          const newState = cartReducer(
            initialState,
            actions.deleteProductAction(mockProduct)
          );
    
          expect(newState).toHaveLength(0);
          expect(newState).toStrictEqual([]);
        });
      });
})

