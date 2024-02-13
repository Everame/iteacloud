import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import AuthPage from "../../pages/AuthPage/AuthPage";
import RequireAuth from "../api/AuthRouter";
import Homepage from "../../pages/Homepage/Homepage";
import NotFound from "../../pages/404/404";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <RequireAuth element={Homepage} />
    },
    {
        path: '/auth',
        element: <AuthPage/>
    },
    {
        path: '/404',
        element: <NotFound/>
    },
    {
        path: '*',
        element: <Navigate to="/404" replace />
    }
])