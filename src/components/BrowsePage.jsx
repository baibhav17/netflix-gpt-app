import React, { useEffect, useState } from 'react';
import BrowseHeader from './BrowseHeader';
import LoginHeader from './Header';
import MovieCard from './MovieCard';
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addMovies } from '../utils/store/nowPlayingSlice';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';

const BrowsePage = () => {
    const dispatch = useDispatch()
    const [movieData, setMovieData] = useState(null)

    useNowPlayingMovies();

    return (
        <div className='grid'>
            <div>
                <LoginHeader />
                <MainContainer />
                <SecondaryContainer />
            </div>
            <div>
                {/* {movieData && movieData.map((item) => <MovieCard movieData={item} key={item.id} />)} */}
            </div>

        </div>
    );
}

export default BrowsePage;