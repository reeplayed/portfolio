import React, { Component, useEffect } from 'react';
import styled from 'styled-components';
import {TweenMax, TimelineMax, SteppedEase, Power4, Back, Elastic, Bounce} from 'gsap';
import ShapeFooter from './ShapeFooter';

const MainHeader = ({id}) => {

    const WordComponent = ({word, red})=>{
        return word.split('').map(i=>(
            <Letter
                red={red}
                className='letter'
            >
                {i}
            </Letter>
        ))
    }

    return (
        <Container>
                
           <WordContainer>
               <Word>
                  <WordComponent word='Hi,'/> 
               </Word>
           </WordContainer>

           <WordContainer>
               <Word>
                  <WordComponent word="I'm"/> 
               </Word>

               <Word>
                  <WordComponent word='Łukasz' red/> 
               </Word>

               <Word>
                  <WordComponent word='Borkowski,'/> 
               </Word>
           </WordContainer>

            <WordContainer>
               <Word>
                  <WordComponent word="web"/> 
               </Word>

               <Word>
                  <WordComponent word='developer.'/> 
               </Word>
            </WordContainer>
            
            <WordContainer margin='15px 0' id='label'>
                <Word>
                    <Typography>
                        JavaScript / React / Python 
                    </Typography>
                </Word>
            </WordContainer>
            
            
            <ShapeFooter id={id}/>
           
        </Container>
    );
}

const Container = styled.div`
    position: absolute;
    width: 900px;
    height: 300px;
    left: 140px;
    bottom: 0px;
    z-index: 990;
    display: flex;
    flex-direction: column;
    @media(max-width: 800px){
        left: 80px;
    
    }
    @media(max-width: 600px){
        left: 50px;
    }
    @media(max-width: 460px){
       left: 40px;
       bottom: 20px;
       width: 300px;
        height: 200px;
    }
`;
const WordContainer = styled.div`
    padding: 0px 0;
    margin: ${({margin})=> margin || '0'};
    display: flex;
`;
const Word = styled.div`
    margin: 0 5px;
    display: flex;
`;
const Letter = styled.span`
    display:block;
    color: ${({theme, red})=>red ? theme.colors.red : theme.colors.white};
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    font-family: ${({theme})=>theme.fontFamily.main};
    text-shadow: 0px 3px 8px rgba(0, 0, 0, 0.7);
    @media(max-width: 600px){
        font-size: 30px;

    }
    @media(max-width: 460px){
        font-size: 20px;

    }
`;

const Typography = styled.span`
    color: ${({theme})=>theme.colors.light_blue};
    text-shadow: 0px 4px 30px rgba(0, 0, 0, 0.7);
    @media(max-width: 600px){
        font-size: 15px;
    }
    @media(max-width: 460px){
        font-size: 10px;
    }
`;


export default MainHeader;