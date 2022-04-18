import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import styled from "styled-components";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// imporrt Img
import backgroundImg from "../../img/SpaceBg.jpg";
import spaceBottom from "../../img/SpaceBottom.png";
import scrollImg from "../../img/scrolldown.gif";

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
`;
const Main = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImg});
  overflow: hidden;
`;

const SeaLeaf = styled(motion.img)`
  bottom: -200px;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const leafVariants = {
  start: {
    translateY: "-200px",
  },
  end: {
    translateY: 0,
  },
};

// intro me
const Intro = styled(motion.div)`
  width: 100%;
  text-align: center;
`;

const IntroName = styled(motion.h1)`
  font-weight: bold;
  width: 100%;
  font-size: 40px;
  color: white;
  text-align: center;
  margin: 90px 0 0 90px;
  line-height: 80px;

  & span {
    font-size: 60px;
  }
`;

const IntroText = styled(motion.h2)`
  width: 100%;
  font-size: 30px;
  color: white;
  text-align: center;
  margin: 90px 0 0 90px;
  line-height: 40px;

  & span {
    font-size: 60px;
  }
`;

const ScrollDown = styled(motion.img)`
  width: 100px;
  margin: 0 auto;
  margin: 180px 0 0 180px;
`;

function Home() {
  const leafAnimation = useAnimation();
  const { scrollY } = useViewportScroll();
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 200) {
        leafAnimation.start("start");
      } else {
        leafAnimation.start("end");
      }
    });
  }, [scrollY, leafAnimation]);
  return (
    <>
      <Wrapper>
        <Main id="move1">
          <Intro>
            <IntroName>
              배우는걸 좋아하는 <br />
              <span>박상훈</span>입니다.
            </IntroName>
            <IntroText>
              퍼블리셔 와 디자이너를 거치고
              <br />
              개발하는것에 재미와 욕심이 생겨서 <br />
              프론트 엔드 개발자를 희망하고 있습니다.
            </IntroText>
            <ScrollDown src={scrollImg} />
          </Intro>
          <SeaLeaf
            variants={leafVariants}
            initial="end"
            animate={leafAnimation}
            transition={{ type: "twin", stiffness: 1 }}
            src={spaceBottom}
            alt="SpaceBg"
          />
        </Main>
      </Wrapper>
    </>
  );
}
export default Home;
