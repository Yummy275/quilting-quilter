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
    border-radius: 5px;
`;

const CardBody = styled.p``;

const ServiceCard = ({ title, image, body }) => {
    return (
        <Container>
            <CardTitle>{title}</CardTitle>
            <CardImg src={image}></CardImg>
            <CardBody>{body}</CardBody>
        </Container>
    );
};

export default ServiceCard;
