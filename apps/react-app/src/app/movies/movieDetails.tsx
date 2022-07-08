import React from "react";
import { useSelector } from "react-redux";
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import "../app.scss";
import { getMoviesDetails } from "../store/slice";

const MovieDetails = (props: any) => {
    const details = useSelector(getMoviesDetails);
    return (
       <div>
            <div><Button color="secondary" className="float margin" onClick={() => props.handleClose()}><CloseIcon/></Button></div>
            <img src={details.Poster} alt="name"/>
            <h4>{details.Title}</h4>
            <p>{details.Plot}</p>
            <div>{details.Year}</div>
            <div>{details.Actors}</div>
            <div>{details.Genre}</div>
            <div>{details.Runtime}</div>
       </div>
    )
};

export default MovieDetails;