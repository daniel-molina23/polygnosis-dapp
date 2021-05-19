import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import { SignOutButton } from "../auth";
import styled from 'styled-components';


const Spacer = styled.div`
    margin-left: 10px;
`


export const SignInButton = () => {
    return (
        <div className="buttons">
            <Link to="/sign-in" className="btn btn-primary">
                <a className="button is-white">
                    Sign In
                </a>
            </Link>
        </div>
    )
}

export const SignUpButton = () => {
    return (
        <div className="buttons">
            <Link to="/create-account" className="btn btn-primary">
                <a className="button is-white">
                    Sign Up
                </a>
            </Link>
        </div>
    )
}

export const CombinedSignInAndSignUp = () => {
    return (
        <div>
            <SignInButton />
            <Spacer />
            <SignUpButton />
        </div>
    );
};

const Navbar = ({ isAuthed }) => {
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
                            to="/explore"
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
                            {
                                isAuthed?
                                <SignOutButton /> :
                                <CombinedSignInAndSignUp />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};


export default Navbar;