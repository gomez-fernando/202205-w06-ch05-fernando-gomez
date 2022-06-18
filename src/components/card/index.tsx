import { Product } from "../../models/product";
// import { useDispatch } from "react-redux";
// import * as actions from "../../reducers/product.reducer";

export function Card({ product }: { product: Product }) {
    // const dispatch = useDispatch();

    // const handleChange = () => {
    //     dispatch(actions.updateproductactionstion(product));
    //     // toggleComplete(product.id);
    // };

    // const handleClick = () => {
    //     // deleteproduct(product.id);
    //     dispatch(actions.deleteproductAction(product));
    // };

    return (
        <>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            {/* <label htmlFor="completed">Añadir al carrito</label>
            <input
                checked={product.isCompleted}
                type="checkbox"
                name="isCompleted"
                id="completed"
                onChange={handleChange}
            /> */}
            {/* <button onClick={handleClick}>Delete</button> */}
        </>
    );
}
