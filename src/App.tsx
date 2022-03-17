import { useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Routes/Components/Header";
import Versus from "./Routes/Versus";
import { motion } from "framer-motion";
import styled from "styled-components";

import "./App.css";
import Home from "./Routes/pages/Home";
import Blog from "./Routes/pages/Blog";
import New from "./Routes/pages/New";
import Edit from "./Routes/pages/Edit";
import Diary from "./Routes/pages/Diary";
import MyButton from "./Routes/Components/MyButton";
import MyHeader from "./Routes/Components/MyHeader";

// import Loading from "./Loading";

// import RouteTest from "./Routes/Components/RouteTest";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case " INIT": {
      return action.data;
    }
    case "CREATE": {
      const newItem = {
        ...action.data,
      };
      newState = [newItem, ...state];
      break;
    }
    case 'REMOVE' : {
      newState = state.filter((it)=>it.id !== action.targetId);
      break;
    }
  }
    case 'EDIT' : {
      newState = state.map((it)=>it.id === action.data.id? {...aciton.data}: it)
      break;
    }
    default:
      return state;
  }
};

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  return (
    <BrowserRouter>
      {/* <Header /> */}
      {/* <Loading /> */}
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Versus />} />  */}
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
