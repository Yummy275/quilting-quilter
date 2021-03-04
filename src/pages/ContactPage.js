import React from 'react';
import contactBg from '../imgs/contact.jpg';
import styled from 'styled-components';

const Container = styled.div`
    height: 18rem;
    display: flex;
    align-items: center;
    margin-top: 2rem;
    background-image: url(${contactBg});
    background-size: cover;
    text-align: center;
`;

const Inner = styled.div`
    width: 100%;
    background-color: #ffffffd4;
    text-align: center;
`;

const ContactPage = () => {
    return (
        <Container>
            <Inner>
                <h2 style={{ margin: 0, textDecoration: 'underline' }}>
                    Contact
                </h2>
                <p>Email: TheQuiltingQuilter@gmail.com</p>
                <p>Call/Text: 602-214-7016</p>
            </Inner>
        </Container>
    );
};

export default ContactPage;
