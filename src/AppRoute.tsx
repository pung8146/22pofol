import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
      <BrowserRouter>
        {/* <Loading /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
