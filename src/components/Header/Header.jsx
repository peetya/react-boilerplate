import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
    <div className="app-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">My App</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/test">Test</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
);

export default Header;
