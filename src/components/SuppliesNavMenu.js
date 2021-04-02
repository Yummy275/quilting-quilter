import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
    display: flex;
`;

const CatBox = styled.div`
    width: 5rem;
    height: fit-content;
    position: sticky;
    top: 1rem;
    display: flex;
    flex-direction: column;
    margin-left: 0.75rem;
    @media (min-width: 1200px) {
        width: 5.5rem;
    }
`;

const CatOption = styled.h5`
    margin: 0 0 0.5rem 0;
`;

const SubOptionsHolder = styled.div`
    padding-left: 0.5rem;
`;

const SubOption = styled.a`
    font-size: 0.75rem;
    display: inline-block;
`;

const SuppliesNavMenu = () => {
    return (
        <>
            <Menu>
                <CatBox>
                    <CatOption>Fabrics</CatOption>
                    <SubOptionsHolder>
                        <SubOption>By The Yard</SubOption>
                        <SubOption>Layer Cakes</SubOption>
                        <SubOption>Jelly Rolls</SubOption>
                        <SubOption>Charm Pack</SubOption>
                        <SubOption>Quilt Kits</SubOption>
                    </SubOptionsHolder>
                    <CatOption>Notions</CatOption>
                    <CatOption>Others</CatOption>
                </CatBox>
            </Menu>
        </>
    );
};

export default SuppliesNavMenu;
