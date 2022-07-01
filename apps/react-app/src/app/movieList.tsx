import React from 'react';
import { useSelector } from "react-redux";
import Button from '@material-ui/core/Button';
import {Grid} from '@material-ui/core';
import "./app.scss";
import { getAllMovies } from "./store/slice";


const MovieList = (props: any) => {
	const FavoritesComponent = props.favoritesComponent;
	const movies = useSelector(getAllMovies);
	const { handleFavoritesClick, handleIdClick, handleOpen } = props;
	return (
		<Grid container direction="row" justifyContent="center" spacing={3}>
			{movies.map((movie: any, index: any) => (
				<Grid item xs={12} md={4} key={index}>
					<div><img src={movie.Poster} alt='movie'/></div>
                    <div><h4>{movie.Title}</h4></div>
                    <div><p>{movie.Year}</p></div>
					<div className="d-flex">
						<div>
							<Button onClick={() => handleFavoritesClick(movie)}>
								<FavoritesComponent />
							</Button>
						</div>
						<div>
							<Button color="secondary" onClick={
								() => {
									handleIdClick(movie)
									handleOpen(movie)
								}
							}>More details</Button>
						</div>
					</div>
				</Grid>
			))}
		</Grid>
	);
};

export default MovieList;