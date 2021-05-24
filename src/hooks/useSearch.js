import { useState } from "react";
import { moviesApi, tvApi } from "../api";


export function useSearch() {
    const [movieResults, setMovieResults] = useState(null);
    const [tvResults, setTvResults] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    function handleSubmit(event) {
        event.preventDefault();
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
            setMovieResults(movieResults);

            const { data: { results: tvResults } } = await tvApi.search(searchTerm);
            setTvResults(tvResults);
        } catch {
            setError("Can't find results.");
        } finally {
            setLoading(false);
        }
    }

    return { movieResults, tvResults, searchTerm, handleSubmit, updateTerm, error, loading };
}

