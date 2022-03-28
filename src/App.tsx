import React, { useEffect, useReducer, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Routes/Components/Header";
import Versus from "./Routes/Versus";
import { motion } from "framer-motion";
import styled from "styled-components";

import "./App.css";
import Blog from "./Routes/pages/Blog";
function App() {
  return (
    <div>
      <Versus />
      <Blog />
    </div>
  );
}

export default App;
