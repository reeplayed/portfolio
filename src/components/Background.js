import React, { useEffect } from 'react';
import styled from 'styled-components';
import { TweenMax, TimelineMax } from 'gsap';
import _ from 'lodash';

const Background = () => {
  useEffect(() => {
    const sec = document.getElementById('sec_block');
    const thir = document.getElementById('thir_block');
    const line = document.getElementsByClassName('line_1');

    const tl = new TimelineMax();

    const lines = document.getElementsByClassName('line_1');

    Array.prototype.slice.call(lines).forEach(i => {
      i.style.left = `${_.random(44, 100)}%`;
      i.style.transform = `translate(-50%, 190%) rotate(${_.random(0, 360)}deg`;
    });

    setTimeout(() => {
      TweenMax.to(sec, 1, {
        x: '-40%',
      });

      TweenMax.to(thir, 1, {
        x: '-80%',
      });

      tl.staggerFrom(line, 1, { scaleX: 0 }, 0.08);
      // .to(line, 0.5, {boxShadow: '0px 0px 30px rgba(255, 255, 255, 0.6)'})
      // .to(line, 0.5, {boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.6)'})
    }, 900);
  }, []);

  return (
    <Container>
      <Wrapper>
        <Line className="line_1" />
        <Line className="line_1" />
        <Line className="line_1" />
        <Line className="line_1" />
        <Line className="line_1" />
        <Line className="line_1" />
        <Line className="line_1" />
        <Line className="line_1" />
        <Line className="line_1" />
        <Line className="line_1" />
        <Line className="line_1" />

        <LastBlock id="last_block" />
        <ThirBlock id="thir_block" />
        <SecBlock id="sec_block" />

        <FrontBlock id="front_block" />
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
`;
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;
const FrontBlock = styled.div`
  position: absolute;
  width: 13%;
  height: 100%;
  left: 35%;
  top: 0px;
  background: #1f3061;
`;
const SecBlock = styled.div`
  position: absolute;
  width: 15%;
  height: 100%;
  left: 30%;
  top: 0px;
  background: #1a2953;
`;
const ThirBlock = styled.div`
  position: absolute;
  width: 16%;
  height: 100%;
  left: 24%;
  top: 0px;
  background: #18274e;
`;
const LastBlock = styled.div`
  position: absolute;
  width: 30%;
  height: 100%;
  left: 0px;
  top: 0px;
  background: #162447;
`;

const Line = styled.div`
  position: absolute;
  width: 200%;
  height: 1px;
  z-index: 0;
  background: #9494b8;
  top: 50%;
`;

export default Background;
