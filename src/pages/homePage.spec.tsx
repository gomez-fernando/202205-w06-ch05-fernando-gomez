import { useSelector } from 'react-redux';
import { render, screen } from '../services/test-utils';
import { iState, store } from '../store/store';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './homePage';
import { categories, Product, sizes } from '../models/product';
import { cartProduct } from '../models/cartProduct';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
}));

const products: Array<Product> = [
    {
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
    },

    {
        id: 2,
        promo: false,
        name: "Té",
        price: 10,
        size: sizes.S,
        origin: 'India',
        image: 'image.png',
        description: 'lo mejor de la cosecha',
        category: categories.tea,
        stock: 200
    },
];
const cart: Array<cartProduct> = [
    {
        id: 1,
        cartId: 1,
        promo: false,
        name: "Café",
        price: 10,
        size: sizes.S,
        origin: 'India',
        image: 'image.png',
        description: 'lo mejor de la cosecha',
        category: categories.coffee,
    },

    {
        id: 2,
        cartId: 2,
        promo: false,
        name: "Té",
        price: 10,
        size: sizes.S,
        origin: 'India',
        image: 'image.png',
        description: 'lo mejor de la cosecha',
        category: categories.tea,
    },
];
const cartId = 0;

describe('Given the HomePage component', () => {
    describe('When calling it', () => {
        beforeEach(() => {
            (useSelector as jest.Mock).mockImplementation(() => products);
            // (useSelector as jest.Mock).mockImplementation(() => cart);
            // (useSelector as jest.Mock).mockImplementation(() => cartId);
        });
        afterEach(() => {
            (useSelector as jest.Mock).mockClear();
        });
        test('It should render the redux store data', () => {
            const preloadedState: iState = {
                products: [] as Product[],
                cart: [] as cartProduct[],
                cartId: 0 as number
            };
            render(
                <BrowserRouter>
                    <HomePage />
                </BrowserRouter>,
                { preloadedState, store }
            );
            const testElement = screen.getByText(/Café/i);
            expect(testElement).toBeInTheDocument();
            const testElement2 = screen.getByText(/Té/i);
            expect(testElement2).toBeInTheDocument();
        });
    });
});
