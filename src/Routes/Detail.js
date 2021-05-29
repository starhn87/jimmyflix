import React from "react";
import Helmet from "react-helmet";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import { useDetail } from "../hooks/useDetail";
import Info from "../Components/Info";
import { useDetailState } from "../contexts/DetailContext";

function Detail() {
    useDetail();
    const { loading, error } = useDetailState();

    return loading ? (
        <>
            <Helmet>
                <title>Loading | Jimmyflix</title>
            </Helmet>
            <Loader />
        </>
    ) : (
        error ? (
            <Message color="#e74c3c" text={error}></Message>
        ) : (
            <Info />
        )
    )
}

export default Detail;

