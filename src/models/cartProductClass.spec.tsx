import { cartProduct } from "./cartProduct";
import { categories, sizes } from "./product";


describe('Given the class cartProduct', () => {
    describe('When we instantiate an object', () => {
        test(`Then the created object should 
        have the product and count properties:`, () => {
            const product = new cartProduct(
                10,
                "Café",
                sizes.S,
                'India',
                'image.png',
                'lo mejor de la cosecha',
                categories.coffee,
                200,
                1,
                false
            );
            expect(product).toBeInstanceOf(cartProduct);
            expect(product).toHaveProperty('promo');
            expect(product).toHaveProperty('name');
        });
    });
});
