import {Movie} from "../redux/movie/types";
import {useLocation} from "react-router-dom";
import NavBar from "../components/Navs/NavBar";
import React from "react";

export type MoviePlayerProps = {};

export interface LocationState {
    movie?: Movie
};

const MoviePlayer = ({}: MoviePlayerProps) => {
    const {state} = useLocation();
    const {movie} = state as LocationState;
    return (
        <div className={"container__flex_column width-full"} style={{overflow: 'hidden'}}>
            <NavBar/>
            <div>{movie?.title}</div>
        </div>
    );
};

export default MoviePlayer;