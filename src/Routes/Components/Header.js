import styled from "styled-components";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-scroll";
import github from "../../../src/img/github.png";
// navLink

const Nav = styled(motion.nav)`
  justify-content: space-between;
  display: flex;
  font-size: 14px;
  position: fixed;
  z-index: 2;
  top: 0;
`;

const Col = styled.div``;

const Logo = styled.svg`
  width: 30px;
  height: 20px;
  background-color: gold;
  margin-top: 60px;
`;

const Items = styled(motion.ul)`
  display: flex;
  text-align: center;
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

const navVariants = {
  top: {
    flexDirection: "column",
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "white",
    width: "15%",
    height: "100vh",
  },
  scroll: {
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,0)",
    width: "100%",
    height: "80px",
    justifyContent: "space-between",
  },
};

const navScrollVariants = {
  top: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    lineHeight: "80px",
    fontSize: "20px",
  },
  scroll: {
    flexDirection: "row",
    flexWrap: "nowrap",
  },
};

// myProfile
const MyProfile = styled(motion.div)`
  background-color: gold;
`;
const profileScrollVariants = {
  top: {
    width: "100%",
    height: "300px",
  },
  scroll: {
    width: "40%",
    height: "80px",
  },
};

const ProfileDiv = styled(motion.div)`
  width: 100%;
  display: flex;
`;
const IconDivVariants = {
  top: {
    flexWrap: "wrap",
    width: "100%",
  },
  scroll: {
    lineHeight: "center",
    flexWrap: "nowrap",
    width: "100%",
    height: "80px",
    backgroundColor: "white",
  },
};
const ProfileA = styled(motion.a)`
  width: 25%;
  background-color: tomato;

  img {
    width: 100%;
  }
`;

const ProfileH1 = styled(motion.h1)`
  color: black;
`;

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
      <MyProfile
        variants={profileScrollVariants}
        initial={"top"}
        animate={navAnimation}
      >
        <ProfileDiv
          variants={IconDivVariants}
          initial={"top"}
          animate={navAnimation}
        >
          <ProfileA target="_blank" href="https://github.com/">
            <img src={github} alt="github" />
          </ProfileA>
          <ProfileA target="_blank" href="https://github.com/">
            <img src={github} alt="github" />
          </ProfileA>
          <ProfileA target="_blank" href="https://github.com/">
            <img src={github} alt="github" />
          </ProfileA>
          <ProfileA target="_blank" href="https://github.com/">
            <img src={github} alt="github" />
          </ProfileA>
          <ProfileH1>Call. 010-2274-8146</ProfileH1>
          <br />
          <ProfileH1>Email. pung8146@naver.com</ProfileH1>
        </ProfileDiv>
      </MyProfile>
    </Nav>
  );
}

export default Header;
