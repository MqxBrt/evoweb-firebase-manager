import { useAuth } from '../context';
import { Navigate, Outlet } from 'react-router-dom';


const AuthGuard = () => {
    const { currentUser } = useAuth();

    return (
        currentUser != null
            ? <Outlet />
            : <Navigate to='/login' />
    )
}

export default AuthGuard;