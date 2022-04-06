import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { motion, useViewportScroll } from "framer-motion";
import styled from "styled-components";

const Box = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: black;
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

function About() {
  return (
    <>
      <Box variants={boxVariants} initial="start" animate="end">
        <AboutTitle>About Me</AboutTitle>
        <Skilles whileHover="hover" variants={skilleVariants} />
        <Skilles whileHover="hover" variants={skilleVariants} />
        <Skilles whileHover="hover" variants={skilleVariants} />
        <Skilles whileHover="hover" variants={skilleVariants} />
        <Skilles whileHover="hover" variants={skilleVariants} />
      </Box>
    </>
  );
}

export default About;
