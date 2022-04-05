import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import backgroundImg from "../img/moonNight.jpg";
import moonImg from "../img/moon.png";
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
  width: 300px;
  height: 300px;
  display: flex;
  background-color: gold;
`;

const Skilles = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  place-self: center;
  border-radius: 35px;
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
  hover: { scale: 1.5, rotateZ: 90 },
};

function Animal() {
  return (
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
        <Skilles whileHover="hover" variants={skilleVariants} />
        <Skilles whileHover="hover" variants={skilleVariants} />
        <Skilles whileHover="hover" variants={skilleVariants} />
        <Skilles whileHover="hover" variants={skilleVariants} />
        <Skilles whileHover="hover" variants={skilleVariants} />
        <Skilles whileHover="hover" variants={skilleVariants} />
      </Box>
    </Wrapper>
  );
}

export default Animal;
