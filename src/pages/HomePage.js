import React from 'react';
import HomeIntro from '../components/HomeIntro';
import HomeBillBoard from '../components/HomeBillBoard';
import HomeServices from '../components/HomeServices';
import fabricsImg from '../imgs/home-fabrics.jpg';
import notionsImg from '../imgs/home-notions.jpg';
import styled from 'styled-components';

const Container = styled.div`
    padding-bottom: 2rem;
`;

const HomePage = () => {
    return (
        <Container>
            <HomeIntro></HomeIntro>
            <HomeBillBoard bg={fabricsImg} string="Fabrics"></HomeBillBoard>
            <HomeServices></HomeServices>
            <HomeBillBoard bg={notionsImg} string="Notions"></HomeBillBoard>
        </Container>
    );
};

export default HomePage;
