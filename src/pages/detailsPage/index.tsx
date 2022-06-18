import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as cartAcions from '../../reducers/cart/action.creators';
import { productReducer } from "../../reducers/products/product.reducer";
import { iState } from "../../store/store";

export default function DetailsPage(){
    const  obj  = useParams();
    const id = Number(obj.id);
    const dispatch = useDispatch();

    const product = useSelector((state: iState) => state.products)
                        .filter(product => product.id === id)[0];

    function addToCart(){
        dispatch(cartAcions.addProductAction(product));
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
