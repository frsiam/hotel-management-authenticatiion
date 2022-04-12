import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log(user)
        })
        .catch((error) => {
            console.error(error)    
        });
    }
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
                            <Link className="nav-link text-white" to="/signin" >{user ? <button onClick={handleSignOut} className='btn btn-danger'>Sign Out</button> : 'Sign In'}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;