import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import { Layout } from '../components/core/layout';
import { aMenuItems } from '../interfaces/menu-items';
import * as React from 'react';
import { iState } from '../store/store';
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HttpStoreProducts } from '../services/http.store.product';
import * as actions from '../reducers/action.creators'


function App() {
    const products = useSelector((state: iState) => state.products);
    const dispatch = useDispatch();
    const httpStore = useMemo(() => new HttpStoreProducts(), []) ;

    useEffect(() => {
        httpStore.getProducts().then((resp) => {
            dispatch(actions.loadProductsAction(resp));
            // console.log(products);
            console.log(resp);
        })

    }, [dispatch, httpStore]);

    console.log(products);


    
    const HomePage = React.lazy(() => import('../pages/homePage'));
    const CoffePage = React.lazy(() => import('../pages/coffeePage'));
    const TeaPage = React.lazy(() => import('../pages/teaPage'));
    const DetailsPage = React.lazy(() => import('../pages/detailsPage'));

    const options: aMenuItems = [
        { path: '', label: 'Home - Ofertas', page: <HomePage /> },
        { path: 'coffee', label: 'Cafés', page: <CoffePage /> },
        { path: 'tea', label: 'Tés', page: <TeaPage /> },
        { path: 'details/:id', label: 'Producto', page: <DetailsPage /> },
        { path: '*', label: '', page: <Navigate replace to="" /> },
    ];

    return (
        <Router>
            <Layout options={options}>
                <React.Suspense>
                    <Routes>
                        {options.map((item) => (
                            <Route
                                key={item.label}
                                path={item.path}
                                element={item.page}
                            ></Route>
                        ))}
                    </Routes>
                </React.Suspense>
            </Layout>
        </Router>
    );
}

export default App;
