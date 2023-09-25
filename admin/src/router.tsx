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
            { path: '/admin-panel/', element: <Auth /> },
            { path: '/admin-panel/main', element: <Main /> },
            { path: '/admin-panel/orders', element: <Orders /> },
        ]
    },
]);

export default router