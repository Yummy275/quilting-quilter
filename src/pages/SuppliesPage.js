import React from 'react';
import SuppliesIntro from '../components/SuppliesIntro';
import SuppliesNavMenu from '../components/SuppliesNavMenu';
import SuppliesTypeWrapper from '../components/SuppliesTypeWrapper';
import SuppliesGrungeFabrics from '../components/SuppliesGrungeFabrics';
import SupplySection from '../components/SupplySection';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import fabricProducts from '../fabricProducts';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StoreFront = styled.div`
    display: flex;
    margin-top: 2rem;
`;

const bsLane = [
    <ProductCard
        key="one"
        image={fabricProducts.bitterSweetLane.bsLaneOne}
        title="Red & White Striped"
    ></ProductCard>,
    <ProductCard
        key="two"
        image={fabricProducts.bitterSweetLane.bsLaneTwo}
        title="Blue & White Striped"
    ></ProductCard>,
];

const SuppliesPage = () => {
    return (
        <Container>
            <SuppliesIntro></SuppliesIntro>
            <StoreFront>
                <SuppliesNavMenu></SuppliesNavMenu>
                <SuppliesTypeWrapper>
                    <SuppliesGrungeFabrics></SuppliesGrungeFabrics>
                    <SupplySection secTitle="Thatched"></SupplySection>
                    <SupplySection secTitle="Ruby Star - Speckled"></SupplySection>
                    <SupplySection secTitle="Bonnie & Camille - Moda Shin On"></SupplySection>
                    <SupplySection secTitle="Bella Solids"></SupplySection>
                    <SupplySection
                        secTitle="Bitter Sweet Lane"
                        content={bsLane}
                    ></SupplySection>
                </SuppliesTypeWrapper>
            </StoreFront>
        </Container>
    );
};

export default SuppliesPage;
