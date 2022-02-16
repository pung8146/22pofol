import React , { useRef , useState } from "react"

import { motion } from "framer-motion";
import styled from "styled-components";

interface IProps {
    className? : string;

}

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


function Versus(props:any) {
    const mouseHover = () => {
      console.log("hi");
      this.refs.video.play()
    }

    return (    
        <>
        <Wrapper>
            <Cat >
                <img src="img/CatPunch.gif" />
            </Cat>
            <Dog>
                <img src="img/DogPunch.gif" />
                <video
                    ref={video}
                    onMouseEnter={mouseHover}
                >
                    <source src="img/Dog.mp4" type="video/mp4" />
                </video>
                
            </Dog>
        </Wrapper>
        </>
    )
}

export default Versus;