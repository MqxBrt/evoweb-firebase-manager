import { useAuth } from '../context';
import { Navigate, Outlet } from 'react-router-dom';


const GuestGuard = () => {
    const { currentUser } = useAuth();

    return (
        currentUser == null
            ? <Outlet />
            : <Navigate to='/' />
    )
}

export default GuestGuard;