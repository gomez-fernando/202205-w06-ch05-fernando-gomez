import { Menu } from './menu';
import { aMenuItems } from '../../interfaces/menu-items';

export function Header({ options }: { options: aMenuItems }) {
    const title = 'ISDI - Coffee';
    return (
        <header className="header">
            <h1>{title}</h1>
            <Menu options={options}></Menu>
        </header>
    );
}
