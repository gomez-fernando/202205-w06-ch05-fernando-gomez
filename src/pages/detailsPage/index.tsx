import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSyntheticLeadingComments } from "typescript";
import { cartProduct } from "../../models/cartProduct";
import * as cartActions from '../../reducers/cart/action.creators';
import * as idActions from '../../reducers/cartId/action.creators';
import { productReducer } from "../../reducers/products/product.reducer";
import { HttpStoreProducts } from "../../services/http.store.product";
import { iState } from "../../store/store";

export default function DetailsPage(){
    const  obj  = useParams();
    const id = Number(obj.id);
    const dispatch = useDispatch();

    const product = useSelector((state: iState) => state.products)
                        .filter(product => product.id === id)[0];
    const cartId = useSelector((state: iState) => state.cartId)

    const inCartProducts = useSelector((state: iState) => state.cart)
                            .filter(product => product.id === id).length;

    console.log(inCartProducts);
    console.log(product.stock);



    function addToCart(){
        if(product.stock > inCartProducts){
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
    
    
            dispatch(idActions.idIncrement());
        } else {
            alert('Lo sentimos, ya no quedan unidades en stock');
        }
       
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
                onClick={addToCart}
            >
                Añadir al carrito
            </button>
        
        </div>
    )
}
