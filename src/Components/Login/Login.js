import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from "firebase/auth";
import app from '../../firebase.init'
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true });
            })
    }

    return (
        <div>
            <form className='mx-auto p-3 bg-slate-600 w-80 rounded-md'>
                <h3 className='text-2xl text-yellow-50 font-semibold my-4'>Please Login</h3>

                <input className='border-2 p-2 m-2 rounded-md' type="email" placeholder='Your Email Address' />
                <br />

                <input className='border-2 p-2 m-2 rounded-md' type="password" placeholder='Password' />
                <br />

                <button type="submit" className='bg-blue-300 px-3 py-2 text-xl rounded-lg hover:bg-blue-200'>Login</button>

                <hr className='text-white my-2' />

            </form>
            <button onClick={handleGoogleSignIn} className='bg-teal-500 text-xl my-2 p-2 rounded-md hover:bg-teal-300'>Sign In Using Google</button>
        </div>
    );
};

export default Login;