import React from 'react';
import SuppliesIntro from '../components/SuppliesIntro';
import ProductCard from '../components/ProductCard';
import img from '../imgs/product-example.jpg';
import SuppliesTypeWrapper from '../components/SuppliesTypeWrapper';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Menu = styled.div`
    display: flex;
`;

const CatBox = styled.div`
    height: fit-content;
    position: sticky;
    top: 0px;
    display: flex;
    flex-direction: column;
    margin-left: 0.75rem;
`;

const CatOption = styled.a`
    padding-top: 1.75rem;
    margin: 0.25rem 0;
`;

const SuppliesPage = () => {
    return (
        <Container>
            <SuppliesIntro></SuppliesIntro>
            <Menu>
                <CatBox>
                    <CatOption>Fabrics</CatOption>
                    <CatOption>Notions</CatOption>
                    <CatOption>Others</CatOption>
                </CatBox>
                <SuppliesTypeWrapper>
                    <ProductCard
                        title="Blue Swirls"
                        image={img}
                        price="$5.99"
                    ></ProductCard>
                    <ProductCard
                        title="Blue Swirls"
                        image={img}
                        price="$5.99"
                    ></ProductCard>
                    <ProductCard
                        title="Blue Swirls"
                        image={img}
                        price="$5.99"
                    ></ProductCard>
                    <ProductCard
                        title="Blue Swirls"
                        image={img}
                        price="$5.99"
                    ></ProductCard>
                    <ProductCard
                        title="Blue Swirls"
                        image={img}
                        price="$5.99"
                    ></ProductCard>
                    <ProductCard
                        title="Blue Swirls"
                        image={img}
                        price="$5.99"
                    ></ProductCard>
                    <ProductCard
                        title="Blue Swirls"
                        image={img}
                        price="$5.99"
                    ></ProductCard>
                    <ProductCard
                        title="Blue Swirls"
                        image={img}
                        price="$5.99"
                    ></ProductCard>
                </SuppliesTypeWrapper>
            </Menu>
        </Container>
    );
};

export default SuppliesPage;
