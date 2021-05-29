import { FAIL, SUCCESS } from "../actions";


export const searchInitialState = {
    movieResults: null,
    tvResults: null,
    error: null,
    loading: true
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
                error: "Can't find Search results."
            }
        default:
            return;
    }
}

export default searchReducer;