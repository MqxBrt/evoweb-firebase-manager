import React from 'react';
import { useAuth } from '../auth/context';
import { doSignOut } from '../auth';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const { currentUser } = useAuth();
    const navigate = useNavigate();

    return (
        <div>
            <div className='text-2xl font-bold pt-14'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</div>
            <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='text-sm text-blue-600 underline'>Logout</button>
        </div>
    )
}