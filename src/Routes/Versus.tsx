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

interface control {
    play: string;
    pause: string;
 }
 
 const reverseVideo = () => {
    videoRef.current.on('play',function(){
       videoRef.playBackRate = 1.0; 
    })
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
                <video ref={videoRef}
                    onMouseEnter={() => videoHandler("play")}
                    onMouseLeave={() => videoHandler("pause")}
                >
                    <source src="img/CatPunch.mp4" type="video/mp4" />
                </video>
            </Cat>
            <Dog>
                <video ref={videoRef}
                    onMouseEnter={() => videoHandler("play")}
                    onMouseLeave={() => videoHandler("pause")}
                >
                    <source src="img/DogPunch.mp4" type="video/mp4" />
                </video>
            </Dog>
        </Wrapper>
        </>
    )
}

export default Versus;