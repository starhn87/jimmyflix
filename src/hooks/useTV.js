import { useEffect, useState } from "react";
import { tvApi } from "../api";


export function useTV() {
    const [topRated, setTopRated] = useState(null);
    const [popular, setPopular] = useState(null);
    const [airingToday, setAiringToday] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getTV() {
        try {
            const { data: { results: topRated } } = await tvApi.topRated();
            setTopRated(topRated);

            const { data: { results: popular } } = await tvApi.popular();
            setPopular(popular);

            const { data: { results: airingToday } } = await tvApi.airingToday();
            setAiringToday(airingToday);
        } catch {
            setError("Can't find TV information.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getTV();
    }, []);

    return { topRated, popular, airingToday, error, loading };
}

