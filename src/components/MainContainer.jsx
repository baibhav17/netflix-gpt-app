import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoTrailer from './VideoTrailer';

const MainContainer = () => {
    const movieData = useSelector(store => store.nowPlaying?.movieList)
    if(!movieData) return;

    const mainMovie = movieData[0];
    const {original_title, overview, id} = mainMovie
 
    return ( 
        <div className=''>
            <VideoTitle
                original_title={original_title}
                overview={overview}
            />
            <VideoTrailer
                movieId={id}
            />
        </div>
     );
}
 
export default MainContainer;