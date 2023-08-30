import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "./redux/modules/reduceToDo";
import Box from "./Box";

function App() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");

  const todoList = useSelector((state) => {
    // console.log(state.reduceToDo.todoList);
    return state.reduceToDo.todoList; // todolist 배열
  });
  const notToDo = todoList.filter((item) => item.isDone == false);
  const doneToDo = todoList.filter((item) => item.isDone == true);

  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const commentChange = (e) => {
    setComment(e.target.value);
  };
  const onSubmit = (e) => {
    // 여기서 store로 저장되야..
    e.preventDefault();
    dispatch(addToDo(title, comment));
    // console.log(title, comment);
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
      {notToDo.map((todo) => (
        <Box key={todo.id} />
      ))}
      <div>Done...🥳</div>
      {doneToDo.map((todo) => (
        <Box key={todo.id} />
      ))}
    </div>
  );
}

export default App;
