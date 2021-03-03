import React from 'react';
import styled from 'styled-components';

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
`;

const Button = styled.button`
    width: 4.5rem;
    height: 1.75rem;
    margin-top: 0.5rem;
    background-color: transparent;
    border: 1px solid black;
    font-size: 0.75rem;
`;

const HomeBillBoard = ({ bg, string }) => {
    return (
        <Container bg={bg}>
            <WhiteRec>
                <h3 style={{ height: 'fit-content', margin: '0' }}>{string}</h3>
                <Button>View More</Button>
            </WhiteRec>
        </Container>
    );
};

export default HomeBillBoard;