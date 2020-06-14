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
  const Projects = projects.map((item, index) => (
    <Project
      key={item.id}
      id={index + 3}
      title={item.title}
      image={item.image}
      description={item.description}
      github={item.github}
      sidelink={item.sidelink}
    />
  ));

  return (
    <Container>
      <Background />
      <Curtain />
      <NavBar />
      <Home id="home" />
      <About id="about" />
      {Projects}
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: 25px;
`;

export default Main;
