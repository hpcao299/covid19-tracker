import { Navigate } from 'react-router-dom';
import NewsPage from './News';
import VietnamPage from './Vietnam';
import WorldPage from './World';

const routes = [
    { path: '/', element: <Navigate to="/vietnam" /> },
    { path: '/vietnam', element: <VietnamPage /> },
    { path: '/world', element: <WorldPage /> },
    { path: '/news', element: <NewsPage /> },
];

export default routes;
