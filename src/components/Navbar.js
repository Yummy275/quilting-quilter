import React from 'react';
import styled from 'styled-components';
import navSmIcon from '../imgs/nav-ham-icon.png';

const Container = styled.div`
    display: flex;
    margin: 0.75rem auto;
    max-width: 1400px;
`;

const SmNavDiv = styled.div`
    display: flex;
    padding: 0.25rem;

    @media (min-width: 567px) {
        display: none;
    }
`;

const SmIcon = styled.img`
    height: 2rem;
    width: 2rem;
    margin-right: 0.5rem;
    @media (max-width: 567px);
    ) {
        display: none;
    }
`;

const OptionsDiv = styled.div`
    height: 100%;
    width: 100%;
    display: none;

    @media (min-width: 567px) {
        display: flex;
        justify-content: space-evenly;
    }
`;

const Navlink = styled.a`
    margin: 0 0.5rem;
    font-size: 1.2rem;
`;

const LinkSeperator = styled.div`
    width: 0.1rem;
    margin: 0 0.1rem;
    background-color: #464646;
`;

const Navbar = () => {
    return (
        <Container>
            <SmNavDiv>
                <SmIcon src={navSmIcon}></SmIcon>
                <h3 style={{ margin: '0' }}>The Quilting Quilter</h3>
            </SmNavDiv>
            <OptionsDiv>
                <Navlink>Home</Navlink>
                <LinkSeperator></LinkSeperator>
                <Navlink>About</Navlink>
                <LinkSeperator></LinkSeperator>
                <Navlink>Supplies</Navlink>
                <LinkSeperator></LinkSeperator>
                <Navlink>Services</Navlink>
                <LinkSeperator></LinkSeperator>
                <Navlink>Contact</Navlink>
            </OptionsDiv>
        </Container>
    );
};

export default Navbar;
