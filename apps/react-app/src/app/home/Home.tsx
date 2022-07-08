import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovies,  addMoviesDetails, addMoviesFavorite, addMoviesLoading } from '../store/slice';
import { getMoviesFavorite, getMoviesLoading } from "../store/slice";
import {Dialog, DialogContent, Popover, Button, Box } from '@material-ui/core';
import MovieList from '../movies/movieList';
import FavoriteList from '../favorites/favoriteList';
import SearchBox from '../search/searchBox';
import Favorites from '../favorites/favorites';
import RemoveFavorites from '../favorites/removeFavorites';
import MovieDetails from '../movies/movieDetails';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import '../app.scss';
import LoadingSpinner from "../loading/loading";

export const Home = () => {
  const [q, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const openPop = Boolean(anchorEl);
  const id = openPop ? 'simple-popover' : '';
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let data: any;
  let api_key: String = '23aaa32';
  const dispatch = useDispatch();
  const favorite = useSelector(getMoviesFavorite);
  const isLoading = useSelector(getMoviesLoading);


    const getMovie = async(q: any) => {
        dispatch(addMoviesLoading(true));
        const result = await fetch(`http://www.omdbapi.com/?s=${q}&apikey=${api_key}`,{
        method: "GET",
            headers: {
                'Host': 'http://localhost:4200',
                'Origin': 'http://localhost:4200',
                'Access-Control-Request-Method': 'GET',
                'Access-Control-Request-Headers': 'Content-Type'
            }
        });
        data = await result.json();
        if (data.Search) {
			dispatch(addMovies(data.Search));
		}
    }

    const getMovieDetail = async(id: any) => {
        dispatch(addMoviesLoading(true));
        const result = await fetch(`http://www.omdbapi.com/?t=${id}&apikey=${api_key}`,{
        method: "GET",
            headers: {
                'Host': 'http://localhost:4200',
                'Origin': 'http://localhost:4200',
                'Access-Control-Request-Method': 'GET',
                'Access-Control-Request-Headers': 'Content-Type'
            }
        });
        data = await result.json();
        if (data) {
			dispatch(addMoviesDetails((data)));
		}
    }

    useEffect(() => {
		getMovie(q);
	}, [q]);

    useEffect(() => {
		const movieFavorites = JSON.parse(localStorage.getItem('react-movie-app-favorites')|| "");
		dispatch(addMoviesFavorite((movieFavorites)));
	}, []);

	const saveToLocalStorage = (items: any) => {
		localStorage.setItem('react-movie-app-favorites', JSON.stringify(items));
	};

	const addFavoriteMovie = (movie: any) => {
		const newFavoriteList: any[] = [...favorite, movie];
		dispatch(addMoviesFavorite((newFavoriteList)));
		saveToLocalStorage(newFavoriteList);
	};

	const removeFavoriteMovie = (movie: any) => {
		const newFavoriteList = favorite.filter(
			(favorite: any) => favorite.imdbID !== movie.imdbID
		);

		dispatch(addMoviesFavorite((newFavoriteList)));
		saveToLocalStorage(newFavoriteList);
	};


    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseFavorite = () => {
        setAnchorEl(null);
    };

    const movieRender = (
        <div>
            <div>
                <Button type="button" className="float" aria-describedby={id} color="secondary" onClick={handleClick}>My Favorite</Button>
            </div>
		    <div>
			<SearchBox searchValue={q} setSearchValue={setQuery} />
		    </div>
            <div>
                <MovieList favoritesComponent={Favorites} handleFavoritesClick={addFavoriteMovie} handleIdClick={(id: any)=> getMovieDetail(id.Title)} handleOpen={handleOpen} />
            </div>
            <div>
            <Popover
                id={id}
                open={openPop}
                anchorEl={anchorEl}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                >
                    <Box>
                        <Button type="button" aria-describedby={id} color="secondary" onClick={handleCloseFavorite}><ArrowBackIcon />Back</Button>
                        <FavoriteList
                            handleFavoritesClick={removeFavoriteMovie}
                            favoritesComponent={RemoveFavorites}
                            handleIdClick={(id: any)=> getMovieDetail(id.Title)}
                            handleOpen={handleOpen}
                        />
                    </Box>
                </Popover>
            </div>
            <div>
                <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                    <DialogContent>
                        <MovieDetails handleClose={handleClose} />
                    </DialogContent>
                </Dialog>
            </div>
		</div>
    )

    return (
		<div>
            {isLoading ? movieRender : <LoadingSpinner />}
        </div>
	);
};

export default Home;