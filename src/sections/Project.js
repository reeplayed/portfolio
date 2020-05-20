import React, {useEffect} from 'react';
import BigTitle from '../components/BigTitle';
import ShapeFooter from '../components/ShapeFooter';
import styled from 'styled-components';
import {TimelineMax} from 'gsap';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';

const Project = ({id, currSection, title, image, github, sidelink, description}) => {

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
        if(currSection===id){
            animationHandler()
        }
     },[currSection])

    return (
        <Container>
            <BigTitle
                title={title}
                id={id}
            />
            <DescriptionContainer>
                <Wrapper>
                    <a href={sidelink} target="_blank">
                        <ImgWrapper>
                            <ImgInner>
                                <Filter/>
                                <Img src={image}/>
                            </ImgInner>
                        </ImgWrapper>
                    </a> 
                    <GithubIconWrapper>
                        <a href={github} target="_blank">
                            <IconButton>
                                <CustomGitHubIcon/>
                            </IconButton>
                        </a>
                    </GithubIconWrapper>
                </Wrapper>
                <TexContainer>
                    {description}
                </TexContainer>
                <ShapeFooter id={id}/>
            </DescriptionContainer>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    height: ${100/8}%;
`;
const DescriptionContainer = styled.div`
    position: absolute;
    bottom: 40px;
    left: 150px;
    @media(max-width: 1000px){
        bottom: 40px;
        left: 50px;
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
    font-size: 25px;
    font-family: ${({theme})=>theme.fontFamily.main};
    text-shadow: 0px 3px 8px rgba(0, 0, 0, 0.7);
    padding: 15px 0px;
    line-height: 28px;
    width: 700px;
    @media(max-width: 800px){
        font-size: 20px;
        width: 500px;
    }
    @media(max-width: 600px){
        font-size: 18px;
        width: 300px;
        line-height: 20px;
    }
    @media(max-width: 460px){
        font-size: 18px;
        width: 280px;
        line-height: 20px;
        padding: 10px 0px;
    }
`;

const Wrapper = styled.div`
    display: flex;
`;

const ImgWrapper = styled.div`
    width: 340px;
    height: 200px;
    border: 5px solid #2f2f51;
    top: -195px;
    left: 20px;
    @media(max-width: 600px){
        width: 300px;
        height: 170px;
    }
    @media(max-width: 460px){
        width: 260px;
        height: 150px;
    }
`;
const ImgInner = styled.div`
position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    filter: grayscale(30%) sepia(20%) hue-rotate(40deg);
    object-fit: cover;
`;
const Filter = styled.div`
    position:absolute;
    width: 200%;
    height: 200%;
    // left: 20px;
    transform:  translateX(-350px) rotate(40deg);
    z-index: 9;
    background:rgb(228, 63, 90, 0.3);
`;
const CustomGitHubIcon = styled(GitHubIcon)`
    color: #fff;
`;
const GithubIconWrapper = styled.div`
    display: flex;
    align-items: flex-end;
`;
export default Project;