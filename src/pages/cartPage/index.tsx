import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Product } from "../../models/product";
import * as cartAcions from '../../reducers/cart/action.creators';
import { productReducer } from "../../reducers/products/product.reducer";
import { iState } from "../../store/store";

export default function CartPage(){
    const  obj  = useParams();
    const id = Number(obj.id);
    const dispatch = useDispatch();

    const cart = useSelector((state: iState) => state.cart);

   console.log(cart);

   let totalBought = 0;

   cart.map(item => totalBought += item.price)

   function deleteFromCart(item: Product): void {
        dispatch(cartAcions.deleteProductAction(item))
   }


    return (
        <div className="cart">
            <h1>Productos en tu carrito</h1>

            <ul>
                {cart.map(item => (
                    <li key={item.id}>
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
