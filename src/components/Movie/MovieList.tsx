import {Movie} from "../../domain/Movie";
import React from "react";
import MovieCard from "./MovieCard";

export type MovieListProps = {
    movies: Array<Movie>
};
const MovieList = ({movies}: MovieListProps) => {
    return (<div className={"movie-list" }>
        {movies?.map((movie, index) => <MovieCard movie={movie} key={movie.id}/>)}
          </div>);
};

export default MovieList;