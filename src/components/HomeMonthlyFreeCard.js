import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import productImages from '../productImages';

const Container = styled.div`
    text-align: center;
    width: 70%;
    max-width: 16rem;
    padding: 0.5rem;
`;

const Window = styled.div`
    overflow: hidden;
`;

const ImagesHolder = styled.div`
    display: flex;
    justify-content: flex-start;
    width: fit-content;
    transition: transform 0.3s ease-in;
`;

const CardImg = styled.img`
    width: 100%;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

const HomeMonthlyFreeCard = () => {
    const imagesHolder = useRef();

    useEffect(() => {
        let translateDistance = 0;
        const mover = setInterval(() => {
            if (translateDistance === 3) {
                translateDistance = 0;
            }
            imagesHolder.current.style.transform = `translate(-${
                translateDistance * 100
            }%)`;
            translateDistance += 1;
        }, 3500);

        return () => clearInterval(mover);
    });

    return (
        <Container>
            <h3>Monthly Free Fabrics</h3>
            <Window>
                <ImagesHolder ref={imagesHolder}>
                    <CardImg src={productImages.fabricOne}></CardImg>
                    <CardImg src={productImages.fabricTwo}></CardImg>
                    <CardImg src={productImages.fabricThr}></CardImg>
                </ImagesHolder>
            </Window>
        </Container>
    );
};

export default HomeMonthlyFreeCard;
