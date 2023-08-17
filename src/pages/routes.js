import { Navigate } from 'react-router-dom';
import NewsPage from './News';
// import VietnamPage from './Vietnam';
import ErrorVietnamPage from './ErrorVietnam';
import WorldPage from './World';

const routes = [
    { path: '/', element: <Navigate to="/vietnam" /> },
    { path: '/vietnam', element: <ErrorVietnamPage /> },
    { path: '/world', element: <WorldPage /> },
    { path: '/news', element: <NewsPage /> },
    { path: '*', element: <Navigate to="/vietnam" /> },
];

export default routes;
