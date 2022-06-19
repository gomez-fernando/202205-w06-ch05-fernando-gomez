import { useSelector } from "react-redux";
import { List } from "../components/list";
import { iState } from "../store/store";

export default function HomePage(){

    const products = useSelector((state: iState) => state.products)
    .filter(product => product.promo === true);

    console.log(products);

    return (
        <>
            <h1>Nuestras ofertas</h1>

            <List products={products} />
        </>
    )
}
