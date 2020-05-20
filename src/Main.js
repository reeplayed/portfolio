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

    const [currentSection, setCurrentSection] = useState(1)
    const page = useRef(1)
    const mobileTouchStart = useRef()

    const navigationHandler = (p) =>{
        page.current = p
        setCurrentSection(p);
    }
    const eventHandler = () =>{
        window.removeEventListener('mousewheel', scrollHandler)

        setTimeout(()=>{
            window.addEventListener('mousewheel', scrollHandler)
        }, 500)
    }

    const scrollHandler = (e) =>{
            
        if(e.deltaY>0 && page.current<8){
            page.current += 1
            setCurrentSection(prev=>prev+1);
            eventHandler()
        }
        else if(e.deltaY<0 && page.current>1){
            page.current -= 1
            setCurrentSection(prev=>prev-1);
            eventHandler()
        }
    }

    const scrollMobileHandler = (e) =>{
        
        if(mobileTouchStart.current > e.touches[0].clientY+5 && page.current<8){
            page.current += 1
            setCurrentSection(prev=>prev+1);
        }
        else if(mobileTouchStart.current < e.touches[0].clientY-5 && page.current>1){
            page.current -= 1            
            setCurrentSection(prev=>prev-1);
        }
    }

    useEffect(()=>{
        
        window.addEventListener('mousewheel', scrollHandler)
        window.addEventListener('touchstart', (e)=>{
            mobileTouchStart.current = e.touches[0].clientY
        })
        window.addEventListener('touchend', scrollMobileHandler)
    
    },[])

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
            <ScrollContainer
                id='scroll-container' 
                page={currentSection}
            >
                <Home id='port' currSection={currentSection}/>
                <About id='about' currSection={currentSection}/>
                {Projects}
            </ScrollContainer>
        </MainContainer>
    );
};

const MainContainer = styled.main`
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
`;
const ScrollContainer = styled.div`
    
    height: 800%;
    transition: all 1s;
    transform: translateY(${({page})=>{
        switch(page){
            case 1:
                return '0'
            case 2:
                return `-${100/8*1}%`
            case 3:
                return `-${100/8*2}%`
            case 4:
                return `-${100/8*3}%`
            case 5:
                return `-${100/8*4}%`
            case 6:
                return `-${100/8*5}%`
            case 7:
                return `-${100/8*6}%`
            case 8:
                return `-${100/8*7}%`
        }
    }});
`;



export default Main