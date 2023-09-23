import { createBrowserRouter } from 'react-router-dom'
import App from './App';
import {
    Auth,
    Main,
    Orders,
} from './components/page';

const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            { path: '/', element: <Auth /> },
            { path: '/admin/dashboard', element: <Main /> },
            { path: '/admin/orders', element: <Orders /> },
        ]
    },
]);

export default router

