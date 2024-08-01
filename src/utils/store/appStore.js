import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSLice';
import nowPlayingSliceReducer from './nowPlayingSlice';

const appStore = configureStore(
    {
        reducer:{
            user: userReducer,
            nowPlaying: nowPlayingSliceReducer,
        }
    }
)
 
export default appStore