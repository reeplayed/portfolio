import React, {useEffect} from 'react';
import styled from 'styled-components';
import {TweenMax, TimelineMax, SteppedEase, Power4, Back, Elastic, Bounce} from 'gsap';
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

const ItemsContainer = styled.ul`
    display: flex;
    align-items: center;
    
`;
const Item = styled.li`
    margin: 0 40px;
    font-weight: 300;
    font-size: 1.1rem;
    color: ${({theme})=>theme.colors.white};
    list-style-type: none;
    text-shadow: 3px 2px 2px rgba(0, 0, 0, 0.7);
    cursor: pointer;
    @media(max-width: 1000px){
        opacity: 0;
    }
`;
export default NavBar;