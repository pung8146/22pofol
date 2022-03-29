import React, { useEffect, useReducer, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Components/Header";
import { motion } from "framer-motion";
import styled from "styled-components";

import "../../App.css";
import Home from "./Home";
import New from "./New";
import Edit from "./Edit";
import Diary from "./Diary";
import MyButton from "../Components/MyButton";
import MyHeader from "../Components/MyHeader";

// import Loading from "./Loading";

// import RouteTest from "./Routes/Components/RouteTest";

import {
  addDoc,
  collection,
  setDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase";
import { async } from "@firebase/util";

const reducer = async (state, action) => {
  let newState = [];

  switch (action.type) {
    case "INIT": {
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

  // localStorage.setItem("diary", JSON.stringify(newState));
  try {
    const docRef = await setDoc(collection(db, "test"), {});
  } catch (e) {}
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function BlogFire() {
  const [data, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const fetchData = async () => {
      const localData = await getDocs(collection(db, "test"));
      if (localData) {
        const diaryList = JSON.parse(localData)
          .forEach((doc) => {})
          .sort((a, b) => parseInt(b.id) - parseInt(a.id));
        dataId.current = parseInt(diaryList[0].id) + 1;

        dispatch({ type: "INIT", data: diaryList });
      }
    };
    fetchData();
  }, []);

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
              {/* <Route path="/" element={<Versus />} /> */}
              <Route path="/" element={<Home />} />
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

export default BlogFire;
