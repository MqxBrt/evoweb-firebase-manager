import { useAuth } from '../context';
import { Navigate, Outlet } from 'react-router-dom';


const AuthGuard = () => {
    const { userLoggedIn } = useAuth();

    return (
        userLoggedIn
            ? <Outlet />
            : <Navigate to='/login' />
    )
}

export default AuthGuard;