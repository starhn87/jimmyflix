import React from "react";
import Helmet from "react-helmet";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import { useDetail } from "../hooks/useDetail";
import useReactRouter from "use-react-router";
import Info from "../Components/Info";
import { useCollection } from "../hooks/useCollection";
import Section from "../Components/Section";
import styled from "styled-components";

const Container = styled.div`
    width: 70%;
`;

const Item = styled.img`
    width: 100%;
`;

function Collection({ id }) {
    const {
        collection,
        error
    } = useCollection(id);

    return error ? (
        <Message color="#e74c3c" text={error}></Message>
    ) : (
        <Container>
            <Section>
                {collection && collection.length > 0 &&
                    (collection.map(c => <Item src={`https://image.tmdb.org/t/p/original${c.poster_path}`} alt={c.name} />))
                }
            </Section>
        </Container>
    )
}

export default Collection;

