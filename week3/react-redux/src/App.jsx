import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "./redux/modules/reduceToDo";
import Box from "./Box";

function App() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");

  const todoIsDone = useSelector((state) => {
    return state.reduceToDo;
  });
  const todoList = todoIsDone.todoList;

  const notToDo = todoList
    .filter((item) => item.isDone == false)
    .map((item) => (
      <Box
        key={item.id}
        title={item.title}
        comment={item.comment}
        isDone={item.isDone}
        id={item.id}
      />
    ));

  const doneToDo = todoList
    .filter((item) => item.isDone == true)
    .map((item) => (
      <Box
        key={item.id}
        title={item.title}
        comment={item.comment}
        isDone={item.isDone}
        id={item.id}
      />
    ));

  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const commentChange = (e) => {
    setComment(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addToDo(title, comment));
    setTitle("");
    setComment("");
  };

  return (
    <div>
      <div>
        <div>ToDoList</div>
      </div>
      <form>
        <input
          type="text"
          placeholder="할 일의 제목 입력하세요"
          value={title}
          onChange={titleChange}
        />
        <input
          type="text"
          placeholder="할 일의 내용을 입력하세요"
          value={comment}
          onChange={commentChange}
        />
        <button onClick={onSubmit}>입력하기</button>
      </form>
      <div>Working...🔥</div>
      {notToDo}
      <div>Done...🥳</div>
      {doneToDo}
    </div>
  );
}

export default App;
