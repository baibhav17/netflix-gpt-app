import React, { useRef, useState } from 'react';
import LoginHeader from './LoginHeader';
import LoginFooter from './LoginFooter';
import { validateEmail, validatePassword } from '../utils/validation';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [userNameError, setUserNameError] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    const handleSignUp = () => {
        setIsSignInForm(!isSignInForm)
    }

    const email = useRef(null)
    const password = useRef(null)
    const userName = useRef(null)

    const handleSubmitBtn = () => {
        const emailValidationResult = validateEmail(email.current.value)
        const passwordValidationResult = validatePassword(password.current.value)
        if(emailValidationResult) {
            setEmailError(emailValidationResult)
        }
        if(passwordValidationResult) {
            setPasswordError(passwordValidationResult)
        }

        if(!isSignInForm && userName.current.value.length == 0) {
            setUserNameError('User Name can not be empty.')
        }
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
                {!isSignInForm && <input ref={userName} onFocus={()=>setUserNameError('')} className='p-4 m-2 w-full bg-gray-700' type='text' placeholder='enter User Name' /> }
                {userNameError && <label className='p-4 text-red-400'>{userNameError}</label>}
                <input 
                    ref={email} 
                    onFocus={()=>setEmailError('')} 
                    className='p-4 m-2 w-full bg-gray-700' 
                    type='text' 
                    placeholder='enter email address' 
                />
                {emailError && <label className='p-4 text-red-400'>{emailError}</label>}
                <input 
                    ref={password} 
                    onFocus={()=>setPasswordError('')} 
                    className='p-4 m-2 w-full bg-gray-700' 
                    type='password' 
                    placeholder='enter password'
                />
                {passwordError && <label className='p-4 text-red-400'>{passwordError}</label>}
                <br />
                <button 
                    className='p-2 m-2 w-full bg-red-500 rounded-lg' 
                    onClick={handleSubmitBtn}
                >
                    {isSignInForm ? 'Sign In' : 'Sign Up'}
                </button>
                <label 
                    onClick={handleSignUp} 
                    className='cursor-pointer'
                >
                    {isSignInForm ? 'New to Netflix? Sign up now' : 'Already a Member? Sign In'}
                </label>
            </form>

            <LoginFooter />
        </div>
    );
}

export default Login;