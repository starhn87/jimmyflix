import { createContext, useContext, useReducer } from "react"
import useRouter from "use-react-router"
import tvReducer, { tvInitialState } from "../reducers/TVReducer";


const TVContext = createContext();

const TVProvider = ({ children }) => {
    const [state, dispatch] = useReducer(tvReducer, tvInitialState);

    return (
        <TVContext.Provider value={{ state, dispatch }}>
            {children}
        </TVContext.Provider>
    )
}

export const useTVDispatch = () => {
    const { dispatch } = useContext(TVContext);
    return dispatch;
}

export const useTVState = () => {
    const { state } = useContext(TVContext);
    return state;
}

export default TVProvider;