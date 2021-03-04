import React from 'react';
import SuppliesIntro from '../components/SuppliesIntro';
import ProductCard from '../components/ProductCard';
import img from '../imgs/product-example.jpg';
import SuppliesTypeWrapper from '../components/SuppliesTypeWrapper';
import styled from 'styled-components';

const Container = styled.div``;

const Menu = styled.div`
    display: flex;
`;

const CatBox = styled.div`
    margin-left: 0.75rem;
`;

const SuppliesPage = () => {
    return (
        <Container>
            <SuppliesIntro></SuppliesIntro>
            <Menu>
                <CatBox>
                    <p>Fabrics</p>
                    <p>Notions</p>
                    <p>Others</p>
                </CatBox>
                <SuppliesTypeWrapper>
                    <ProductCard
                        title="Blue Swirls"
                        image={img}
                        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec sapien a ligula tincidunt lobortis."
                        price="$5.99"
                    ></ProductCard>
                    <ProductCard
                        title="Blue Swirls"
                        image={img}
                        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec sapien a ligula tincidunt lobortis."
                        price="$5.99"
                    ></ProductCard>
                    <ProductCard
                        title="Blue Swirls"
                        image={img}
                        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec sapien a ligula tincidunt lobortis."
                        price="$5.99"
                    ></ProductCard>
                    <ProductCard
                        title="Blue Swirls"
                        image={img}
                        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec sapien a ligula tincidunt lobortis."
                        price="$5.99"
                    ></ProductCard>
                    <ProductCard
                        title="Blue Swirls"
                        image={img}
                        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec sapien a ligula tincidunt lobortis."
                        price="$5.99"
                    ></ProductCard>
                    <ProductCard
                        title="Blue Swirls"
                        image={img}
                        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec sapien a ligula tincidunt lobortis."
                        price="$5.99"
                    ></ProductCard>
                    <ProductCard
                        title="Blue Swirls"
                        image={img}
                        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec sapien a ligula tincidunt lobortis."
                        price="$5.99"
                    ></ProductCard>
                    <ProductCard
                        title="Blue Swirls"
                        image={img}
                        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec sapien a ligula tincidunt lobortis."
                        price="$5.99"
                    ></ProductCard>
                </SuppliesTypeWrapper>
            </Menu>
        </Container>
    );
};

export default SuppliesPage;
