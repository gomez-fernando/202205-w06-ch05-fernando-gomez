import { useSelector } from "react-redux";
import { List } from "../components/list";
import { categories } from "../models/product";
import { iState } from "../store/store";

export default function CoffeePage(){
    const products = useSelector((state: iState) => state.products)
    .filter(product => product.category === categories.coffee);

    return (
        <>
            <h1>Nuestros cafés</h1>

            <List products={products} />
        </>
    )
}
