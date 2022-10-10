import {useRoutes} from "react-router-dom";
import {Home} from "../../Home";
import Test from "../../Home/pages/Test";


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
        {
            path: '/test',
            element: <Test/>,
        },
    ])
}