import {combineReducers} from "redux";
import {MovieReducer} from "../movie/reducers";

const reducers = combineReducers({
    MOVIE_REDUCER: MovieReducer,
})
export default reducers
