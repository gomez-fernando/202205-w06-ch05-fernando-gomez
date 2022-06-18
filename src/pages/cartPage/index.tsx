import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cartProduct } from "../../models/cartProduct";
import * as cartActions from '../../reducers/cart/action.creators';
import { iState } from "../../store/store";

export default function CartPage(){
    const  obj  = useParams();
    const id = Number(obj.id);
    const dispatch = useDispatch();

    const cart = useSelector((state: iState) => state.cart);

   console.log(cart);

   let totalBought = 0;

   cart.map(item => totalBought += item.price)

   function deleteFromCart(item: cartProduct): void {
        dispatch(cartActions.deleteProductAction(item))
   }


    return (
        <div className="cart">
            <h1>Productos en tu carrito</h1>

            <ul>
                {cart.map(item => (
                    <li key={item.cartId}>
                        <span>{item.name}</span> 
                        <span>Precio {item.price} €</span>
                        <span>
                            <button
                                onClick={() => {deleteFromCart(item)}}
                            >
                                Eliminar
                            </button>
                        </span>
                    </li>
                ))}
            </ul>

            <p>
                Total: {totalBought} €
            </p>
        
        </div>
    )
}
