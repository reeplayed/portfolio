import React from 'react';
import BigTitle from '../components/BigTitle';
import ShapeFooter from '../components/ShapeFooter';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';

const Project = ({id, title, image, github, sidelink, description}) => {

    return (
        <Container>
            <BigTitle
                title={title}
                id={id}
            />
            <DescriptionContainer>
                <Wrapper>
                    <a href={sidelink} target="_blank">
                        <ImgWrapper
                            data-aos="zoom-in-right"
                        >
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
                <TextContainer>
                    {description}
                </TextContainer>
                <ShapeFooter id={id}/>
            </DescriptionContainer>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
`;
const DescriptionContainer = styled.div`
    position: absolute;
    bottom: 10px;
    left: 100px;

    @media(max-width: 1000px){
        bottom: 40px;
        left: 50px;
    }

    @media(max-width: 460px){
        bottom: 30px;
        left: 40px;
    }
`;
const TextContainer = styled.div`
    color:white;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    font-family: ${({theme})=>theme.fontFamily.main};
    text-shadow: 0px 3px 8px rgba(0, 0, 0, 0.7);
    padding: 15px 0px;
    line-height: 28px;
    width: 870px;
    
    @media(max-width: 1000px){
        font-size: 20px;
        width: 700px;
    }
    @media(max-width: 800px){
        font-size: 15px;
        width: 500px;
        line-height: 20px;

    }
    @media(max-width: 600px){
        font-size: 14px;
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
    display: flex;
    position: relative;
    width: 100.01%;
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
    width: 150%;
    height: 120%;
    left: 40%;
    top: 30%;
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