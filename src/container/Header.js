import React from 'react';
import '../style/scss/header.scss';
import { Link } from 'react-router-dom';


const Header = () => (
        <div className="logo-wrapper">
            <Link to="/">
                <svg className="logo"></svg>
            </Link>
        </div>
);

export default Header;