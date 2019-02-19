import React from 'react';
import './style.css';

const Header = ({ children }) => (
    <header>
        <div className="header--item">
            <div className="header--item--input-wrapper">
                {children}
            </div>
        </div>
        <div className="header--item">
            <div className="header--item--logo" />
        </div>
        <div className="header--item" />
    </header>
);

export default Header;