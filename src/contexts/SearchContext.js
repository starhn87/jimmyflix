import { createContext, useContext, useReducer, useState } from "react";
import { FAIL, LOADING, SUCCESS } from "../actions";
import { moviesApi, tvApi } from "../api";
import searchReducer, { searchInitialState } from "../reducers/SearchReducer";


const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [state, dispatch] = useReducer(searchReducer, searchInitialState);
    const [searchTerm, setSearchTerm] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        dispatch({ type: LOADING });
        if (searchTerm !== "") {
            searchByTerm();
        }
    }

    function updateTerm(event) {
        const { target: { value } } = event;
        setSearchTerm(value);
    }

    async function searchByTerm() {
        try {
            const { data: { results: movieResults } } = await moviesApi.search(searchTerm);
            const { data: { results: tvResults } } = await tvApi.search(searchTerm);
            dispatch({ type: SUCCESS, payload: { movieResults, tvResults } });
        } catch {
            dispatch({ type: FAIL });
        }
    }

    return (
        <SearchContext.Provider value={{ state, dispatch, searchTerm, handleSubmit, updateTerm }}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearchTerm = () => {
    const { searchTerm } = useContext(SearchContext);
    return searchTerm;
}

export const useSearchFunctions = () => {
    const { handleSubmit, updateTerm, searchByTerm } = useContext(SearchContext);
    return { handleSubmit, updateTerm, searchByTerm };
}

export const useSearchDispatch = () => {
    const { dispatch } = useContext(SearchContext);
    return dispatch;
}

export const useSearchState = () => {
    const { state } = useContext(SearchContext);
    return state;
}

export default SearchProvider;