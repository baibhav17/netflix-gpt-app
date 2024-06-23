import React from 'react';

const LoginFooter = () => {
    return ( 
        <div className='absolute px-8 py-3 bottom-[0%] w-[100%] h-[150px] grid content-around text-white bg-black/70 z-10'>
            <p>Questions? call 000-800-919-1694</p>
            <div>
                <ul className='flex flex-wrap'>
                    <li className='w-3/12 my-4'>FAQ</li>
                    <li className='w-3/12 my-4'>Help Center</li>
                    <li className='w-3/12 my-4'>Terms of Use</li>
                    <li className='w-3/12 my-4'>Privacy</li>
                    <li className='w-3/12 my-4'>Cookie Preference</li>
                    <li className='w-3/12 my-4'>Corporate Information</li>
                </ul>
            </div>
        </div>
     );
}
 
export default LoginFooter;