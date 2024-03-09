import { RouterProvider } from 'react-router'
import './index.css'
import { Router } from './router/Router'

export default function App() {
    return (
        <div>
            <RouterProvider router={Router} />
        </div>
    )
}
