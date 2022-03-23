import React, { useReducer, useRef } from "react";
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

const reducer = (state: any, action: any) => {
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
    case "REMOVE": {
      newState = state.filter((it: any) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it: any) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const DiaryStateContext = React.createContext("");
export const DiaryDispatchContext = React.createContext({});

const dummyData = [
  {
    id: 1,
    emotion: 1,
    content: "오늘의 일기 1번",
    date: 1647833955865,
  },
  {
    id: 2,
    emotion: 2,
    content: "오늘의 일기 2번",
    date: 1647833955866,
  },
  {
    id: 3,
    emotion: 3,
    content: "오늘의 일기 3번",
    date: 1647833955867,
  },
  {
    id: 4,
    emotion: 4,
    content: "오늘의 일기 4번",
    date: 1647833955868,
  },
  {
    id: 5,
    emotion: 5,
    content: "오늘의 일기 5번",
    date: 1647833955869,
  },
];

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);

  const dataId = useRef(0);
  // Create
  const onCreate = (date: any, content: any, emotion: any) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };
  // Remove
  const onRemove = (targetId: any) => {
    dispatch({ tpye: "REMOVE", targetId });
  };
  // EDIT
  const onEdit = (targetId: any, date: any, content: any, emotion: any) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
        value={{
          onCreate,
          onEdit,
          onRemove,
        }}
      >
        <BrowserRouter>
          {/* <Header /> */}
          {/* <Loading /> */}
          <div className="App">
            <Routes>
              {/* <Route path="/" element={<Versus />} />  */}
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/diary/:id" element={<Diary />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
