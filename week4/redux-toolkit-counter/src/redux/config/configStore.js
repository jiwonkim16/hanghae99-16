import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter";
import { configureStore } from "@reduxjs/toolkit";

// 일반 리듀서
// const rootReducer = combineReducers({
//   counter,
// });
// const store = createStore(rootReducer);

// 리덕스 툴 킷
// 기존 createStore로 store를 만드는 방식보다 configureStore함수로 만드는 것을 권장하고 있음.
// 그리고 configureStore는 () 안에 객체가 들어가고 그 안에는 리듀서가 들어감.
const store = configureStore({
  reducer: {
    counter: counter,
  },
});

export default store;
