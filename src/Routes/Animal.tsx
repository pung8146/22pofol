import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: tomato;
`;

const Main = styled(motion.div)`
  width: 100vw;
  height: 300px;
  background-color: skyblue;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 300px;
  display: flex;
  background-color: gold;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
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
      <Main />
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
