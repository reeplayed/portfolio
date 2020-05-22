import React, {useEffect } from 'react';
import styled from 'styled-components';
import {TweenMax} from 'gsap';

const Curtain = () => {
    
    useEffect(()=>{

        const curtain = document.getElementById('curtain');
        const curtain_letter = document.getElementsByClassName('curtain_letter')

        TweenMax.to(curtain, 0.5, {opacity: 0, delay: 1})
        TweenMax.to(curtain, {zIndex: -1, delay: 1.5})

        TweenMax.to(curtain_letter[0], {scale: 2, delay: 0.2})
        TweenMax.to(curtain_letter[1], {scale: 2, delay: 0.5})

    },[])

    return (
        <Container id='curtain'>
            <Typography red className='curtain_letter'>
                Ł
            </Typography>
            <Typography className='curtain_letter'>
                B
            </Typography>
        </Container>
    );
}

const Container = styled.div`
    position: fixed;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #18274E;
    z-index: 99999;
`;
const Typography = styled.span`
    display: block;
    color: ${({theme, red})=>red ? theme.colors.red : theme.colors.white};
    font-style: normal;
    font-weight: bold;
    font-size: 1.7rem;
    padding: 0 5px;
`;

export default Curtain;