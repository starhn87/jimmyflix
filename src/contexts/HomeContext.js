import { createContext, useContext, useReducer } from "react";
import homeReducer, { homeInitialState } from "../reducers/HomeReducer";


const HomeContext = createContext();

const HomeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(homeReducer, homeInitialState);

    return (
        <HomeContext.Provider value={{ state, dispatch }}>
            {children}
        </HomeContext.Provider>
    )
}

export const useHomeDispatch = () => {
    const { dispatch } = useContext(HomeContext);
    return dispatch;
}

export const useHomeState = () => {
    const { state } = useContext(HomeContext);
    return state;
}

export default HomeProvider;

