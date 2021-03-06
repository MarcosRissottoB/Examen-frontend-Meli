import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
    return (
        <header className="container-header">   
            <Link to={'/'}>
                <img src="/img/logo.png" alt="Logo imagen"/>
            </Link>
        </header>
    )
}

export default Header;
