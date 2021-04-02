import React from 'react';
import styled from 'styled-components';
import SupplySec from './SupplySection';
import ProductCard from './ProductCard';
import productImages from '../productImages';

const grungeCards = [
    <ProductCard
        key="onyx"
        title="Onyx"
        image={productImages.fabricOne}
    ></ProductCard>,
    <ProductCard
        key="whitepaper"
        title="White Paper"
        image={productImages.fabricTwo}
    ></ProductCard>,
    <ProductCard
        key="manilla"
        title="Manilla"
        image={productImages.fabricThr}
    ></ProductCard>,
];

const FabricsSupply = () => {
    return <SupplySec secTitle="Grunge" content={grungeCards}></SupplySec>;
};

export default FabricsSupply;
