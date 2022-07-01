import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    movies: [],
    moviesDetails: {},
    moviesFavorite: [],
    loadingMovies: false
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        addMovies:(state, action) => {
            state.movies = action.payload;
        },
        addMoviesDetails:(state, action) => {
            state.moviesDetails = action.payload;
        },
        addMoviesFavorite(state, action) {
            state.moviesFavorite = action.payload;
        },
        addMoviesLoading(state, action) {
            state.loadingMovies = action.payload;
        }
    }
})


export const { addMovies, addMoviesDetails, addMoviesFavorite, addMoviesLoading } = movieSlice.actions;
export const getAllMovies = (state: any) => state.movies.movies
export const getMoviesDetails = (state: any) => state.moviesDetails.moviesDetails
export const getMoviesFavorite = (state: any) => state.moviesFavorite.moviesFavorite
export const getMoviesLoading = (state: any) => state.loadingMovies.loadingMovies
export default movieSlice.reducer;


