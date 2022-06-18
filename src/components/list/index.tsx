import { useSelector } from "react-redux";
import { Product } from "../../models/product";
import { iState } from "../../store/store";
import { Card } from "../card";

export function List({products}: {products: Product[]}) {
   

    return (
        <>
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
