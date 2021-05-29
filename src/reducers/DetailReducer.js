import { FAIL, SUCCESS } from "../actions";

export const detailInitialState = {
    result: null,
    error: null,
    loading: true
};

const detailReducer = (state, action) => {
    switch (action.type) {
        case SUCCESS:
            return {
                ...state,
                result: action.payload,
                loading: false
            }
        case FAIL:
            return {
                result: null,
                error: "Can't find Detail information.",
                loading: false,
            }
        default:
            return;
    }
}

export default detailReducer;






