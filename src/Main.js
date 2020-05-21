import React, {useState, useEffect, useRef} from 'react';
import Home from './sections/Home';
import About from './sections/About';
import NavBar from './components/NavBar';
import styled from 'styled-components';
import Background from './components/Background';
import Project from './sections/Project';
import projects from './projects';
import Curtain from './components/Curtain';

const Main = () => {

    const Projects = projects.map((item, index)=>(
        <Project 
            key={item.id}
            id={index+3} 
            currSection={currentSection}
            title={item.title} 
            image={item.image} 
            description={item.description} 
            github={item.github} 
            sidelink={item.sidelink}
        />
    ))

    return (
        <MainContainer>
            <Curtain/>
            <NavBar navHandler={navigationHandler}/>
            <Background/>
            <Home id='port' currSection={currentSection}/>
            <About id='about' currSection={currentSection}/>
            {Projects}
        </MainContainer>
    );
};

const MainContainer = styled.main`
    height: 100vh;
    width: 100%;
    position: relative;
    overflow-x: hidden;
`;


export default Main