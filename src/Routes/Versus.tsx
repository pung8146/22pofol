import React, { useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import styled from "styled-components";
// import "./Versus.css";

const Wrapper = styled.div`
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
  background: #212121;
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
  background: #f5f5f5;
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

function Versus(props: any) {
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
      <Wrapper>
        <Cat transition={{ type: "spring" }} whileHover={{ width: "80vw" }}>
          <h2>Do You Like Cat ?</h2>
          <CatVideo
            ref={videoRef}
            onMouseEnter={() => videoHandler("play")}
            onMouseLeave={() => videoHandler("pause")}
          >
            <source src="img/CatPunch.mp4" type="video/mp4" />
          </CatVideo>
        </Cat>
        <Dog transition={{ type: "spring" }} whileHover={{ width: "80vw" }}>
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
