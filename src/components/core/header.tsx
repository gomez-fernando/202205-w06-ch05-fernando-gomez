import { Menu } from './menu';
import { aMenuItems } from '../../interfaces/menu-items';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../reducers/cart/action.creators'
import { iState, store } from '../../store/store';
import { Link } from 'react-router-dom';

export function Header({ options }: { options: aMenuItems }) {
   

    const cart = useSelector((state: iState) => state.cart);

    console.log(cart);

    const title = 'ISDI - Coffee';
    return (
        <>
            <header className="header">
                <h1>{title}</h1>
                <Menu options={options}></Menu>
            </header>

            <Link to={`/cart`} >
                    <button>Ver carrito</button>
            </Link>
        </>

        
    );
}
