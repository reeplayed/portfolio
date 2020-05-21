import React from 'react';
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
            title={item.title} 
            image={item.image} 
            description={item.description} 
            github={item.github} 
            sidelink={item.sidelink}
        />
    ))

    return (
        <>
            <Background/>
            <Curtain/>
            <NavBar />
            <Home id='port' />
            <About id='about'/>
            {Projects}
        </>
    );
};

export default Main