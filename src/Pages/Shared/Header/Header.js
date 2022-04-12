import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="#">Navbar</Link>
                <div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link text-white" to="/">Home</Link>
                        <Link className="nav-link text-white" to="services">Services</Link>
                        <Link className="nav-link text-white" to="/about">About</Link>
                        <Link className="nav-link text-white" to="/signin" >Sign In</Link>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;