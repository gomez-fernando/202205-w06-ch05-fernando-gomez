import { Menu } from './menu';
import { aMenuItems } from '../../interfaces/menu-items';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../reducers/chart/action.creators'
import { iState, store } from '../../store/store';

export function Header({ options }: { options: aMenuItems }) {
   

    const chart = useSelector((state: iState) => state.chart);

    console.log(chart);

    const title = 'ISDI - Coffee';
    return (
        <>
            <header className="header">
                <h1>{title}</h1>
                <Menu options={options}></Menu>
            </header>

            <div className="chat info">
                <p>
                    {
                        JSON.stringify(chart)
                    }
                </p>
            </div>
        </>

        
    );
}
