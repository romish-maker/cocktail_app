import {useRoutes} from "react-router-dom";
import {Home} from "../../Home";


export function MainRoutes () {
    return useRoutes([
        {
            path: '/home',
            element: <Home/>,
        },
        {
            path: '*',
            element: <h1>Not found</h1>,
        },
    ])
}