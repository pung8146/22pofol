import React, { useEffect, useReducer, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Routes/Components/Header";
import { motion } from "framer-motion";
import styled from "styled-components";

import "./App.css";
import Blog from "./Routes/pages/Blog";
import BlogFire from "./Routes/pages/BlogFire";
import Animal from "./Routes/Animal";
import Comment from "./Comment";
function App() {
  return (
    <div>
      <Comment />
      {/* <Animal /> */}
      {/* <Blog /> */}
      {/* <BlogFire /> */}
    </div>
  );
}

export default App;
