import {configureStore} from '@reduxjs/toolkit';
import moviesReducer from './slice';


export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        moviesDetails: moviesReducer,
        moviesFavorite: moviesReducer,
        loadingMovies: moviesReducer
    }
})