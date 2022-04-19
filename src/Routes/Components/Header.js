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
  width: 100%;
  height: 80px;
  background-color: gold;
`;

const Items = styled(motion.ul)`
  display: flex;
  text-align: center;
  flex-direction: column;
`;

const Item = styled.li`
  margin-right: 5px;
  position: relative;
  justify-content: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  border: 1px solid transparent;
  -webkit-transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
  transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);

  ::before {
    content: "";
    position: absolute;
    left: 0px;
    bottom: 0px;
    z-index: -1;
    width: 0%;
    height: 1px;
    background: #6098ff;
    box-shadow: inset 0px 0px 0px #6098ff;
    display: block;
    -webkit-transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
    transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
  }
  :hover::before {
    width: 100%;
  }
  ::after {
    content: "";
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: -1;
    width: 0%;
    height: 1px;
    background: #6098ff;
    -webkit-transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
    transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
  }
  :hover::after {
    width: 100%;
  }
  :hover {
    border-left: 1px solid #6098ff;
    border-right: 1px solid #6098ff;
  }
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
    padding: "10px",
  },
};

// myProfile
const MyProfile = styled(motion.div)``;
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
  display: flex;
  justify-content: space-between;
`;
const IconDivVariants = {
  top: {
    flexWrap: "wrap",
    width: "100%",
  },
  scroll: {
    width: "100%",
    height: "80px",
  },
};
const ProfileA = styled(motion.a)`
  width: 23%;
  margin: 1%;
  box-sizing: border-box;
  background-color: white;
  img {
    width: 100%;
  }
`;

const ProfileH1 = styled(motion.h1)``;
const h1Variants = {
  top: {
    fontSize: "20px",
    margin: "20px 0 0 20px",
    display: "block",
  },
  scroll: {
    display: "none",
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
          <ProfileH1
            variants={h1Variants}
            initial={"top"}
            animate={navAnimation}
          >
            Call.
            <br /> 010-2274-8146
          </ProfileH1>
          <br />
          <ProfileH1
            variants={h1Variants}
            initial={"top"}
            animate={navAnimation}
          >
            Email.
            <br /> pung8146@naver.com
          </ProfileH1>
        </ProfileDiv>
      </MyProfile>
    </Nav>
  );
}

export default Header;
