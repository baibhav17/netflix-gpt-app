import React from 'react';

const VideoTitle = ({original_title, overview}) => {
    return ( 
        <div className='w-screen aspect-video bg-gradient-to-r from-black pt-[30%] px-12 absolute'>
            <h1 className='text-6xl text-white font-bold'>{original_title}</h1>
            <p className='py-6 text-lg w-1/4 text-white'>{overview}</p>
            <div>
                <button className='bg-gray-500 text-black p-4 px-12 text-xl bg-white hover:bg-opacity-80 rounded-xl'>▶️Play</button>
                <button className='mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-xl'>More Info</button>

            </div>
        </div>
     );
}
 
export default VideoTitle;