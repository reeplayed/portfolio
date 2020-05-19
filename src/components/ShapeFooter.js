import React from 'react';
import styled from 'styled-components';

const ShapeFooter = ({id}) => {
    return (
        <ShapesContainer>
            <BigShape className={`footer-shape-${id}`}/>
            <SmallShape className={`footer-shape-${id}`}/>
        </ShapesContainer>
    );
};

const ShapesContainer = styled.div`
    width: 100px;
    height: 50px;
    position: relative;
`;
const BigShape = styled.div`
    position: absolute;
    width: 500px;
    height: 40px;
    
    background: ${({theme})=>theme.colors.purple_dark};
    z-index: 99;
    border-radius: 60px;
    box-shadow: ${({theme})=>theme.shadows.shape};
    transform: translateX(-20px);

    @media(max-width: 600px){
        width: 380px;
        height: 35px;
    }

    @media(max-width: 460px){
        width: 260px;
        height: 30px;
    }
`;
const SmallShape = styled.div`
    position: absolute;
    width: 300px;
    height: 40px;
    left: 30px;
    top: 0px;
    background: ${({theme})=>theme.colors.purple_light};
    box-shadow: ${({theme})=>theme.shadows.shape};
    z-index: 99;
    border-radius: 60px;
    transform: translateY(50%);
    @media(max-width: 600px){
        width: 290px;
        height: 35px;
    }
    @media(max-width: 460px){
        width: 190px;
        height: 30px;
        top: -5px;
    }
`;
export default ShapeFooter;