import { useDispatch } from "react-redux"
import { addMovies } from "../utils/store/nowPlayingSlice"
import { useEffect, useState } from "react"
import { API_OPTIONS } from "../utils/constant"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const [movieData, setMovieData] = useState(null)

    const fetchMovieData = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc', API_OPTIONS)
            const data = await response.json();
            // if (data) {
                setMovieData(data)
                dispatch(addMovies(data.results))
            // }
        } catch (error) {
            console.log('something bad happened...')
        }
    }

    useEffect(() => {
        fetchMovieData();
    }, [])
}

export default useNowPlayingMovies