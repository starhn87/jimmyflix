import React from "react";
import styled from "styled-components";
import Section from "../Components/Section";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import Poster from "../Components/Poster";
import Helmet from "react-helmet";
import { useTV } from "../hooks/useTV";


const Container = styled.div`
    padding: 20px;
`;

export function TV() {
    const {
        topRated,
        popular,
        airingToday,
        loading,
        error
    } = useTV();
    return <>
        <Helmet>
            <title>TV Shows | Jimmyflix</title>
        </Helmet>
        {
            loading ? <Loader /> : (
                <Container>
                    {topRated && topRated.length > 0 && (
                        <Section title="Top Rated Shows">
                            {topRated.map(show => (
                                <Poster
                                    key={show.id}
                                    id={show.id}
                                    imageUrl={show.poster_path}
                                    title={show.original_name}
                                    rating={show.vote_average}
                                    year={show.first_air_date && show.first_air_date.substring(0, 4)}
                                />
                            ))}
                        </Section>
                    )}
                    {popular && popular.length > 0 && (
                        <Section title="Popular Shows">
                            {popular.map(show => (
                                <Poster
                                    key={show.id}
                                    id={show.id}
                                    imageUrl={show.poster_path}
                                    title={show.original_name}
                                    rating={show.vote_average}
                                    year={show.first_air_date && show.first_air_date.substring(0, 4)}
                                />
                            ))}
                        </Section>
                    )}
                    {airingToday && airingToday.length > 0 && (
                        <Section title="Airing Today Shows">
                            {airingToday.map(show => (
                                <Poster
                                    key={show.id}
                                    id={show.id}
                                    imageUrl={show.poster_path}
                                    title={show.original_name}
                                    rating={show.vote_average}
                                    year={show.first_air_date && show.first_air_date.substring(0, 4)}
                                />
                            ))}
                        </Section>
                    )}
                    {error && <Message color="#e74c3c" text={error} />}
                </Container>
            )}
    </>
}

export default TV;

