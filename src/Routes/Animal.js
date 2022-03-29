import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  createContext,
} from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background: pink;
  overflow: hidden;
`;

const Box = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
`;

const AnimalBox = styled(Box)`
  background: gold;
`;
const IntroBox = styled(Box)`
  background: white;
`;

const Cursor = () => {
  const dot = useRef(null);
  const dotOutline = useRef(null);
};

// Hover state - https://dev.to/spaciecat/hover-states-with-react-hooks-4023
const useHover = () => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  const enter = () => setHovered(true);
  const leave = () => setHovered(false);

  useEffect(() => {
    ref.current.addEventListener("mouseenter", enter);
    ref.current.addEventListener("mouseleave", leave);
    return () => {
      ref.current.removeEventListener("mouseenter", enter);
      ref.current.removeEventListener("mouseleave", leave);
    };
  }, [ref]);

  return [ref, hovered];
};

// Mouse position
const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return position;
};

// Element position
const usePosition = () => {
  const ref = useRef();
  const [position, setPosition] = useState({});

  const handleResize = () => {
    setPosition(ref.current.getBoundingClientRect());
  };

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref.current]);

  return [ref, position];
};

function Animal() {
  return (
    <>
      <Wrapper>
        <AnimalBox></AnimalBox>
        <IntroBox />
      </Wrapper>
    </>
  );
}

export default Animal;
