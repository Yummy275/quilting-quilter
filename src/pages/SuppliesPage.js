import React from 'react';
import SuppliesIntro from '../components/SuppliesIntro';
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

const Menu = styled.div`
    display: flex;
`;

const CatBox = styled.div`
    height: fit-content;
    position: sticky;
    top: 1rem;
    display: flex;
    flex-direction: column;
    margin-left: 0.75rem;
`;

const CatOption = styled.a`
    margin-bottom: 0.5rem;
`;

const SuppliesPage = () => {
    return (
        <Container>
            <SuppliesIntro></SuppliesIntro>
            <StoreFront>
                <Menu>
                    <CatBox>
                        <CatOption>Fabrics</CatOption>
                        <CatOption>Notions</CatOption>
                        <CatOption>Others</CatOption>
                    </CatBox>
                </Menu>
                <SuppliesTypeWrapper>
                    <SuppliesGrungeFabrics></SuppliesGrungeFabrics>
                </SuppliesTypeWrapper>
            </StoreFront>
        </Container>
    );
};

export default SuppliesPage;
