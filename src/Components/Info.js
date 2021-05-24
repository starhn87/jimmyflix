import React from "react";
import Helmet from "react-helmet";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import imdb from "../assets/imdb.png";
import defaultImg from "../assets/noPosterSmall.png";
import Section from "./Section";

const Container = styled.div`
    position: relative;
    padding: 50px;
    width: 100%;
    height: calc(100vh - 50px);
`;

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    filter: blur(3px);
    opacity: 0.5;
    z-index: 0;
`;

const Content = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

const Cover = styled.div`
    width: 30%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    border-radius: 5px;
`;

const Data = styled.div`
    width: 70%;
    margin-left: 15px;
`;

const Title = styled.h3`
    float: left;
    font-size: 32px;
`;

const ItemContainer = styled.div`
    margin: 20px 0;
    padding-top: 15px;
`;

const Item = styled.span``;

const Divider = styled.span`
    margin: 0 10px;
`;

const Overview = styled.p`
    width: 70%;
    line-height: 1.5;
    font-size: 12px;
    opacity: 0.7;
`;

const ILink = styled.a`
    margin-left: 20px;
    width: 100px;
    height: 10px;
    &:hover {
        text-decoration: underline;
    }
`;

const Img = styled.img`
    width: 33px;
    height: 17px;
    vertical-align: -4px;
`;

const Tab = styled.div`
    margin-top: 20px;
    color: white;
    width: 70%;
    height: 50px;
    display: flex;
    align-items: center;
    vertical-align: center;
    padding: 0 10px;
    background-color: rgba(20, 20, 20, 0.8);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
    display: flex;
    width: 100%;
`;

const Li = styled.li`
	width: 100%;
	text-align: center;
	border-bottom: 5px solid ${props => (props.current ? "#EEC425" : "transparent")};
	transition: border-bottom .5s ease-in-out;
    :not(:last-child) {
        margin-right: 20%;
    }
`;

const SLink = styled(Link)`
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Iframe = styled.iframe`
    margin-top: 30px;
    width: 70%;
    height: 60%;
    &: first-child {
        margin-top: 5px;
    }
    &: last-child {
        margin-bottom: 30px;
    }
`;

const Logo = styled.img`
    width: 100%;
    background-color: ${props => (props.logo ? "white" : "transparent")};
`;

const Nation = styled.span`
    margin-bottom: 20px;
`;

function Info({ result, router }) {
    const { match: { url }, location: { pathname } } = router;

    return (
        <>
            <Container>
                <Helmet>
                    <title>{result.original_title ? result.original_title : result.original_name} | Jimmyflix</title>
                </Helmet>
                <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
                <Content>
                    <Cover bgImage={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : defaultImg} />
                    <Data>
                        <Title>{result.original_title ? result.original_title : result.original_name}</Title>
                        <ItemContainer>
                            <Item>
                                {result.release_date ? result.release_date.substring(0, 4) : result.first_air_date.substring(0, 4)}
                            </Item>
                            <Divider>•</Divider>
                            <Item>
                                {result.runtime ? result.runtime : result.episode_runtime} min
                            </Item>
                            <Divider>•</Divider>
                            <Item>
                                {result.genres && result.genres.map((genre, index) => index === result.genres.length - 1 ? genre.name : `${genre.name} / `)}
                            </Item>
                            <ILink target="_blank" href={`https://www.imdb.com/title/${result.imdb_id}`}>
                                <Img src={imdb}></Img>
                            </ILink>
                        </ItemContainer>
                        <Overview>{result.overview}</Overview>
                        <Tab>
                            <List>
                                <Li current={pathname === `${url}`}>
                                    <SLink to={`${url}`}>Trailer</SLink>
                                </Li>
                                <Li current={pathname.includes("/participation")}>
                                    <SLink to={`${url}/participation`}>Participation</SLink>
                                </Li>
                                <Li current={pathname.includes("/nation")}>
                                    <SLink to={`${url}/nation`}>Nations</SLink>
                                </Li>
                            </List>
                        </Tab>
                        {/* {!result.video && result.videos.results && result.videos.results.length > 0 &&
                            result.videos.results.map(video =>
                                <Iframe
                                    key={video.key}
                                    src={`https://www.youtube.com/embed/${video.key}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Embedded youtube official trailer">
                                </Iframe>
                            )
                        } */}
                        <Route path={`${url}`} exact render={() =>
                            !result.video && result.videos.results && result.videos.results.length > 0 &&
                            result.videos.results.map(video => {
                                return <Iframe
                                    key={video.key}
                                    src={`https://www.youtube.com/embed/${video.key}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Embedded youtube official trailer">
                                </Iframe>
                            }
                            )
                        } />
                        <Route path={`${url}/participation`} exact render={() => (
                            <>
                                {result.production_companies && result.production_companies.length > 0 && <Section title="Production Company">
                                    {result.production_companies.map(company => {
                                        return <Logo key={company.id} logo={company.logo_path} src={`https://image.tmdb.org/t/p/original${company.logo_path}`} alt={`${company.name}`} />
                                    })}
                                </Section>}
                                {result.production_countries && result.production_countries.length > 0 && <Section title="Production Country">
                                    {result.production_countries.map(country =>
                                        <Nation>{country.name}</Nation>
                                    )}
                                </Section>}
                            </>
                        )
                        } />
                        <Route path={`${url}/nation`} exact render={() => "nation"} />
                    </Data>
                </Content>
            </Container>
        </>
    )
}

export default Info;