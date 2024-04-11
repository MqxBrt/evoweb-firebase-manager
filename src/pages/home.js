import React from 'react';
import { useAuth } from '../auth/context';
import { doSignOut } from '../auth';
import { useNavigate } from 'react-router-dom';
import '../assets/css/home.css';
import { FiLogOut } from 'react-icons/fi';
import Tables from './tables';

export default function Home() {

    const { currentUser } = useAuth();
    const navigate = useNavigate();

    return (
        <div>
            <div className='toolbarContainer'>
                <div className='toolbar'>
                    <div className='text-2xl font-bold text-white'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</div>
                    <div className='logoutContainer'><FiLogOut onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='logoutBtn' /></div>
                </div>
            </div>
            <Tables />
        </div>
    )
}