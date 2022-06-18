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
// import { HomePage } from '../pages/homePage';
// import { GotContextProvider } from './context/got-provider';
// import { TodoContextProvider } from './context/todo-provider';

function App() {
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
                    {/* <GotContextProvider>
                        <TodoContextProvider> */}
                            <Routes>
                                {options.map((item) => (
                                    <Route
                                        key={item.label}
                                        path={item.path}
                                        element={item.page}
                                    ></Route>
                                ))}
                            </Routes>
                        {/* </TodoContextProvider>
                    </GotContextProvider> */}
                </React.Suspense>
            </Layout>
        </Router>
    );
}

export default App;
