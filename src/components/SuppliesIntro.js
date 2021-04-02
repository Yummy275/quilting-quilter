import React from 'react';
import suppliesIntroImg from '../imgs/supplies-intro.jpg';
import styled from 'styled-components';

const Title = styled.div`
    max-width: 22rem;
    margin: 1rem auto 0 auto;
    text-align: center;
    font-size: 2.75rem;
    font-weight: bold;
    background-image: url(${suppliesIntroImg});
    background-attachment: fixed;
    background-size: cover;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-stroke: 1px #00000054;

    @media (min-width: 640px) {
        font-size: 3.75rem;
    }

    @media (min-width: 1024px) {
        font-size: 4.75rem;
    }
`;

const SuppliesIntro = () => {
    return (
        <>
            <Title>SUPPLIES</Title>
        </>
    );
};

export default SuppliesIntro;
