import { FAIL, SUCCESS } from "../actions"



export const tvInitialState = {
    topRated: null,
    popular: null,
    airingToday: null,
    error: null,
    loading: true
}

const tvReducer = (state, action) => {
    switch (action.type) {
        case SUCCESS:
            return {
                ...state,
                topRated: action.payload.topRated,
                airingToday: action.payload.airingToday,
                popular: action.payload.popular,
                loading: false
            }

        case FAIL:
            return {
                ...state,
                error: "Can't find TV information.",
                loading: false
            }
    }
}

export default tvReducer;