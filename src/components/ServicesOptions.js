import React from 'react';
import longarmImg from '../imgs/servies-longarm.jpg';
import repairImg from '../imgs/services-repair.jpg';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const Section = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
`;

const InfoDiv = styled.div`
    width: 98%;
    max-width: 22rem;
    text-align: center;
    margin-left: 0.25rem;
`;

const InfoTitle = styled.div`
    margin-top: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
`;

const Words = styled.div`
    margin-top: 0.5rem;
`;

const Image = styled.img`
    width: 14rem;
    height: 22rem;
    border-radius: 10px;
`;

const ServicesOptions = () => {
    const words =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est sapien, lobortis et suscipit ac, pellentesque sit amet justo. Pellentesque facilisis eu massa sit amet eleifend. Nulla tristique eros ut imperdiet convallis. Pellentesque convallis nulla id arcu placerat, nec ultricies mi pharetra. Nullam dapibus commodo gravida. In hac habitasse platea dictumst.';

    return (
        <Container>
            <Section>
                <Image src={longarmImg}></Image>
                <InfoDiv>
                    <InfoTitle>Long-Arm Quilting</InfoTitle>
                    <Words>{words}</Words>
                </InfoDiv>
            </Section>
            <Section>
                <Image src={repairImg}></Image>
                <InfoDiv>
                    <InfoTitle>Repairs</InfoTitle>
                    <Words>{words}</Words>
                </InfoDiv>
            </Section>
        </Container>
    );
};

export default ServicesOptions;
