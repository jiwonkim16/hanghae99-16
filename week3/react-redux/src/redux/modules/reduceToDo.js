import { act } from "react-dom/test-utils";

// action value
const ADD_ONE = "ADD_ONE";
const DELETE_ONE = "DELETE_ONE";
const TOGGLE_ONE = "TOGGLE_ONE";
// action Creator
export const addToDo = (title, comment) => {
  return {
    type: ADD_ONE,
    title: title,
    comment: comment,
    isDone: false,
    id: Date.now(),
  };
};
export const deleteToDo = () => {
  return {
    type: DELETE_ONE,
  };
};
export const toggleToDo = () => {
  // 기존 데이터를 쓰고 싶은데...
  return {
    type: TOGGLE_ONE,
    isDone: true,
  };
};
// 초기값
const initalState = {
  todoList: [
    {
      id: 0,
      title: "",
      comment: "",
      isDone: false,
    },
  ],
};

// 리듀서 함수
const reduceToDo = (state = initalState, action) => {
  const newState = { ...state };
  const newToDoList = [...newState.todoList, action];
  // console.log([...newState.todoList, action]);
  switch (action.type) {
    case ADD_ONE:
      return {
        todoList: newToDoList,
      };
    case DELETE_ONE:
      return null;
    case TOGGLE_ONE:
      return {
        todoList: newToDoList.filter((todo) => todo.isDone),
      };
    default:
      return newState;
  }
};

// 모듈을 스토어와 연결

export default reduceToDo;
