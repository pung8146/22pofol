import React from "react";
import GlobalStyle from "./styles/GlobalStyle";

// import "./App.css";
import Header from "./Routes/Components/Header";
import Home from "./Routes/pages/Home";
import About from "./Routes/pages/About";
import Comment from "./Comment";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      {/* <Loading /> */}
      <Home />
      <About />
      <Comment />
    </div>
  );
}

export default App;
