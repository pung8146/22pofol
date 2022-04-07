import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { motion, useViewportScroll } from "framer-motion";
import styled from "styled-components";
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
  background-image: url(${backgroundImg});
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

const moonVariants = {};

function Home() {
  return (
    <>
      <Wrapper>
        <Main>
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
