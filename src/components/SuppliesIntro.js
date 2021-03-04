import React from 'react';
import suppliesIntroImg from '../imgs/supplies-intro.jpg';
import styled from 'styled-components';

const Title = styled.div`
    max-width: 22rem;
    margin: 0 auto;
    text-align: center;
    font-size: 2.75rem;
    font-weight: bold;
    background-image: url(${suppliesIntroImg});
    background-size: cover;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
`;

const SuppliesIntro = () => {
    return (
        <>
            <Title>SUPPLIES</Title>
        </>
    );
};

export default SuppliesIntro;
