import { useEffect, useState } from "react";
import { collections } from "../api";

interface ICollection {
    id: number,
    poster_path: string,
    name: string
}

export function useCollection(id: number) {
    const [collection, setCollection] = useState<ICollection[]>();
    const [error, setError] = useState<string>();

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

