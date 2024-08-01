import React, { useEffect } from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/store/userSLice';


const LoginHeader = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const userDetails = useSelector(store => store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {
           
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid, displayName, email} = user;
              dispatch(addUser({uid, displayName, email}))
              navigate('/browse')
              // ...
            } else {
                dispatch(removeUser())
                navigate('/')
              // User is signed out
              // ...
            }
          });

          return () => unsubscribe();
    },[])

    return (
        <div className='absolute w-screen justify-between flex px-8 py-3 bg-gradient-to-b from-black z-10'>
            {/* <span className='w-44' >
                Not A Netflix
            </span> */}
            <img
                className='w-44'
                src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
                alt='netflix-logo'
            />
            {userDetails && <div className='flex items-start justify-between'>
                <img
                    src='https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABb7kuX9mKPrFGfvZ0oJ9eMBbFCB7ZhumT7uHIoILp1FtGpeIhybv8zoGgNK76rr7N8bMdhn-kkbRnD6ut8mFLwqYXmdpwCw.png?r=eea'
                    alt='user-icon'
                    className='w-[20%] h-[30%] mx-2'
                />
                <span className='text-gray-300 font-bold mx-2'>{userDetails?.displayName}</span>
                <button className='cursor-pointer mx-2 text-white' onClick={handleSignOut}>Sign Out</button>
            </div>}
        </div>
    );
}

export default LoginHeader;