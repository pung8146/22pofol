import { BrowserRouter , Route , Routes} from "react-router-dom";
import Header from "./Routes/Components/Header";
import Versus from "./Routes/Versus";
import {motion} from 'framer-motion';
import styled from "styled-components";
// import Loading from "./Loading";

import RouteTest from "./Routes/Components/RouteTest";
import Home from "./Routes/pages/Home";
import Blog from "./Routes/pages/Blog"; 
import New from "./Routes/pages/New"; 
import Edit from "./Routes/pages/Edit";
import Diary from "./Routes/pages/Diary";


function App() {
  return(
    <BrowserRouter>
    {/* <Header /> */}
    {/* <Loading /> */}
    <div className="App">
      <h2>App.js</h2>
    <Routes>
      {/* <Route path="/" element={<Versus />} />  */}
      <Route path="/" element={<Home />} /> 
      <Route path="/blog" element={<Blog />} /> 
      <Route path="/new" element={< New/>} /> 
      <Route path="/edit" element={< Edit/>} /> 
      <Route path="/diary/:id" element={< Diary/>} /> 
    </Routes>
    <RouteTest />
    </div>
    </BrowserRouter>
      )
}

export default App;