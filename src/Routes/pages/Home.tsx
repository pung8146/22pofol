import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { motion, useViewportScroll } from "framer-motion";
import styled, { keyframes } from "styled-components";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// imporrt Img
import backgroundImg from "../../img/moonNight.jpg";
import moonImg from "../../img/moon.png";

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
`;

const Main = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: skyblue;
  display: flex;
  /* background-image: url(${backgroundImg}); */
  background-size: cover;
`;

const Moon = styled(motion.img)`
  width: 15vw;
  height: 15vw;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 28%;
  left: 20.5%;
  cursor: pointer;
`;

const typing = keyframes`
    from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  from, to { border-color: transparent }
  50% { border-color: black }
`;

const IntroMe = styled(motion.h1)`
  font-size: 60px;
  height: 60px;
  color: #fff;
  font-family: monospace;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: ${typing} 3.5s steps(30, end), ${blink} 0.5s step-end infinite;
`;

const moonVariants = {};

function Home() {
  return (
    <>
      <Wrapper id="move1">
        <Main>
          <IntroMe>
            안녕하세요 .
            <br />
          </IntroMe>
          <Moon
            drag
            dragSnapToOrigin
            dragConstraints={{ top: -50, bottom: 50, left: -50, right: 50 }}
            animate={{ rotateZ: 360 }}
            transition={{
              repeat: Infinity,
              duration: 20,
            }}
            src={moonImg}
            alt="moon"
          />
        </Main>
      </Wrapper>
    </>
  );
}

export default Home;
