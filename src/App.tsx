import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { motion, useViewportScroll } from "framer-motion";
import GlobalStyle from "./styles/GlobalStyle";
import styled from "styled-components";

// imporrt Img
import backgroundImg from "./img/moonNight.jpg";
import backgroundImg2 from "./img/moonNight2.jpg";
import moonImg from "./img/moon.png";

// import "./App.css";
import Header from "./Routes/Components/Header";
import Blog from "./Routes/pages/Blog";
import BlogFire from "./Routes/pages/BlogFire";
import Animal from "./Routes/Animal";
import Comment from "./Comment";

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

const Box = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: black;
  /* background-image: url(${backgroundImg2}); */
  justify-content: space-around;
`;

const AboutTitle = styled(motion.h1)`
  color: white;
`;

const Skilles = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.6);
  height: 200px;
  width: 200px;
  place-self: center;
  border-radius: 100px;
`;

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const skilleVariants = {
  start: {
    opacity: 0,
    y: -10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
  hover: { scale: 1.2, rotateZ: 90 },
};

function App() {
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    scrollY.onChange(() => {
      console.log(scrollY.get());
    });
  }, []);
  return (
    <>
      <GlobalStyle />
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
        <Box variants={boxVariants} initial="start" animate="end">
          <AboutTitle>About Me</AboutTitle>
          <Skilles whileHover="hover" variants={skilleVariants} />
          <Skilles whileHover="hover" variants={skilleVariants} />
          <Skilles whileHover="hover" variants={skilleVariants} />
          <Skilles whileHover="hover" variants={skilleVariants} />
          <Skilles whileHover="hover" variants={skilleVariants} />
        </Box>
      </Wrapper>
    </>
  );
}

export default App;
