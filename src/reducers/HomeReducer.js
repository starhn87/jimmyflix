import { FAIL, SUCCESS } from "../actions"


export const homeInitialState = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
}

const homeReducer = (state, action) => {
    switch (action.type) {
        case SUCCESS:
            return {
                ...state,
                nowPlaying: action.payload.nowPlaying,
                upcoming: action.payload.upcoming,
                popular: action.payload.popular,
                loading: false
            }

        case FAIL:
            return {
                ...state,
                error: "Can't find Home information.",
                loading: false
            }
    }
}

export default homeReducer;