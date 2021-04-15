import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    //isOpen state is used to trigger the menu on mobile or tablet devices
    const [isOpen, setOpen] = useState(false);
    return(
        <nav
            className="navbar is-primary"
            role="navigation"
            aria-label="main-navigation"
        >
            <div className="container">
                <div className="navbar-brand">
                    <a
                        role="button"
                        className={`navbar-burger burger ${isOpen && "is-active"}`}
                        aria-label="menu"
                        aria-expanded="false"
                        onClick={() => setOpen(!isOpen)}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className={`navbar-menu ${isOpen && "is-active"}`}>
                    <div className="navbar-start">
                        <NavLink 
                        className="navbar-item" 
                        activeClassName="is-active" 
                        to="/"
                        >
                            Home
                        </NavLink>

                        <NavLink
                            className="navbar-item"
                            activeClassName="is-active"
                            to="/current-stages"
                        >
                            Current Stages
                        </NavLink>

                        <NavLink
                            className="navbar-item"
                            activeClassName="is-active"
                            to="/demo-free-trial"
                        >
                            Demo
                        </NavLink>

                        <NavLink
                            className="navbar-item"
                            activeClassName="is-active"
                            to="/contact"
                        >
                            Contact
                        </NavLink>

                        <NavLink
                            className="navbar-item"
                            activeClassName="is-active"
                            to="/about"
                        >
                            About
                        </NavLink>

                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-white">Log in</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;