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
  font-size: 60px;
  font-weight: bold;
`;
// left 스킬
const LeftBox = styled(motion.div)`
  background-color: gold;
  width: 50vw;
  height: 500px;
`;
const IntroMe = styled(motion.h1)`
  color: white;
  font-size: 20px;
  line-height: 40px;
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
        <LeftBox>
          <IntroMe>
            처음 입문은 아카데미에서 퍼블리셔 과정을 수료하고 퍼블리셔와
            디자이너로써 업무를 하였습니다. <br /> 그러면서 FrontEnd 기술들을
            접하고 공부하면서 그것을 스스로 적용시키는 재미에 매료되었습니다.
            <br />
            그러면서 전문적으로 FrontEnd분야에 도전해보고 싶다고생각했습니다.
            <br /> 요새 필수인 JS와 React 는 공부하면서 제 포트폴리오의 기반으로
            적용시켰으며, CRUD 구현을 위해 FireBase를 이용하였습니다, 또한
            TS,Next,Gatsby등 여러 기술들을 공부하면서 간단한 프로젝트등을
            구현하는등 계속 성장해가기 위해 노력하고있습니다.
          </IntroMe>
        </LeftBox>
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
