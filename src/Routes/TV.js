import React from "react";
import Loader from "../Components/Loader";
import Helmet from "react-helmet";
import { useTV } from "../hooks/useTV";
import { useTVState } from "../contexts/TVContext";
import TVResult from "../Components/TVResult";

export function TV() {
    useTV();
    const {
        loading
    } = useTVState();

    return (
        <>
            <Helmet>
                <title>TV Shows | Jimmyflix</title>
            </Helmet>
            {
                loading ? <Loader /> : (
                    <TVResult />
                )}
        </>
    )
}

export default TV;

