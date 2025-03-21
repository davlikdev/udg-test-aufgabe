import React from 'react';
import c from './header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={c}>
            <nav>
                <NavLink className={c.link} to={'/home'}>Home</NavLink>
                <NavLink className={c.link} to={'/table'}>Table</NavLink>
                <NavLink className={c.link} to={'/charts'}>Charts</NavLink>
            </nav>
        </header>
    );
};

export default Header;