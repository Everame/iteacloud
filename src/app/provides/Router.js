import { Navigate, createBrowserRouter } from 'react-router-dom'
import AuthPage from '../../pages/AuthPage/AuthPage.jsx'
import Homepage from '../../pages/Homepage/Homepage.jsx'
import NotFound from '../../pages/404/404.jsx'
import RequireAuth from './../../entities/RequireAuth/AuthRouter'

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <RequireAuth element={Homepage} />,
    },
    {
        path: '/auth',
        element: <AuthPage />,
    },
    {
        path: '/404',
        element: <NotFound />,
    },
    {
        path: '*',
        element: <Navigate to="/404" replace />,
    },
])
