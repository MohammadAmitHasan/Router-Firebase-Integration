import React from 'react';
import { Link } from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signOut } from "firebase/auth";
import app from '../../firebase.init'

const auth = getAuth(app);

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <nav className='p-5'>
                <Link className='mx-3 text-lg font-semibold hover:bg-red-300 px-3 py-2 rounded-md' to='/'>Home</Link>

                <Link className='mx-3 text-lg font-semibold hover:bg-red-300 px-3 py-2 rounded-md' to='/register'>Register</Link>

                <Link className='mx-3 text-lg font-semibold hover:bg-red-300 px-3 py-2 rounded-md' to='/products'>Products</Link>

                {
                    user?.uid ?
                        <button className='mx-3 text-lg font-semibold text-red-600 hover:bg-red-600 hover:text-white px-3 py-1 rounded-md' onClick={() => signOut(auth)}>Logout</button>
                        :
                        <Link className='mx-3 text-lg font-semibold hover:bg-red-300 px-3 py-2 rounded-md' to='/login'>Login</Link>
                }

            </nav>
        </div >
    );
};

export default Header;