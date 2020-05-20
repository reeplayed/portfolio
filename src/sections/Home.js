import React, {useEffect, useRef} from 'react';
import BigTitle from '../components/BigTitle';
import MainHeader from '../components/MainHeader';
import styled from 'styled-components';
import {TweenMax, Bounce, TimelineMax} from 'gsap';

const Home = ({id, currSection}) => {

    const ref = useRef(false)

    const tl = new TimelineMax()

    const letter = document.getElementsByClassName('letter');
    const label = document.getElementById('label');
    const bigShape = document.getElementsByClassName(`shape-${id}`);
    const footerShape = document.getElementsByClassName(`footer-shape-${id}`);

    const animationHandler = () =>{
        tl.staggerFrom(letter, 1, { scaleY:0 ,opacity: 0, ease: Bounce.easeOut }, 0.027)
        .from(label, 1, {opacity: 0}, "-=1")
        .from(bigShape[0], 1, {x: '100%'}, "-=2")
        .from(bigShape[1], 0.8, {x: '100%'}, "-=2")
        .from(bigShape[2], 0.8, {x: '120%', delay: 0.3}, "-=2")
        .from(footerShape[0], 0.6, {scaleX: 0}, "-=2")
        .from(footerShape[1], 0.6, {scaleX:0, delay: 0.3}, "-=2")
    }

    useEffect(()=>{
        if(ref.current){
            if(currSection===1){
                animationHandler()
            }
        }
        else{
            setTimeout(()=>{
                animationHandler()
            }, 900)
            ref.current = true;
        }

     },[currSection])

    return (
        <Container>
            <BigTitle
                title='Portfolio'
                id={id}
            />
            <MainHeader id={id}/>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    height: ${100/8}%;
`;


export default Home;