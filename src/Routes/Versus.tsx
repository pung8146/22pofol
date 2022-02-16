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

const Video: React.FC<IProps> = ({ className, src }) => {
    const [nowPlaying, setNowPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [showControl, setShowControl] = useState(false);
  
    const ref = useRef<HTMLVideoElement>(null);
  
    const totalTime = (ref && ref.current && ref.current.duration) || 0;
    const videoElement = ref && ref.current;
  
    // const classProps = classNames(styles.video, className);
  
    const videoSrc = src || "";
    const startTime = Math.floor(currentTime);
  
    // 동영상 시간 업데이트 함수
    const addTimeUpdate = () => {
      const observedVideoElement = ref && ref.current;
      if (observedVideoElement) {
        observedVideoElement.addEventListener("timeupdate", function() {
          setCurrentTime(observedVideoElement.currentTime);
        });
        // 컴포넌트가 처음 마운트 될 때 동영상 시작 할지 말지 여부 (여기서는 시작되게 했음)
        setNowPlaying(true);
        observedVideoElement.play();
      }
    };


const mouseHover = () => {
    console.log("hi");
    
}

function Versus() {
    return (
        <>
        <Wrapper>
            <Cat >
                <img src="img/CatPunch.gif" />
            </Cat>
            <Dog>
                <img src="img/DogPunch.gif" />
                <video
                    ref={ref}
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