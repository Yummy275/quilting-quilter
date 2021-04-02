import React from 'react';
import styled from 'styled-components';

const SupplyTitle = styled.div`
    text-align: center;
`;

const CardsHolder = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const SupplySec = ({ secTitle, content }) => {
    return (
        <>
            <SupplyTitle>
                <h4 style={{ margin: 0 }}>{secTitle}</h4>
            </SupplyTitle>
            <CardsHolder>{content}</CardsHolder>
        </>
    );
};

export default SupplySec;
