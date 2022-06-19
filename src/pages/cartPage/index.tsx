import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartProduct } from "../../models/cartProduct";
import * as cartActions from '../../reducers/cart/action.creators';
import * as prodActions from '../../reducers/products/action.creators'
import { HttpStoreProducts } from "../../services/http.store.product";
import { iState } from "../../store/store";

export default function CartPage(){
    const dispatch = useDispatch();
    const httpStore = useMemo(() => new HttpStoreProducts(), []) ;


    const cart = useSelector((state: iState) => state.cart);
    const products = useSelector((state: iState) => state.products);

   console.log(cart);

   let totalBought = 0;

   cart.map(item => totalBought += item.price)

   function deleteFromCart(item: cartProduct): void {
        dispatch(cartActions.deleteProductAction(item))
   }

   const buy = () => {
    dispatch(cartActions.loadProductsAction([]))
    cart.forEach((item) => {
        products.forEach(prod => {
            if (prod.id === item.id){
                console.log(prod.stock);

                dispatch(prodActions.updateProductAction({...prod, stock: 0}))
                // dispatch(prodActions.deleteProductAction(prod))
            }
        })
    })
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
                Total: {totalBought.toFixed(2)} €
            </p>
            <span>
                <button
                    onClick={buy}
                >
                    Comprar..
                </button>
            </span>
        
        </div>
    )
}
