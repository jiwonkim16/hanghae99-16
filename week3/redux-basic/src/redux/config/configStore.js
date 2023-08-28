// 중앙 데이터 관리소(state)를 설정하는 부분
import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter";
import users from "../modules/users";

const rootReducer = combineReducers({
  // 리듀서들이 들어온다.
  counter: counter, // 이렇게 하면 어플리케이션 전체에서 counter라는 리듀서를 쓰게 됨.
  users: users,
});
const store = createStore(rootReducer);

export default store;
