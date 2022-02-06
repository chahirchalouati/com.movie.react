import React, {useEffect} from "react";
import MovieCard from "./MovieCard";
import {Movie} from "../../redux/movie/types";
import {useDispatch} from "react-redux";
import {getMovies} from "../../redux/movie/actions";
import {useAppSelector} from "../../redux/config/config";

export type MovieListProps = {
    movies?: Array<Movie>
};
const MovieList = ({movies}: MovieListProps) => {
    const {page, loading, errors} = useAppSelector((state) => state.MOVIE_REDUCER);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovies({size: 10, page: 0, sort: "createdAt,DESC"}));
    }, [])

    if (loading) {
        return <div className={"width-full height-full flex-row-center"}>
            <div className="sk-folding-cube">
                <div className="sk-cube1 sk-cube loading-color"/>
                <div className="sk-cube2 sk-cube loading-color"/>
                <div className="sk-cube4 sk-cube loading-color"/>
                <div className="sk-cube3 sk-cube loading-color"/>
            </div>
        </div>
    }
    return (<div className={"movie-list gap-md"}>
        {page?.content?.map((movie) => <MovieCard movie={movie} key={movie.id}/>)}
    </div>);
};

export default MovieList;