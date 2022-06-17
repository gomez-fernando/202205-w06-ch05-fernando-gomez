import { Link } from 'react-router-dom';
import { aMenuItems } from '../../interfaces/menu-items';

export function Menu({ options }: { options: aMenuItems }) {
    return (
        <nav>
            <ul>
                {options.map((item) => (
                    <li key={item.label}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
