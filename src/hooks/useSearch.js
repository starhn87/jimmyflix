import { useEffect } from "react";


export function useSearch() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
}

