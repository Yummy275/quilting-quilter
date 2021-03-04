import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import navSmIcon from '../imgs/nav-ham-icon.png';

const Container = styled.div`
    display: flex;
    margin: 0.75rem auto;
    max-width: 1400px;
    position: relative;
`;

const SmNavDiv = styled.div`
    display: flex;
    padding: 0.25rem;

    @media (min-width: 576px) {
        display: none;
    }
`;

const SmIcon = styled.img`
    cursor: pointer;
    height: 2rem;
    width: 2rem;
    margin-right: 0.5rem;
`;

const SmNavMenu = styled.div`
    position: absolute;
    height: 12rem;
    width: 8rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-evenly;
    top: 2.2rem;
    transform: translateX(-10rem);
    background-color: #c8e5f6;
    text-align: center;
    transition: transform 0.4s ease-in-out;
`;

const Title = styled.h2`
    margin: 0;
    @media (max-width: 352px) {
        font-size: 1.3rem;
    }
`;

const OptionsDiv = styled.div`
    height: 100%;
    width: 100%;
    display: none;

    @media (min-width: 576px) {
        display: flex;
        justify-content: space-evenly;
    }
`;

const Navlink = styled.a`
    margin: 0 0.5rem;
    font-size: 1.1rem;
    transition: transform 0.3s ease-in;
    :hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`;

const SmNavlink = styled(Navlink)``;

const LinkSeperator = styled.div`
    width: 0.1rem;
    margin: 0 0.1rem;
    background-color: #464646;
`;

const Navbar = ({ setCurrentPage }) => {
    const [smNavMenuShowing, setSmNavMenuShowing] = useState(false);
    const smNavMenu = useRef();

    const smNavBtnClick = () => {
        if (smNavMenuShowing) {
            smNavMenu.current.style.transform = 'translateX(-10rem)';
            setSmNavMenuShowing(false);
        } else {
            smNavMenu.current.style.transform = 'translateX(-2.2rem)';
            setSmNavMenuShowing(true);
        }
    };

    const goHome = () => {
        smNavMenu.current.style.transform = 'translateX(-10rem)';
        setSmNavMenuShowing(false);
        setCurrentPage('home');
    };

    const goToAbout = () => {
        smNavMenu.current.style.transform = 'translateX(-10rem)';
        setSmNavMenuShowing(false);
        setCurrentPage('about');
    };

    const goToSupplies = () => {
        smNavMenu.current.style.transform = 'translateX(-10rem)';
        setSmNavMenuShowing(false);
        setCurrentPage('supplies');
    };

    const goToServices = () => {
        smNavMenu.current.style.transform = 'translateX(-10rem)';
        setSmNavMenuShowing(false);
        setCurrentPage('services');
    };

    const goToContact = () => {
        smNavMenu.current.style.transform = 'translateX(-10rem)';
        setSmNavMenuShowing(false);
        setCurrentPage('contact');
    };

    return (
        <Container>
            <SmNavDiv>
                <SmIcon src={navSmIcon} onClick={smNavBtnClick}></SmIcon>
                <Title style={{ margin: '0' }}>The Quilting Quilter</Title>
                <SmNavMenu ref={smNavMenu}>
                    <SmNavlink onClick={goHome}>Home</SmNavlink>
                    <SmNavlink onClick={goToAbout}>About</SmNavlink>
                    <SmNavlink onClick={goToSupplies}>Supplies</SmNavlink>
                    <SmNavlink onClick={goToServices}>Services</SmNavlink>
                    <SmNavlink onClick={goToContact}>Contact</SmNavlink>
                </SmNavMenu>
            </SmNavDiv>
            <OptionsDiv>
                <Navlink onClick={() => setCurrentPage('home')}>Home</Navlink>
                <LinkSeperator></LinkSeperator>
                <Navlink onClick={() => setCurrentPage('about')}>About</Navlink>
                <LinkSeperator></LinkSeperator>
                <Navlink onClick={() => setCurrentPage('supplies')}>
                    Supplies
                </Navlink>
                <LinkSeperator></LinkSeperator>
                <Navlink onClick={() => setCurrentPage('services')}>
                    Services
                </Navlink>
                <LinkSeperator></LinkSeperator>
                <Navlink onClick={() => setCurrentPage('contact')}>
                    Contact
                </Navlink>
            </OptionsDiv>
        </Container>
    );
};

export default Navbar;
