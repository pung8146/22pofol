import React , { useRef , useState } from "react"
import { motion } from "framer-motion";
import styled from "styled-components";
// import "./Versus.css";

const Wrapper = styled.div`
    width:100vw;
    height:100vh;
    background:pink;
    align-items: center;
    display:flex;
`;

const Box = styled(motion.div)`
        width:50vw;
        height:80vh;
        background-color: gold;
`;

const Cat = styled(Box)`
    background:red;
    left:0;
`;

const Dog = styled(Box)`
    background:Blue;
    right:0;
`;

const Video = styled(motion.video)`
    /* width: 100%;
    height:100%; */
`

interface control {
    play: string;
    pause: string;
 }

function Versus(props:any) {

    const videoRef = useRef<HTMLVideoElement>(null!);

    const videoHandler = (control:string) => {
        if (control === "play") {
          videoRef.current.play();
        } else if (control === "pause"){
          videoRef.current.pause();
        }
      };

    return (    
        <>
        <Wrapper>
            <Cat >
                <Video ref={videoRef}
                    onMouseEnter={() => videoHandler("play")}
                    onMouseLeave={() => videoHandler("pause")}
                >
                    <source src="img/CatPunch.mp4" type="video/mp4" />
                </Video>
            </Cat>
            <Dog>
                <Video ref={videoRef}
                    onMouseEnter={() => videoHandler("play")}
                    onMouseLeave={() => videoHandler("pause")}
                >
                    <source src="img/DogPunch.mp4" type="video/mp4" />
                </Video>
            </Dog>
        </Wrapper>
        </>
    )
}

export default Versus;