import React from 'react';
import styled from 'styled-components';
import hero from '../imgs/home-headshot.jpg';

const Container = styled.div`
    margin: 2rem auto;
    text-align: center;
    max-width: 44rem;
`;

const HeroImg = styled.img`
    width: 100%;
    max-height: 24rem;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

const Words = styled.p``;

const AboutPage = () => {
    return (
        <Container>
            <HeroImg src={hero}></HeroImg>
            <Words>
                Id labore dolore eu ipsum. Ex laboris commodo laborum ad laboris
                exercitation anim ipsum enim ad nostrud quis. Ut nulla deserunt
                nisi proident nostrud adipisicing anim dolore proident cupidatat
                dolor. Labore commodo fugiat ullamco adipisicing voluptate
                consectetur ex elit. Ad labore qui id sint sint sit eu nostrud.
                Nostrud anim sint pariatur et elit cupidatat in occaecat irure
                veniam. Fugiat magna esse aliqua laborum in nostrud veniam
                cupidatat.
            </Words>
        </Container>
    );
};

export default AboutPage;
