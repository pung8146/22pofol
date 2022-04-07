import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { motion, useViewportScroll, useAnimation } from "framer-motion";
import styled from "styled-components";

const Box = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(14, 14, 147, 1) 100%
  );
  justify-content: space-around;
`;

const AboutTitle = styled(motion.h1)`
  color: white;
`;
const SkilleBox = styled(motion.div)`
  display: flex;
  width: 90vw;
  height: 500px;
  margin: 400px auto;
  background-color: tomato;
  justify-content: space-around;
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
    opacity: 0.5,
  },
  end: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

const skilleBoxVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
  potateto: {},
};

const skilleVariants = {
  start: {
    opacity: 0,
    y: -10,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
  hover: { scale: 1.2, rotateZ: 90 },
};

function About() {
  const navAnimation = useAnimation();
  const { scrollY } = useViewportScroll();
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 700) {
        navAnimation.start("show");
      } else {
        navAnimation.start("hidden");
      }
    });
  }, [scrollY, navAnimation]);
  return (
    <>
      <Box variants={boxVariants} initial="start" animate="end">
        <AboutTitle>About Me</AboutTitle>
        <SkilleBox
          variants={skilleBoxVariants}
          initial="hidden"
          animate={navAnimation}
        >
          <Skilles
            whileHover="hover"
            variants={skilleVariants}
            initial="start"
            animate="end"
          />
          <Skilles
            whileHover="hover"
            variants={skilleVariants}
            initial="start"
            animate="end"
          />
          <Skilles
            whileHover="hover"
            variants={skilleVariants}
            initial="start"
            animate="end"
          />
          <Skilles
            whileHover="hover"
            variants={skilleVariants}
            initial="start"
            animate="end"
          />
          <Skilles
            whileHover="hover"
            variants={skilleVariants}
            initial="start"
            animate="end"
          />
        </SkilleBox>
      </Box>
    </>
  );
}

export default About;
