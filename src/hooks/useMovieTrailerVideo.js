import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/store/nowPlayingSlice";
import { API_OPTIONS } from "../utils/constant";

const useMovieTrailerVideo = (movieId) => {
    const [movieTrailer, setMovieTrailer] = useState([])
    const disptach = useDispatch();
    const fetchMovieTrailer = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS)
        const data = await res.json();
        const trailerData = data.results.filter((item) => item.type == 'Trailer')
        setMovieTrailer(trailerData[1])
        disptach(addMovieTrailer(trailerData[0]))

    }
    useEffect(() => {
        fetchMovieTrailer()
    }, [])
}

export default useMovieTrailerVideo