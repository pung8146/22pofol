import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import styled from "styled-components";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// imporrt Img
import backgroundImg from "../../img/deepSea.jpg";
import seaLeaf from "../../img/seaLeaf3.png";

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
  overflow: hidden;
`;

const SeaLeaf = styled(motion.img)`
  width: 100%;
  height: 100%;
  margin-top: 300px;
  justify-content: center;
  align-items: center;
`;

const leafVariants = {
  start: {
    translateY: "-200px",
  },
  end: {
    translateY: 0,
  },
};

function Home() {
  const leafAnimation = useAnimation();
  const { scrollY } = useViewportScroll();
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        leafAnimation.start("start");
      } else {
        leafAnimation.start("end");
      }
    });
  }, [scrollY, leafAnimation]);
  return (
    <>
      <Wrapper>
        <Main>
          <SeaLeaf
            variants={leafVariants}
            initial="end"
            animate={leafAnimation}
            src={seaLeaf}
            alt="seaLeaf"
          />
        </Main>
      </Wrapper>
    </>
  );
}

export default Home;
