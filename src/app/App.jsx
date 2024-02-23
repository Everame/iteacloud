import { RouterProvider } from 'react-router'
import { Router } from './router/Router'
import './index.css'

export default function App() {
    return (
        <div>
            <RouterProvider router={Router} />
        </div>
    )
}
