import styled from "styled-components";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-scroll";

const Nav = styled(motion.nav)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  position: fixed;
  z-index: 2;
  width: 100%;
  top: 0;
  height: 80px;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.svg`
  width: 30px;
  height: 20px;
  background-color: gold;
  margin-right: 50px;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const Item = styled.li`
  margin-right: 20px;
  position: relative;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Circle = styled.span`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  bottom: -15px;
  margin: 0 auto;
  left: 0;
  right: 0;
  background-color: white;
  /* background-color: ${(props) => props.theme.red}; */
`;

const navVariants = {
  top: {
    backgroundColor: "rgba(255,255,255,0.3)",
  },
  scroll: {
    backgroundColor: "rgba(255,255,255,1)",
  },
  bottom: {
    backgroundColor: "rgba(255,255,255,0.3)",
  },
};

function Header() {
  const navAnimation = useAnimation();
  const { scrollY } = useViewportScroll();
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start("scroll");
      } else if (scrollY.get() > 500) {
        navAnimation.start("bottom");
      } else {
        navAnimation.start("top");
      }
    });
  }, [scrollY, navAnimation]);
  return (
    <Nav variants={navVariants} initial={"top"} animate={navAnimation}>
      <Col>
        <Logo />

        <Items>
          <Link to="1" spy={true} smooth={true}>
            <Item>
              Home
              <Circle />
            </Item>
          </Link>
          <Link to="2" spy={true} smooth={true}>
            <Item>
              About
              <Circle />
            </Item>
          </Link>
          <Link to="3" spy={true} smooth={true}>
            <Item>
              Comment
              <Circle />
            </Item>
          </Link>
          <Link to="4" spy={true} smooth={true}>
            <Item>
              Contact
              <Circle />
            </Item>
          </Link>
        </Items>
      </Col>
      <Col>{/* <button>search</button> */}</Col>
    </Nav>
  );
}

export default Header;
