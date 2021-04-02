import React from 'react';
import SuppliesIntro from '../components/SuppliesIntro';
import SuppliesNavMenu from '../components/SuppliesNavMenu';
import SuppliesTypeWrapper from '../components/SuppliesTypeWrapper';
import SuppliesGrungeFabrics from '../components/SuppliesGrungeFabrics';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StoreFront = styled.div`
    display: flex;
    margin-top: 2rem;
`;

const SuppliesPage = () => {
    return (
        <Container>
            <SuppliesIntro></SuppliesIntro>
            <StoreFront>
                <SuppliesNavMenu></SuppliesNavMenu>
                <SuppliesTypeWrapper>
                    <SuppliesGrungeFabrics></SuppliesGrungeFabrics>
                </SuppliesTypeWrapper>
            </StoreFront>
        </Container>
    );
};

export default SuppliesPage;
