import { Navigate } from 'react-router-dom';
import VietnamPage from './Vietnam';

const routes = [
    { path: '/', element: <Navigate to="/vietnam" /> },
    { path: '/vietnam', element: <VietnamPage /> },
];

export default routes;
