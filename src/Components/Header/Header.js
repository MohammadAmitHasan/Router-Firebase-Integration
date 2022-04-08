import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <Link className='ml-3 text-none' to='/'>Home</Link>
                <Link className='ml-3' to='/login'>Login</Link>
            </nav>
        </div>
    );
};

export default Header;