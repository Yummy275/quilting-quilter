import React from 'react';
import HomeServiceCard from './HomeServiceCard';
import HomeMonthlyFreeCard from './HomeMonthlyFreeCard';
import homeLongArmImg from '../imgs/home-longarm.jpg';
import homeAltImg from '../imgs/home-alterations.jpg';
import styled from 'styled-components';
import StdButton from './StdButton';

const Container = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

const CardsHolder = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 1rem;
`;

const HomeServices = () => {
    return (
        <Container>
            <CardsHolder>
                <HomeServiceCard
                    title="Long-Arm Quilting"
                    image={homeLongArmImg}
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed tortor nec dui cursus molestie non vel nibh."
                ></HomeServiceCard>
                <HomeMonthlyFreeCard></HomeMonthlyFreeCard>
                <HomeServiceCard
                    title="Quilting Supplies"
                    image={homeAltImg}
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed tortor nec dui cursus molestie non vel nibh."
                ></HomeServiceCard>
            </CardsHolder>
        </Container>
    );
};

export default HomeServices;
