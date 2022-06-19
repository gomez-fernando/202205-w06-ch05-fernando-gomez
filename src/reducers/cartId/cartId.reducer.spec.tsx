import { cartIdReducer } from './cartId.reducer';
import * as actions from './action.creators'

describe("Given the cartIdReducer", () => {
    const initialState: number = 0;
  
    describe('When we use the idIncrementAction', () => {
        test('Should add one to the state. The parameter into idIncrement is not relevant', () => {
            const newState = cartIdReducer(
                initialState,
                actions.idIncrement()
            )

            expect(newState).toBe(1);
            expect(typeof newState).toBe('number');
            expect(newState).toBeGreaterThan(initialState);
            expect(newState).toBeLessThan(initialState + 2); 
            expect(newState).toEqual(1);
            expect(newState).toStrictEqual(1);
        });
    });

   

     

      
})

