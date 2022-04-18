import React, { useEffect, useLayoutEffect } from "react";
import { motion, useViewportScroll, useAnimation } from "framer-motion";
import styled from "styled-components";
import "./About.css";
import moonImg from "../../img/moon.png";
import galaxyImg from "../../img/galaxy.png";

const Box = styled(motion.div)`
  width: 100vw;
  min-height: 100vh;
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  /* background-image: url(${galaxyImg}); */
  /* background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(14, 14, 147, 1) 100%
  );
  justify-content: space-around; */
`;

const AboutTitle = styled(motion.h1)`
  width: 100%;
  color: white;
  text-align: center;
  padding: 60px 0;
  font-size: 40px;
  font-weight: bold;
`;
// left 스킬
const MySkilles = styled(motion.div)`
  background-color: white;
  width: 50vw;
  height: 500px;
`;
// 행성계
const RightBox = styled(motion.div)`
  width: 50vw;
`;

const SolarSystem = styled(motion.div)`
  margin: 0 auto;
  text-align: center;
`;
const Orbit = styled(motion.div)`
  margin: 0 auto;
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
    opacity: 1,
  },
  end: {
    opacity: 1,
    // backgroundImage: `url(${galaxyImg})`,
    transition: {
      // delay: 10,
      // duration: 2,
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
      if (scrollY.get() > 600) {
        navAnimation.start("end");
      } else {
        navAnimation.start("start");
      }
    });
  }, [scrollY, navAnimation]);
  return (
    <>
      <Box
        id="move2"
        variants={boxVariants}
        initial="start"
        animate={navAnimation}
      >
        <AboutTitle>About Me</AboutTitle>
        <MySkilles></MySkilles>
        <RightBox>
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
        </RightBox>
      </Box>
    </>
  );
}

export default About;
