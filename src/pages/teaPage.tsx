import { useSelector } from "react-redux";
import { List } from "../components/list";
import { categories } from "../models/product";
import { iState } from "../store/store";

export default function TeaPage(){
    const products = useSelector((state: iState) => state.products)
    .filter(product => product.category === categories.tea);

    return (
        <>
            <h1>Nuestros tés</h1>

            <List products={products} />
        </>
    )
}
