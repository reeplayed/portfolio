import React, {useEffect} from 'react';
import BigTitle from '../components/BigTitle';
import ShapeFooter from '../components/ShapeFooter';
import styled from 'styled-components';
import {TweenMax, Bounce, TimelineMax} from 'gsap';

const About = ({id, currSection}) => {

    const tl = new TimelineMax()

    const bigShape = document.getElementsByClassName(`shape-${id}`);
    const footerShape = document.getElementsByClassName(`footer-shape-${id}`);

    const animationHandler = () =>{
        tl.from(bigShape[0], 1, {x: '100%'})
        .from(bigShape[1], 0.8, {x: '100%'}, "-=1")
        .from(bigShape[2], 0.8, {x: '120%', delay: 0.3}, "-=1")
        .from(footerShape[0], 0.6, {scaleX: 0}, "-=1")
        .from(footerShape[1], 0.6, {scaleX:0, delay: 0.3}, "-=1")
    }

    useEffect(()=>{
        if(currSection===2){
            animationHandler()
        }
     },[currSection])

    return (
        <Container>
            <BigTitle
                title='About'
                id={id}
            />
            <DescriptionContainer>
                <TexContainer>
                    Hello, I am <Typography>22 years</Typography> old 
                    student of Finance and Accounting. About a one year ago i decided to learn programming.
                    In my projects I combine the world of Frontend and Backend using technologies such as Django and React.
                </TexContainer>
                <ShapeFooter id={id}/>
            </DescriptionContainer>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    height: 100vh;
`;
const DescriptionContainer = styled.div`
    position: absolute;
    bottom: 80px;
    left: 100px;
    @media(max-width: 1000px){
        bottom: 50px;
        left: 60px;
    }
    @media(max-width: 460px){
        bottom: 30px;
        left: 40px;
    }
`;
const TexContainer = styled.div`
    color:white;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    font-family: ${({theme})=>theme.fontFamily.main};
    text-shadow: 0px 3px 8px rgba(0, 0, 0, 0.7);
    padding: 15px 0px;
    line-height: 33px;
    width: 700px;
    @media(max-width: 800px){
        font-size: 25px;
        line-height: 26px;
        width: 500px;
    }
    @media(max-width: 600px){
        font-size: 25px;
        line-height: 26px;
        width: 360px;
    }
    @media(max-width: 460px){
        font-size: 20px;
        line-height: 22px;
        width: 260px;
    }
`;
const Typography = styled.span`
    color: ${({theme})=>theme.colors.red};
    text-shadow: 0px 4px 30px rgba(0, 0, 0, 0.7);
`;

export default About;