import { createBrowserRouter } from 'react-router-dom'
import App from './App';
import {
    Auth,
} from './components/page';

const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            { path: '/', element: <Auth /> },
        ]
    },
]);

export default router

