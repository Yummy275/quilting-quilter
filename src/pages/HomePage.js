import React from 'react';
import HomeIntro from '../components/HomeIntro';
import HomeBillBoard from '../components/HomeBillBoard';
import HomeServices from '../components/HomeServices';
import fabricsImg from '../imgs/home-fabrics.jpg';
import notionsImg from '../imgs/home-notions.jpg';

const HomePage = () => {
    return (
        <>
            <HomeIntro></HomeIntro>
            <HomeBillBoard bg={fabricsImg} string="Fabrics"></HomeBillBoard>
            <HomeServices></HomeServices>
            <HomeBillBoard bg={notionsImg} string="Notions"></HomeBillBoard>
        </>
    );
};

export default HomePage;
