import { Navigate } from 'react-router'

const RequireAuth = ({ element: Component }) => {
    const token = sessionStorage.getItem('AccessToken')

    return token ? <Component /> : <Navigate to="/auth" replace />
}

export default RequireAuth
