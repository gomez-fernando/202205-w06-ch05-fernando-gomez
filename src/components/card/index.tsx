import { Link } from "react-router-dom";
import { Product } from "../../models/product";
import styles from './index.module.css';
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
        <div className={styles.card}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>

            <Link to={`/details/${product.id}`}>
                <img
                    className="card-image"
                    src={product.image}
                    alt={product.name}
                />
            </Link>
            
            {/* <label htmlFor="completed">Añadir al carrito</label>
            <input
                checked={product.isCompleted}
                type="checkbox"
                name="isCompleted"
                id="completed"
                onChange={handleChange}
            /> */}
            {/* <button onClick={handleClick}>Delete</button> */}
        </ div>
    );
}
