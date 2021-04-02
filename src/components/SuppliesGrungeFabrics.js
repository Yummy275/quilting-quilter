import React from 'react';
import SupplySec from './SupplySection';
import ProductCard from './ProductCard';
import fabricProducts from '../fabricProducts';

const grungeCards = [
    <ProductCard
        key="onyx"
        title="Onyx"
        image={fabricProducts.byTheYard.fabricOne}
    ></ProductCard>,
    <ProductCard
        key="whitepaper"
        title="White Paper"
        image={fabricProducts.byTheYard.fabricTwo}
    ></ProductCard>,
    <ProductCard
        key="manilla"
        title="Manilla"
        image={fabricProducts.byTheYard.fabricThr}
    ></ProductCard>,
    <ProductCard
        key="graycourture"
        title="Gray Courture"
        image={fabricProducts.byTheYard.fabricFour}
    ></ProductCard>,
    <ProductCard
        key="blackdress"
        title="Black Dress"
        image={fabricProducts.byTheYard.fabricFive}
    ></ProductCard>,
    <ProductCard
        key="pumpkin"
        title="Pumpkin"
        image={fabricProducts.byTheYard.fabricSix}
    ></ProductCard>,
    <ProductCard
        key="turquoise"
        title="Turquoise"
        image={fabricProducts.byTheYard.fabricSev}
    ></ProductCard>,
    <ProductCard
        key="oliverbranch"
        title="Olive Branch"
        image={fabricProducts.byTheYard.fabricEight}
    ></ProductCard>,
    <ProductCard
        key="wren"
        title="Wren"
        image={fabricProducts.byTheYard.fabricNine}
    ></ProductCard>,
    <ProductCard
        key="peacoat"
        title="Peacoat"
        image={fabricProducts.byTheYard.fabricTen}
    ></ProductCard>,
    <ProductCard
        key="yam"
        title="Yam"
        image={fabricProducts.byTheYard.fabricEle}
    ></ProductCard>,
    <ProductCard
        key="berry"
        title="Berry"
        image={fabricProducts.byTheYard.fabricTwelve}
    ></ProductCard>,
];

const FabricsSupply = () => {
    return <SupplySec secTitle="Grunge" content={grungeCards}></SupplySec>;
};

export default FabricsSupply;
