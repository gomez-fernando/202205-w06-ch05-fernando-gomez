import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HttpStoreProducts } from "../services/http.store.product";
import { iState } from "../store/store";
import * as actions from '../reducers/action.creators'

export default function HomePage(){

    const products = useSelector((state: iState) => state.products);
    const dispatch = useDispatch();
    const httpStore = useMemo(() => new HttpStoreProducts(), []) ;

    // const navigate = useNavigate();

    useEffect(() => {
        httpStore.getProducts().then((products) => {
            dispatch(actions.loadProductsAction(products));
            console.log(products);
        })

    }, [dispatch, httpStore]);

    // const handleNavigate = () => {
    //     navigate('/chart');
    // };

    return (
        <h1>Home page</h1>
    )
}

// export default HomePage;