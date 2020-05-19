import React, { Component } from 'react';
import styled from 'styled-components';


const BigTitle = ({title, id}) => {

    return (
        <Container>
            <ContainerInner>
                <BigShape
                    id={`big-shape-${id}`}
                    className={`shape-${id}`}
                >
                    <Typography>
                        {title}
                    </Typography>
                </BigShape>
                <SmallShape
                    className={`shape-${id}`}
                />
                <RedShape
                    className={`shape-${id}`}
                />

            </ContainerInner>
        </Container>
    );
}

const Container = styled.div`
    position: absolute;
    width: 400px;
    height: 300px;
    // background: red;
    right: 0;
    top: 80px;
    @media(max-width: 800px){
        top: 90px;
    }
`;
const ContainerInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;
const BigShape = styled.div`
    position: absolute;
    width: 900px;
    height: 170px;
    right: 0;
    background: ${({theme})=>theme.colors.purple_dark};
    z-index: 99;
    border-radius: 400px 0 0 400px;
    box-shadow: ${({theme})=>theme.shadows.shape};
    display: flex;
    align-items: center;
    padding-left: 120px;

    @media(max-width: 1000px){
        width: 700px;
        height: 150px;
        padding-left: 90px;

    }
    @media(max-width: 800px){
        width: 500px;
        height: 110px;
        padding-left: 50px;
    }
    @media(max-width: 600px){
        width: 400px;
        height: 80px;
        padding-left: 30px;
    }
    @media(max-width: 460px){
        width: 280px;
        height: 60px;
        padding-left: 20px;
     }
`;
const Typography = styled.h2`
    color: ${({theme})=>theme.colors.white};
    font-style: normal;
    font-weight: bold;
    font-size: 4.9rem;
    text-shadow: 0px 3px 8px rgba(0, 0, 0, 0.7);
    @media(max-width: 1000px){
        font-size: 4rem;
    }
    @media(max-width: 800px){
        font-size: 3rem;
    }
    @media(max-width: 600px){
        font-size: 2.2rem;
        margin-bottom: 10px;
    }
    @media(max-width: 460px){
        font-size: 2rem;
        margin-bottom: 10px;
    }
`;
const SmallShape = styled.div`
    position: absolute;
    width: 300px;
    height: 120px;
    right: 0;
    top: 120px;
    background: ${({theme})=>theme.colors.purple_light};
    box-shadow: ${({theme})=>theme.shadows.shape};
    z-index: 99;
    border-radius: 400px 0 0 400px;
    @media(max-width: 1000px){
        top: 100px;
        height: 100px;
    }
    @media(max-width: 800px){
        top: 85px;
        height: 70px;
        width: 170px;
    }
    @media(max-width: 600px){
        top: 65px;
        height: 55px;
        width: 140px;
    }
    @media(max-width: 460px){
        top: 45px;
        height: 35px;
        width: 140px;
     }
`;
const RedShape = styled.div`
    position: absolute;
    width: 600px;
    height: 60px;
    right: 40px;
    top: 140px;
    background: ${({theme})=>theme.colors.red};
    z-index: 99;
    border-radius: 400px;
    box-shadow: ${({theme})=>theme.shadows.shape};
    @media(max-width: 1000px){
        top: 120px;
        width: 500px;
    }
    @media(max-width: 800px){
        top: 95px;
        height: 40px;
        width: 300px;
    }
    @media(max-width: 600px){
        top: 70px;
        height: 30px;
        width: 250px;
    }
    @media(max-width: 460px){
        top: 50px;
        height: 20px;
        width: 170px;
     }
`;

export default BigTitle