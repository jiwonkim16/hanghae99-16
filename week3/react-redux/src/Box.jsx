import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleToDo, deleteToDo } from "./redux/modules/reduceToDo";
function Box() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => {
    // console.log(state.reduceToDo.todoList);
    return state.reduceToDo.todoList; // todolist 배열
  });

  const toggleBtn = () => {
    dispatch(toggleToDo());
  };
  const removeBtn = () => {
    dispatch(deleteToDo());
  };

  return (
    <div>
      {todoList.map((todo) => {
        return (
          <div key={todo.id}>
            <div>{todo.title}</div>
            <div>{todo.comment}</div>
            <button
              onClick={() => {
                toggleBtn();
              }}
            >
              {todo.isDone ? "취소" : "완료"}
            </button>
            <button
              onClick={() => {
                removeBtn();
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Box;
