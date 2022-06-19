import { store } from "./store";

describe('Given the store', () => {
    describe('When imported', () => {
        test('Should return an object', () => {
            expect(store).toBeTruthy();
            expect(typeof store).toBe('object');
            console.log(store);
        });
    });
});


