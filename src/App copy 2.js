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

/* firebase */
import { db } from "./firebase";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";

// import Loading from "./Loading";
// import RouteTest from "./Routes/Components/RouteTest";

const reducer = async (state, action) => {
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
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
  try {
    const docRef = await addDoc(collection(db, "diary"), {});
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  // localStorage.setItem("diary", JSON.stringify(newState));
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  // useEffect(() => {
  //   // const fireData = localStorage.getItem("diary");
  //   const fireData = await getDocs(collection(db, "diary"));
  //   if (fireData) {
  //     const diaryList = JSON.parse(fireData).sort(
  //       (a, b) => parseInt(b.id) - parseInt(a.id)
  //     );

  //     if (diaryList.length >= 1) {
  //       dataId.current = parseInt(diaryList[0].id) + 1;
  //       dispatch({ type: "INIT", data: diaryList });
  //     }
  //   }
  // }, []);

  const dataId = useRef(0);
  // Create
  const onCreate = (date, content, emotion) => {
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
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  // EDIT
  const onEdit = (targetId, date, content, emotion) => {
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
