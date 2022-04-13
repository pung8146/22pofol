import React, { useEffect, useLayoutEffect } from "react";
import { motion, useViewportScroll, useAnimation } from "framer-motion";
import styled from "styled-components";
import "./About.css";
import moonImg from "../../img/moon.png";

const Box = styled(motion.div)`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(14, 14, 147, 1) 100%
  );
  justify-content: space-around;
`;

const AboutTitle = styled(motion.h1)`
  color: white;
  text-align: center;
  padding: 20px 0;
  font-size: 40px;
`;
// 행성계
const SolarSystem = styled(motion.div)`
  width: 50vw;
  margin: 100px auto 0;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Orbit = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fafbfc;
  border-radius: 50%;
`;

const Plant = styled(motion.div)`
  position: absolute;
  top: -35px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-size: cover;
  background-image: url(${moonImg});
  background-color: white;
  cursor: pointer;
`;

const Sun = styled(motion.div)`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #ffab91;
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

const PlantVariants = {
  start: {
    scale: 1,
  },
  hover: {
    scale: 2,
    rotateX: 360,
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
          <SolarSystem>
            <Orbit className="earth-orbit">
              <Plant
                variants={PlantVariants}
                whileHover="hover"
                className="earth"
              />
              <Orbit className="js-orbit">
                <Plant
                  variants={PlantVariants}
                  whileHover="hover"
                  className="js"
                />
                <Orbit className="venus-orbit">
                  <Plant
                    variants={PlantVariants}
                    whileHover="hover"
                    className="venus"
                  />
                  <Orbit className="mercury-orbit">
                    <Plant
                      variants={PlantVariants}
                      whileHover="hover"
                      className="mercury"
                    />
                    <Sun />
                  </Orbit>
                </Orbit>
              </Orbit>
            </Orbit>
          </SolarSystem>
        </div>
      </Box>
    </>
  );
}

export default About;
