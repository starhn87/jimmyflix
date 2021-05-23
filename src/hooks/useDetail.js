import { useEffect, useState } from "react";
import { moviesApi, tvApi } from "../api";

export function useDetail({ location: { pathname }, match: { params: { id } }, history: { push } }) {
    const [result, setResult] = useState(null);
    const [isMovie, setIsMovie] = useState(pathname.includes("/movie/"));
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getDetail() {
        const parsedId = parseInt(id);

        if (isNaN(parsedId)) {
            return push("/");
        }

        let results;
        try {
            if (isMovie) {
                ({ data: results } = await moviesApi.movieDetail(parsedId));
            } else {
                ({ data: results } = await tvApi.showDetail(parsedId));
            }
            setResult(results);
        } catch {
            setError("Can't find anything.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getDetail();
    }, []);

    return { result, error, loading };
}

