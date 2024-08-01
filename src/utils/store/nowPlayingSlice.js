import { createSlice } from "@reduxjs/toolkit";

const nowPlayingSlice = createSlice({
    name: 'nowPlayingSlice',
    initialState: {
        movieList:null,
        movieTrailer: null
    },
    reducers: {
        addMovies: (state, action) => {
            // state.movieList = action.payload
            state.movieList = action.payload
        },
        addMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload
        }
    }
})

export const { addMovies, addMovieTrailer } = nowPlayingSlice.actions;

export default nowPlayingSlice.reducer;