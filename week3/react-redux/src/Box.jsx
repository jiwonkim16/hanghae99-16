import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleToDo, deleteToDo } from "./redux/modules/reduceToDo";
function Box(props) {
  const dispatch = useDispatch();
  // const todoList = useSelector((state) => {
  //   // console.log(state.reduceToDo.todoList);
  //   return state.reduceToDo.todoList; // todolist 배열
  // });

  const toggleBtn = () => {
    dispatch(toggleToDo(props.id));
  };
  const removeBtn = () => {
    dispatch(deleteToDo(props.id));
  };

  return (
    <div>
      <div>
        <div>{props.title}</div>
        <div>{props.comment}</div>
        <button onClick={toggleBtn}>{props.isDone ? "취소" : "완료"}</button>
        <button onClick={removeBtn}>삭제</button>
      </div>
    </div>
  );
}

export default Box;
