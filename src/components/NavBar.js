import React, {useEffect} from 'react';
import styled from 'styled-components';
import {TimelineMax} from 'gsap';
import Logo from './Logo';

const NavBar = ({navHandler}) => {

    useEffect(()=>{
        const items = document.getElementsByClassName('nav-item')
        const tl = new TimelineMax()
 
        tl.staggerFrom(items, 1, { opacity: 0 }, 0.25)
         
     },[])

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