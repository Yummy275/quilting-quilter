import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
`;

const Title = styled.div`
    margin: 1rem 0;
    font-size: 2.75rem;
    font-style: italic;
`;

const IntroInfo = styled.div`
    width: 98%;
    margin: 0 auto;
    max-width: 24rem;
`;

const ServicesIntro = () => {
    const words =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in lectus non lectus varius accumsan et et felis. Vivamus at dignissim risus. Quisque posuere vulputate magna, sed malesuada sapien dictum et. Suspendisse quis eleifend turpis.';

    return (
        <Container>
            <Title>Services</Title>
            <IntroInfo>{words}</IntroInfo>
        </Container>
    );
};

export default ServicesIntro;
