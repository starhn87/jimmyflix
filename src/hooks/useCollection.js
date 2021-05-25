import { useEffect, useState } from "react";
import { collections } from "../api";


export function useCollection(id) {
    const [collection, setCollection] = useState(null);
    const [error, setError] = useState(null);

    async function getCollection() {
        try {
            const { data: { parts } } = await collections(id);
            console.log(parts);
            setCollection(parts);
        } catch {
            setError("Can't find collections information.");
        }
    }

    useEffect(() => {
        getCollection();
    }, []);

    return { collection, error };
}

