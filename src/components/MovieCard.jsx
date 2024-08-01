import React from 'react';
import { useSelector } from 'react-redux';

const MovieCard = ({ movieData }) => {
    const moviesList = useSelector(store => store.nowPlaying.movieList)

    const { poster_path, title, release_date, overview, backdrop_path } = movieData
    return (
        <div className='relative mx-4'>
            <img
                src={'https://image.tmdb.org/t/p/original' + backdrop_path}
                alt='movie-poster'
                className='h-[200px] max-w-fit'
            />
            <p className='text-white'>{title}</p>
            {/* <p>release date: {release_date}</p>
            <p>overview: {overview}</p> */}
        </div>
    );
}

export default MovieCard;