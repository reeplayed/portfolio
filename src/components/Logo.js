import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {TweenMax} from 'gsap';

const Logo = () => {
    
    useEffect(()=>{
        const logo_shape = document.getElementById('logo-shape');
        const logo_letter = document.getElementsByClassName('logo-letter');

        TweenMax.from(logo_shape, 0.5, {x: -200, delay: 1})
        TweenMax.from(logo_letter, 0.8, {opacity: 0})

    },[])

    return (
        <Container>

            <Typography red className='logo-letter'>
                Ł
            </Typography>
            <Typography className='logo-letter'>
                B
            </Typography>
            <Shape id='logo-shape'/>
            
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;
const Typography = styled.span`
    display: block;
    color: ${({theme, red})=>red ? theme.colors.red : theme.colors.white};
    font-style: normal;
    font-weight: bold;
    font-size: 1.7rem;
    text-shadow: 0px 4px 40px rgba(0, 0, 0, 0.9);
    z-index: 1;
`;
const Shape = styled.div`
    position: absolute;
    width: 42px;
    height: 70%;
    left: 15px;

    border-radius: 0 40px 40px 0;
    background: ${({theme})=>theme.colors.purple_light};
    box-shadow: 0px 4px 70px rgba(0, 0, 0, 0.4);
`;


export default Logo;