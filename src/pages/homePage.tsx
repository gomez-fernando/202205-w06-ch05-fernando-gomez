import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { iState } from "../store/store";
import * as actions from '../reducers/action.creators'
import { HttpStoreProducts } from "../services/http.store.product";
import { List } from "../components/list";

export default function HomePage(){

    const products = useSelector((state: iState) => state.products);
    const dispatch = useDispatch();
    const httpStore = useMemo(() => new HttpStoreProducts(), []) ;

    useEffect(() => {
        httpStore.getProducts().then((resp) => {
            dispatch(actions.loadProductsAction(resp));
            console.log(products);
            console.log(resp);
        })

    }, [dispatch, httpStore]);

    return (
        <>
            <h1>Nuestras ofertas</h1>

            <List />
        </>
    )
}
