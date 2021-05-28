import { createContext, useContext, useReducer } from "react";
import detailReducer, { detailInitialState } from "../reducers/DetailReducer";

const DetailContext = createContext();

const DetailProvider = ({ children }) => {
    const [state, dispatch] = useReducer(detailReducer, detailInitialState);

    return (
        <DetailContext.Provider value={{ state, dispatch }}>
            {children}
        </DetailContext.Provider>
    )
}

export const useDetailDispatch = () => {
    const { dispatch } = useContext(DetailContext);
    return dispatch;
}

export const useDetailState = () => {
    const { state } = useContext(DetailContext);
    return state;
}


export default DetailProvider;
