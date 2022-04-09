import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from "firebase/auth";
import app from '../../firebase.init'

const auth = getAuth(app);

const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2 className='text-3xl'>This is Home</h2>
            <h3 className='text-2xl'>{user?.displayName}</h3>
        </div>
    );
};

export default Home;