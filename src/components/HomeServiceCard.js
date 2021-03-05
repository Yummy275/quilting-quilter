import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
    max-width: 16rem;
    padding: 0.5rem;
`;

const CardTitle = styled.h3``;

const CardImg = styled.img`
    width: 100%;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

const CardBody = styled.p``;

const HomeServiceCard = ({ title, image, body }) => {
    return (
        <Container>
            <CardTitle>{title}</CardTitle>
            <CardImg src={image}></CardImg>
            <CardBody>{body}</CardBody>
        </Container>
    );
};

export default HomeServiceCard;
