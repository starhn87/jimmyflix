import React from "react";
import styled from "styled-components";
import Loader from "../Components/Loader";
import Helmet from "react-helmet";
import { useHome } from "../hooks/useHome";
import { useHomeState } from "../contexts/HomeContext";
import MovieResult from "../Components/MovieResult";

const Container = styled.div`
    padding: 20px;
`;

function Home() {
    useHome();
    const { loading } = useHomeState();

    return <>
        <Helmet>
            <title>Movies | Jimmyflix</title>
        </Helmet>
        {
            loading ? (
                <Loader />
            ) : (
                <MovieResult />
            )
        }
    </>
}

export default Home;

