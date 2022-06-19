import { categories, Product, sizes } from "../models/product";
import { HttpStoreProducts } from "./http.store.product";

const api = new HttpStoreProducts();

const prod1: Product = {
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
const prod2: Product = {
    ...prod1, id:2, promo: true, stock: 20
}
const prod3: Product = {
    ...prod1, id:3, origin: 'Nepal', stock: 5
}
const updatedProduct: Product = {
    ...prod1, id:1, origin: 'Nepal', stock: 5
}

describe('Given the HttpStoreProducts service', () => {
    describe('When we call getProducts', () => {
        test('Should return a Product[]', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue([
                    prod1, prod2, prod3
                ])
            });
            const response = await api.getProducts();

            expect(response).toStrictEqual([
                prod1, prod2, prod3
            ]);
            expect(response).toHaveLength(3);
            expect(Array.isArray(response)).toBe(true);
            expect(response.find(item => item.id ===  1) ).toStrictEqual(prod1);
            expect(response.find((item) => item.id === 2)?.promo).toBe(true);
            expect(response[0].promo).toBe(false);
        });
    });

    describe('When we call getProduct ', () => {
        test('Should return a single product', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(prod2)
            })
            const response = await api.getProduct(2);
            expect(response).toStrictEqual(prod2);
            expect(Array.isArray(response)).toBe(false);
            expect(typeof response).toBe('object')
        });
    });
    describe('When we call setProduct', () => {
        test('Should return the added product', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(prod2)
            });
            const response = await api.setProduct(prod2);
            expect(response).toStrictEqual(prod2);
            expect(Array.isArray(response)).toBe(false);
            expect(typeof response).toBe('object')
        });
    });
    describe('When we call updateProduct', () => {
        test('Should return the updated product', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(updatedProduct)
            });
            const response = await api.updateProduct(updatedProduct);
            expect(response).toStrictEqual(updatedProduct);
            expect(Array.isArray(response)).toBe(false);
            expect(typeof response).toBe('object')
        });
    });
    describe('When we call deleteProduct', () => {
        test('Should return status 200', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(200)
            });
            const response = await api.deleteProduct('34');
            expect(response).toStrictEqual(200);
        });
    });
});