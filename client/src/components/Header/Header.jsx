import React from 'react';
import './Header.scss';

function Header() {
    return (
        <header className='bar'>
            <div className='bar__box'>
                <h1 className='bar__title'><span className='bar__slant'>ZONE DANGER ZONE </span>DANGER ZONE <span className='bar__slant'>DANGER ZONE DANGER</span></h1>
            </div>
        </header>
    )
}

export default Header;