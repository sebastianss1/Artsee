import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = ({ currentUser, logout, popUpModal }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <button className="login-submit-header" onClick={() => popUpModal('login')}>Login</button> &nbsp; &nbsp;
            <button className="signup-submit" onClick={() => popUpModal('signup')}>Sign Up</button>
        </nav>
    );
    const personalWelcome = () => (
        <hgroup className="header-group">
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalWelcome(currentUser, logout) : sessionLinks();
};


export default Welcome;
