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
            { path: '/admin-panel/auth', element: <Auth /> },
            { path: '/admin-panel/admin/dashboard', element: <Main /> },
            { path: '/admin-panel/admin/orders', element: <Orders /> },
        ]
    },
]);

export default router