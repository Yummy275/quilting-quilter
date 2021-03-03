import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 80%;
    display: none;

    margin: 0 auto;

    @media (min-width: 576px) {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
`;

const TitleWord = styled.h1`
    margin: 0 0.3rem;
`;

const Header = () => {
    return (
        <Container>
            <TitleWord>The</TitleWord>
            <TitleWord>Quilting</TitleWord>
            <TitleWord>Quilter</TitleWord>
        </Container>
    );
};

export default Header;
