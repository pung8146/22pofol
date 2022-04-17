import styled from "styled-components";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-scroll";

const Nav = styled(motion.nav)`
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  position: fixed;
  z-index: 2;
  top: 0;
`;

const Col = styled.div`
  align-items: center;
`;

const Logo = styled.svg`
  width: 30px;
  height: 20px;
  background-color: gold;
  margin-top: 60px;
`;

const Items = styled(motion.ul)`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
  margin-right: 20px;
  position: relative;
  justify-content: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
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
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "white",
    width: "15%",
    height: "100vh",
  },
  scroll: {
    backgroundColor: "rgba(0,0,0,0)",
    width: "100%",
    height: "80px",
  },
};

const navScrollVariants = {
  top: {
    display: "flex",
    flexDirection: "column",
    lineHeight: "80px",
    fontSize: "20px",
  },
  scroll: {
    display: "flex",
    flexDirection: "row",
  },
};

function Header() {
  const navAnimation = useAnimation();
  const { scrollY } = useViewportScroll();
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 100) {
        navAnimation.start("scroll");
      } else {
        navAnimation.start("top");
      }
    });
  }, [scrollY, navAnimation]);
  return (
    <Nav variants={navVariants} initial={"top"} animate={navAnimation}>
      <Col>
        <Items
          variants={navScrollVariants}
          initial={"top"}
          animate={navAnimation}
        >
          <Logo />
          <Link to="move1" spy={true} smooth={true}>
            <Item>
              Home
              {/* <Circle /> */}
            </Item>
          </Link>
          <Link to="move2" spy={true} smooth={true}>
            <Item>
              About
              {/* <Circle /> */}
            </Item>
          </Link>
          <Link to="move3" spy={true} smooth={true}>
            <Item>
              Comment
              {/* <Circle /> */}
            </Item>
          </Link>
          <Link to="move4" spy={true} smooth={true}>
            <Item>
              Contact
              {/* <Circle /> */}
            </Item>
          </Link>
        </Items>
      </Col>
      <Col>{/* <button>search</button> */}</Col>
    </Nav>
  );
}

export default Header;
