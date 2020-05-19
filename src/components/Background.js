import React, { useEffect } from 'react';
import styled from 'styled-components';
import {TweenMax, TimelineMax} from 'gsap';
import _ from 'lodash';

const Background = () => {

    useEffect(()=>{
        const sec = document.getElementById('sec_block')
        const thir = document.getElementById('thir_block')
        const line = document.getElementsByClassName('line_1')
        
        const tl = new TimelineMax()

        TweenMax.to(sec, 1, {
            x: '-40%'
        })

        TweenMax.to(thir, 1, {
            x: '-80%'
        })

        tl.staggerFrom(line, 1, { scaleX : 0}, 0.08)
       

    },[])

    return (
        <>  
            <Line_1 className='line_1'/>
            <Line_2 className='line_1'/>
            <Line_3 className='line_1'/>
            <Line_4 className='line_1'/>
            <Line_5 className='line_1'/>
            <Line_6 className='line_1'/>
            <Line_7 className='line_1'/>
            <Line_8 className='line_1'/>
            <Line_9 className='line_1'/>
            <Line_10 className='line_1'/>
            <Line_11 className='line_1'/>
         
            
            <LastBlock
                id='last_block'
            />
             <ThirBlock
                id='thir_block'
            />
            <SecBlock
                id='sec_block'
            />
           
            <FrontBlock
                id='front_block'
            />
        </>
    );
};

const FrontBlock = styled.div`
    position: absolute;
    width: 13%;
    height: 100%;
    left: 35%;
    top: 0px;
    background: #1F3061;
    // @media(max-width: 1000px){
    //     width: 213px;
    //     left: 340px;
    // }
    // @media(max-width: 800px){
    //     width: 120px;
    //     left: 280px;
    // }
    // @media(max-width: 600px){
    //     width: 80px;
    //     left: 180px;
    // }
`;
const SecBlock = styled.div`
    position: absolute;
    width: 15%;
    height: 100%;
    left: 30%;
    top: 0px;
    background: #1A2953;
    // @media(max-width: 1000px){
    //     width: 213px;
    //     left: 320px;
    // }
    // @media(max-width: 800px){
    //     width: 120px;
    //     left: 280px;
    // }
    // @media(max-width: 600px){
    //     width: 80px;
    //     left: 230px;
    // }
`;
const ThirBlock = styled.div`
    position: absolute;
    width: 16%;
    height: 100%;
    left: 24%;
    top: 0px;
    background: #18274E;
    // @media(max-width: 1000px){
    //     width: 213px;
    //     left: 290px;
    // }
    // @media(max-width: 800px){
    //     width: 120px;
    //     left: 280px;
    // }
    // @media(max-width: 600px){
    //     width: 80px;
    //     left: 280px;
    // }
`;
const LastBlock = styled.div`
    position: absolute;
    width: 30%;
    height: 100%;
    left: 0px;
    top: 0px;
    background: #162447;
    // @media(max-width: 800px){
    //     width: 203px;
    // }
`;

const Line = styled.div`
position: absolute;
width: 200%;
height: 1px;
z-index: 0;
background: #9494B8;
box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6);

`;
const Line_1 = styled(Line)`left: ${_.random(44, 100)}%; top: ${_.random(10, 100)}%; transform: translate(-50%) rotate(${_.random(0, 360)}deg)  ;`
const Line_2 = styled(Line)`left: ${_.random(44, 100)}%; top: ${_.random(10, 100)}%; transform: translate(-50%) rotate(${_.random(0, 360)}deg)  ;`
const Line_3 = styled(Line)`left: ${_.random(44, 100)}%; top: ${_.random(10, 100)}%; transform: translate(-50%) rotate(${_.random(0, 360)}deg)  ;`
const Line_4 = styled(Line)`left: ${_.random(44, 100)}%; top: ${_.random(10, 100)}%; transform: translate(-50%) rotate(${_.random(0, 360)}deg)  ;`
const Line_5 = styled(Line)`left: ${_.random(44, 100)}%; top: ${_.random(10, 100)}%; transform: translate(-50%) rotate(${_.random(0, 360)}deg)  ;`
const Line_6 = styled(Line)`left: ${_.random(44, 100)}%; top: ${_.random(10, 100)}%; transform: translate(-50%) rotate(${_.random(0, 360)}deg)  ;`
const Line_7 = styled(Line)`left: ${_.random(44, 100)}%; top: ${_.random(10, 100)}%; transform: translate(-50%) rotate(${_.random(0, 360)}deg)  ;`
const Line_8 = styled(Line)`left: ${_.random(44, 100)}%; top: ${_.random(10, 100)}%; transform: translate(-50%) rotate(${_.random(0, 360)}deg)  ;`
const Line_9 = styled(Line)`left: ${_.random(44, 100)}%; top: ${_.random(10, 100)}%; transform: translate(-50%) rotate(${_.random(0, 360)}deg)  ;`
const Line_10 = styled(Line)`left: ${_.random(44, 100)}%; top: ${_.random(10, 100)}%; transform: translate(-50%) rotate(${_.random(0, 360)}deg)  ;`
const Line_11 = styled(Line)`left: ${_.random(44, 100)}%; top: ${_.random(10, 100)}%; transform: translate(-50%) rotate(${_.random(0, 360)}deg)  ;`



export default Background;