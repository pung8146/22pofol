import React, { useEffect, useReducer, useRef } from "react";
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
      newState = [action.data, ...state];
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
  localStorage.setItem("diary", JSON.stringify(newState));
  return newState;
};

export const DiaryStateContext = React.createContext("");
export const DiaryDispatchContext = React.createContext({});

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const localData = localStorage.getItem("diary");
    if (localData) {
      const diaryList = JSON.parse(localData).sort(
        (a: any, b: any) => parseInt(b.id) - parseInt(a.id)
      );
      dataId.current = parseInt(diaryList[0].id) + 1;

      dispatch({ type: "INIT", data: diaryList });
    }
  }, []);

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
    dispatch({ type: "REMOVE", targetId });
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
