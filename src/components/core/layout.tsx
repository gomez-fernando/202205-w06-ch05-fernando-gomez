import { ReactElement } from 'react';
import { aMenuItems } from '../../interfaces/menu-items';
import { Footer } from './footer';
import { Header } from './header';

export function Layout({
    options,
    children,
}: {
    options: aMenuItems;
    children: ReactElement;
}) {
    return (
        <>
            <Header options={options}></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    );
}