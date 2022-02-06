import {Movie, MovieActionTypes} from "./types";

import {Dispatch} from "redux";
import {ApplicationState} from "../config/config";
import {httpClient} from "../../configs/HttpConfig";
import {Page, Pageable} from "../../domain/Movie";
import {CreateMovieRequest} from "../../domain/requests/MovieRequests";

export const getMovies = (page: Pageable) => async (dispatch: Dispatch, state: ApplicationState) => {

    try {
        dispatch({type: MovieActionTypes.START});
        const {data: movies} = await httpClient.get<Page<Movie>>("/movies", {params: {...page}});
        dispatch({type: MovieActionTypes.COMPLETE, "payload": movies});
    } catch (e) {
        console.log(e);
        dispatch({type: MovieActionTypes.ERROR});
    }
};


export const createMovie = (request: CreateMovieRequest) => async (dispatch: Dispatch, state: ApplicationState) => {
    const {data: movie} = await httpClient.post<Movie>("/movies", request);
    try {
        dispatch({type: MovieActionTypes.START});
        const {data: movie} = await httpClient.post<Movie>("/movies", request);
        dispatch({type: MovieActionTypes.CREATE, payload: movie});
    } catch (e) {
        console.log(e)
        dispatch({type: MovieActionTypes.ERROR});
    }
};
