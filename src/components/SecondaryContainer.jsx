import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const SecondaryContainer = () => {
    const movieData = useSelector(store => store.nowPlaying?.movieList)
    console.log('baibhav-movie', movieData)
    return (
        <div className='bg-black -mt-10 relative z-10'>
        <p className=' text-white text-2xl ml-4'>Now Playing</p>
        <div className='w-screen overflow-x-scroll'>
            <div className='flex'>
                {movieData && movieData.map((item) => <MovieCard movieData={item} key={item.id} />)}
            </div>
        </div>
        </div>
        

    );
}

export default SecondaryContainer;