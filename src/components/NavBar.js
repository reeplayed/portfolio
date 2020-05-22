import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const NavBar = () => {

    return (
        <Container>
            <Logo/>
        </Container>
    );
};

const Container = styled.header`
    position: fixed;
    width: 100%;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    z-index: 999;
`;

export default NavBar;