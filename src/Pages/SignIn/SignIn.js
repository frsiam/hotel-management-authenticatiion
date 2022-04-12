import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase.init';

const SignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()
    const [registered, setRegistered] = useState()

    const handleGoogleLogIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(res => {
            const user = res.user;
            console.log('from google')
            console.log(user)
        })
        .catch(error => {
            console.error(error)
        })
    }
    const handleGithubLogIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(res => {
            const user = res.user;
            console.log('from github')
            console.log(user)
        })
        .catch(error => {
            console.error(error)
        })
    }

    const handleEmail = event => {
        console.log(event.target.value);
    }
    const handlePassword = event => {
        console.log(event.target.value);
    }
    const handleFormSubmit = event => {
        console.log('form submit');
        event.preventDefault();
    }
    const handleRegistered = event => {
        console.log(event.target.checked)
        setRegistered(event.target.checked)
    }
    return (
        <div className='container mt-5'>
            <div className='w-50 mx-auto border border-2 border-warning p-5'>
                <div className='bg-info border-0 rounded text-center py-1 mb-3'>
                    <h2>Sign In</h2>
                </div>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input onChange={handleRegistered} type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label">Create an account</label>
                    </div>
                    <div className='text-center'>
                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                    </div>
                </form>
                <div className='d-flex justify-content-center mt-1'>
                    <div className='w-25'><hr /></div>
                    <div className='mx-3'><span>or</span></div>
                    <div className='w-25'><hr /></div>
                </div>
                <div className='my-1 text-center'>
                    <button onClick={handleGoogleLogIn} className='btn btn-secondary w-100'>Sign In with Google</button>
                </div>
                <div className='my-2 text-center'>
                    <button onClick={handleGithubLogIn} className='btn btn-dark w-100'>Sign In with GitHub</button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;