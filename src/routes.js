import { Navigate } from "react-router-dom";
import AuthGuard from "./auth/guards/authGuard";
import GuestGuard from "./auth/guards/guestGuard";

import Login from "./pages/login";
import Home from "./pages/home";


const routes = [
    {
        path: "/",
        element: <AuthGuard />,
        children: [
            {
                path: '',
                element: <Home />
            }
        ]
    },
    {
        path: "/",
        element: <GuestGuard />,
        children: [
            {
                path: 'login',
                element: <Login />
            }
        ]
    },
    {
        path: "*",
        element: <Navigate to='/' />,
    }
];

export { routes };