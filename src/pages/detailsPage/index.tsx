import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cartProduct } from "../../models/cartProduct";
import * as cartActions from '../../reducers/cart/action.creators';
import * as idActions from '../../reducers/cartId/action.creators'
import { productReducer } from "../../reducers/products/product.reducer";
import { iState } from "../../store/store";

export default function DetailsPage(){
    const  obj  = useParams();
    const id = Number(obj.id);
    const dispatch = useDispatch();

    const product = useSelector((state: iState) => state.products)
                        .filter(product => product.id === id)[0];
    const cartId = useSelector((state: iState) => state.cartId)

    function addToCart(){
        dispatch(cartActions.addProductAction({...new cartProduct(
            product.price, 
            product.name, 
            product.size,
            product.origin,
            product.image,
            product.description,
            product.category,
            product.id,
            cartId + 1,
            product.promo
             )}));

        dispatch(idActions.idIncrement(cartId));
    }


    return (
        <div className="details">
            <h1>{product.name}</h1>

            <p>{product.description}</p>

            <img
                className=""
                src={product.image}
                alt={product.name}
            />

            <button
                onClick={() => addToCart()}
            >
                Añadir al carrito
            </button>
        
        </div>
    )
}
