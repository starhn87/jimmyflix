import { FAIL, LOADING, SUCCESS } from "../actions";


export const searchInitialState = {
    movieResults: null,
    tvResults: null,
    error: null,
    loading: null
};

const searchReducer = (state, action) => {
    switch (action.type) {
        case SUCCESS:
            return {
                ...state,
                movieResults: action.payload.movieResults,
                tvResults: action.payload.tvResults,
                loading: false
            }
        case FAIL:
            return {
                ...state,
                error: "Can't find Search results.",
                loading: false
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return;
    }
}

export default searchReducer;