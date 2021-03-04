import React from 'react';
import ServiceCard from './ServiceCard';
import homeLongArm from '../imgs/home-longarm.jpg';
import homeRepair from '../imgs/home-repair.jpg';
import homeAlt from '../imgs/home-alterations.jpg';
import styled from 'styled-components';

const Container = styled.div``;

const CardsHolder = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const HomeServices = () => {
    return (
        <Container>
            <CardsHolder>
                <ServiceCard
                    title="Long-Arm Quilting"
                    image={homeLongArm}
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed tortor nec dui cursus molestie non vel nibh."
                ></ServiceCard>
                <ServiceCard
                    title="Repairs"
                    image={homeRepair}
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed tortor nec dui cursus molestie non vel nibh."
                ></ServiceCard>
                <ServiceCard
                    title="Alterations"
                    image={homeAlt}
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed tortor nec dui cursus molestie non vel nibh."
                ></ServiceCard>
            </CardsHolder>
        </Container>
    );
};

export default HomeServices;
