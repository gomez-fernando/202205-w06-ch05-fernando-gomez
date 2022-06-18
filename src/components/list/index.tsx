import { useSelector } from "react-redux";
import { iState } from "../../store/store";
import { Card } from "../card";

export function List() {
    // const products = useSelector((state: iState) => state.products);
    const products = useSelector((state: iState) => state.products)
                        .filter(product => product.promo === true);

    return (
        <>
            <p>Context-list</p>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Card product={product} />
                        
                    </li>
                ))}
            </ul>
        </>
    );
}
