import React from 'react'
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'
import { Router } from './app/provides/Router'
import './app/styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={Router} />
    </React.StrictMode>
)