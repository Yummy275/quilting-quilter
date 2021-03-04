import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
    width: 12rem;
    padding: 0.5rem;
`;

const CardTitle = styled.h3`
    margin-bottom: 0.5rem;
`;

const CardImg = styled.img`
    width: 9rem;
    border-radius: 5px;
`;

const CardPrice = styled.p`
    margin: 0 0 1rem 0;
`;

const CardBody = styled.p`
    margin-top: 0.5rem;
`;

const ProductCard = ({ title, image, body, price }) => {
    return (
        <Container>
            <CardTitle>{title}</CardTitle>
            <CardPrice>{price}</CardPrice>
            <CardImg src={image}></CardImg>
            <CardBody>{body}</CardBody>
        </Container>
    );
};

export default ProductCard;
