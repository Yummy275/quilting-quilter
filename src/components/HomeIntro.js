import React from 'react';
import headshot from '../imgs/home-headshot.jpg';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;

    @media (min-width: 780px) {
        flex-direction: row;
        justify-content: center;
    }
`;

const Headshot = styled.img`
    width: 100%;
    max-width: 20rem;
    border-radius: 5px;
`;

const Words = styled.div`
    @media (min-width: 780px) {
        max-width: 24rem;
        margin-left: 0.5rem;
    }
`;

const HomeIntro = () => {
    const intro =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed tortor nec dui cursus molestie non vel nibh. Praesent tristique ligula id auctor fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut et tellus sit amet neque sollicitudin ornare vel eget nunc.';

    return (
        <Container>
            <Headshot src={headshot}></Headshot>
            <Words>{intro}</Words>
        </Container>
    );
};

export default HomeIntro;
