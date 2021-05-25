import { useEffect, useState } from "react";
import { moviesApi } from "../api";


export function useHome() {
    const [nowPlaying, setNowPlaying] = useState(null);
    const [upcoming, setUpcoming] = useState(null);
    const [popular, setPopular] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getHome() {
        try {
            const { data: { results: nowPlaying } } = await moviesApi.nowPlaying();
            setNowPlaying(nowPlaying);

            const { data: { results: upcoming } } = await moviesApi.upcoming();
            setUpcoming(upcoming);

            const { data: { results: popular } } = await moviesApi.popular();
            setPopular(popular);
        } catch {
            setError("Can't find movies information.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getHome();
    }, []);

    return { nowPlaying, upcoming, popular, error, loading };
}

