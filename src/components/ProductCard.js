import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
    max-width: 11.5rem;
    padding: 0.5rem;
    margin: 0 2rem;
`;

const CardTitle = styled.h3`
    margin-bottom: 0.5rem;
`;

const CardImg = styled.img`
    width: 9rem;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

const CardPrice = styled.p`
    margin: 0 0 1rem 0;
`;

const CardBody = styled.p`
    margin-top: 0.5rem;
`;

const ProductCard = ({ title, image, price }) => {
    return (
        <Container>
            <CardTitle>{title}</CardTitle>
            <CardPrice>{price}</CardPrice>
            <CardImg src={image}></CardImg>
        </Container>
    );
};

export default ProductCard;
