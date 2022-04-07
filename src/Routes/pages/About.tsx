import React, { useEffect, useLayoutEffect } from "react";
import { motion, useViewportScroll, useAnimation } from "framer-motion";
import styled from "styled-components";
import "./About.css";

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
        <div className="spinner-box">
          <div className="solar-system">
            <div className="earth-orbit orbit">
              <div className="planet earth"></div>
              <div className="venus-orbit orbit">
                <div className="planet venus"></div>
                <div className="mercury-orbit orbit">
                  <div className="planet mercury"></div>
                  <div className="sun"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}

export default About;
