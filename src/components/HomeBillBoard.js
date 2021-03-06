import React from 'react';
import styled from 'styled-components';
import StdButton from './StdButton';

const Container = styled.div`
    width: 100%;
    height: 14rem;
    display: flex;
    align-items: center;
    background-image: url(${(props) => props.bg});
    background-size: cover;

    @media (min-width: 768px) {
        height: 16rem;
    }

    @media (min-width: 1200px) {
        height: 18rem;
    }
`;

const WhiteRec = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff78;
    backdrop-filter: blur(2px);
    transition: background-color 0.3s ease-in;

    @media (min-width: 768px) {
        height: 8rem;
    }

    @media (min-width: 1200px) {
        height: 10rem;
    }

    :hover {
        background-color: #ffffffd4;
    }
`;

const HomeBillBoard = ({ bg, string }) => {
    return (
        <Container bg={bg}>
            <WhiteRec>
                <h3 style={{ height: 'fit-content', margin: '0' }}>{string}</h3>
                <StdButton>View</StdButton>
            </WhiteRec>
        </Container>
    );
};

export default HomeBillBoard;
