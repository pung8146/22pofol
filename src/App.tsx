import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import styled from "styled-components";

// import "./App.css";
import Header from "./Routes/Components/Header";
import Home from "./Routes/pages/Home";
import About from "./Routes/pages/About";
import Comment from "./Comment";

const Wrapper = styled.div``;
function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      {/* <Loading /> */}
      <Home />
      <About />
      <Comment />
    </Wrapper>
  );
}

export default App;
