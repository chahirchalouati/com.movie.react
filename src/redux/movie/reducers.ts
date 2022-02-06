import {AnyAction, Reducer} from "redux";
import {MovieActionTypes, MovieState} from "./types";

export const initialState: MovieState = {
    errors: "", loading: false, page: null
};

interface MovieCustomType extends AnyAction {
    payload?: any
}

const reducer: Reducer<MovieState> = (state = initialState, action: MovieCustomType) => {
    switch (action.type) {
        case MovieActionTypes.START: {
            return {
                ...state,
                loading: true,
            };
        }
        case MovieActionTypes.COMPLETE: {
            return {
                ...state,
                loading: false,
                page: action.payload
            };
        }
        default: {
            return state;
        }
    }
};

export {reducer as MovieReducer};