import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='p-5'>
                <Link className='mx-3 text-lg font-semibold hover:bg-red-300 px-3 py-2 rounded-md' to='/'>Home</Link>

                <Link className='mx-3 text-lg font-semibold hover:bg-red-300 px-3 py-2 rounded-md' to='/login'>Login</Link>

                <Link className='mx-3 text-lg font-semibold hover:bg-red-300 px-3 py-2 rounded-md' to='/register'>Register</Link>
            </nav>
        </div>
    );
};

export default Header;