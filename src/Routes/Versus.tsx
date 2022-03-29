import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";
// import "./Versus.css";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background: pink;
  align-items: center;
  display: flex;
  overflow: hidden;
`;

const Cat = styled(motion.div)`
  width: 50vw;
  height: 100vh;
  /* background: #212121; */
  h2 {
    text-align: center;
    padding: 20px;
    font-size: 50px;
    color: white;
  }
`;

const Dog = styled(motion.div)`
  width: 50vw;
  height: 100vh;
  /* background: #f5f5f5; */
  h2 {
    text-align: center;
    padding: 20px;
    font-size: 50px;
    color: #212121;
  }
`;

const CatVideo = styled(motion.video)`
  width: 200px;
  display: flex;
  margin: 20px auto;
`;

const DogVideo = styled(motion.video)`
  width: 200px;
  display: flex;
  margin: 20px auto;
`;

const Video = styled(motion.video)`
  /* width: 100%;
  height: 80%; */
`;

interface control {
  play: string;
  pause: string;
}

const boxVariants = {
  initial: {
    scale: 1.5,
  },
  clickon: { scale: 1.8 },
  clickoff: { sclae: 1.0 },
};
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
function Versus() {
  const x = useMotionValue(0);
  const gradient = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(0, 0, 0), rgb(0, 0, 0))",
      "linear-gradient(135deg, rgb(111, 111, 111), rgb(255, 255, 255))",
    ]
  );
  // const { scrollYProgress } = useViewportScroll();
  const videoRef = useRef<HTMLVideoElement>(null!);

  const videoHandler = (control: string) => {
    if (control === "play") {
      videoRef.current.play();
    } else if (control === "pause") {
      videoRef.current.pause();
    }
  };

  return (
    <>
      <Wrapper style={{ background: gradient }}>
        <Box style={{ x }} drag="x" dragSnapToOrigin />
        <Cat>
          <h2>Do You Like Cat ?</h2>
          <CatVideo
            ref={videoRef}
            onMouseEnter={() => videoHandler("play")}
            onMouseLeave={() => videoHandler("pause")}
          >
            <source src="img/CatPunch.mp4" type="video/mp4" />
          </CatVideo>
        </Cat>
        <Dog>
          <h2>Do you Like Dog ?</h2>
          <DogVideo
            ref={videoRef}
            onMouseEnter={() => videoHandler("play")}
            onMouseLeave={() => videoHandler("pause")}
          >
            <source src="img/DogPunch.mp4" type="video/mp4" />
          </DogVideo>
        </Dog>
      </Wrapper>
    </>
  );
}

export default Versus;
