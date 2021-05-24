import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    margin-top: 10px;
    :not(:last-child) {
        margin-bottom: 50px;
    }
`;

const Title = styled.span`
    font-size: 16px;
    font-weight: 600;
`;

const Grid = styled.div`
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 125px);
    grid-gap: 25px;
`;

const Section = ({ title, children }) => (
    <Container>
        {title && (
            <Title>{title}</Title>
        )}
        <Grid>{children}</Grid>
    </Container>
);

Section.prototype = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node])
}

export default Section;