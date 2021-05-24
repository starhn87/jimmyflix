import React from "react";
import Helmet from "react-helmet";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import { useDetail } from "../hooks/useDetail";
import useReactRouter from "use-react-router";
import Info from "../Components/Info";

function Detail() {
    const router = useReactRouter();
    const {
        result,
        loading,
        error
    } = useDetail(router);

    console.log(result);
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
            <Info result={result} />
        )
    )
}

export default Detail;

