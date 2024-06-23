import React, { useState } from 'react';
import LoginHeader from './LoginHeader';
import LoginFooter from './LoginFooter';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    const handleSignUp = () => {
        setIsSignInForm(!isSignInForm)
    }

    return (
        <div>
            <LoginHeader />

            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                    alt='background-img-login'
                    className='w-auto'
                />
            </div>
            <form
                className='absolute text-white p-12 bg-black/70 w-3/12 mx-auto my-auto right-0 left-0 top-1/3 sm:top-1/2 md:top-1/4 rounded-lg'
                onClick={handleFormSubmit}
            >
                <h1 className='font-bold text-2xl mx-auto my-2 relative left-[40%] '>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignInForm && <input className='p-4 m-2 w-full bg-gray-700' type='text' placeholder='enter User Name' /> }
                <input className='p-4 m-2 w-full bg-gray-700' type='text' placeholder='enter email address' />
                <input className='p-4 m-2 w-full bg-gray-700' type='password' placeholder='enter password' />
                <br />
                <button className='p-2 m-2 w-full bg-red-500 rounded-lg'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                <label onClick={handleSignUp} className='cursor-pointer'>{isSignInForm ? 'New to Netflix? Sign up now' : 'Already a Member? Sign In'} </label>
            </form>

            <LoginFooter />
        </div>
    );
}

export default Login;