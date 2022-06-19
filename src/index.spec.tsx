import { screen } from '@testing-library/react';

describe('When render the index component', () => {
    test('Renders text from homePage', () => {
        
        expect(screen.getByText(/ISDI - Coffee/i)).toBeInTheDocument();
    });
});