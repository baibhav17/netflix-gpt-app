import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailerVideo from '../hooks/useMovieTrailerVideo';

const VideoTrailer = ({ movieId }) => {
    // const [movieTrailer, setMovieTrailer] = useState([])
    // const disptach = useDispatch();
    // const fetchMovieTrailer = async () => {
    //     const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS)
    //     const data = await res.json();
    //     const trailerData = data.results.filter((item) => item.type == 'Trailer')
    //     setMovieTrailer(trailerData[0])
    //     disptach(addMovieTrailer(trailerData[0]))

    // }
    // useEffect(() => {
    //     fetchMovieTrailer()
    // }, [])

    useMovieTrailerVideo(movieId);
    const movieTrailerVideo = useSelector(store=>store.nowPlaying?.movieTrailer?.key)
    // if (!movieTrailer) return;
    return (
        <div className='w-screen aspect-video'>
            {/* <iframe 
            width="560" 
            height="315" 
            src={`https://www.youtube.com/embed/${movieTrailer.key}?si=VhbE07flp5rFuJtF`}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen /> */}
            <iframe
            className='w-screen aspect-video' 
            src={`https://www.youtube.com/embed/${movieTrailerVideo}?si=VhbE07flp5rFuJtF?&autoplay=1&mute=1`}
            title="YouTube video player"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen />
        </div>
    );
}

export default VideoTrailer;