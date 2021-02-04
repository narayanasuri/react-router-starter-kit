import React from 'react';
import './_navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const navStyle = {
        color: 'white',
        minWidth: '100px',
        textDecoration: 'none'
    };

    return (
        <nav>
            <h3>Fortnite</h3>
            <ul className='navlinks'>
                <Link style={navStyle} to='/'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/shop'>
                    <li>Shop</li>
                </Link>
                <Link style={navStyle} to='/about'>
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;