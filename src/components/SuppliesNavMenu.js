import React from 'react';
import styled from 'styled-components';

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

const SuppliesNavMenu = () => {
    return (
        <>
            <Menu>
                <CatBox>
                    <CatOption>Fabrics</CatOption>
                    <CatOption>Notions</CatOption>
                    <CatOption>Others</CatOption>
                </CatBox>
            </Menu>
        </>
    );
};

export default SuppliesNavMenu;
