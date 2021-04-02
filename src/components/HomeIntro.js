import React from 'react';
import headshot from '../imgs/home-headshot.jpg';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0 3rem 0;

    @media (min-width: 780px) {
        flex-direction: row;
        justify-content: center;
    }
`;

const Headshot = styled.img`
    width: 100%;
    max-width: 20rem;
    border-radius: 10px;
    margin-bottom: 0.25rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

const Words = styled.div`
    margin-top: 0.5rem;
    @media (min-width: 780px) {
        max-width: 24rem;
        margin-top: 0;
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
