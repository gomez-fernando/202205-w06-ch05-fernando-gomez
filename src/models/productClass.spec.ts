import { categories, Product, sizes } from "./product";


describe('Given the class Product', () => {
    describe('When we instantiate an object', () => {
        test(`Then the created object should 
        have the product and count properties:`, () => {
            const product = new Product(
                1,
                10,
                "Café",
                sizes.S,
                'India',
                'image.png',
                'lo mejor de la cosecha',
                categories.coffee,
                200
            );
            expect(product).toBeInstanceOf(Product);
            expect(product).toHaveProperty('promo');
            expect(product).toHaveProperty('name');
            expect(typeof product).toBe('object');
        });
    });
});
