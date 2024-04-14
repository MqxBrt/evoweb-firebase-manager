import { useAuth } from '../context';
import { Navigate, Outlet } from 'react-router-dom';


const GuestGuard = () => {
    const { userLoggedIn } = useAuth();

    return (
        !userLoggedIn
            ? <Outlet />
            : <Navigate to='/' />
    )
}

export default GuestGuard;