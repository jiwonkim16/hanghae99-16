import React, { useState } from "react";
import {
  Button,
  InputContainer,
  PageWrapper,
  TodoCard,
  TodoContainer,
  TodoHeader,
  TodoListContainer,
} from "./components/styles";
import nextId from "react-id-generator";
import { __addToDo, __deleteTodo } from "./redux/modules/todosSlice";
import { useRecoilState } from "recoil";
import { toDo } from "./redux/atom";

function App() {
  const id = nextId();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [todos, setTodos] = useRecoilState(toDo);
  const onAddTodo = () => {
    setTimeout(() => {
      setTodos((current) => {
        return [{ id, title, body }, ...current];
      });
    }, 2000);

    resetInputs();
  };

  const onDeleteTodo = (id) => {
    const deleteTodos = todos.filter((item) => id !== item.id);
    setTodos(deleteTodos);
  };

  const resetInputs = () => {
    setTitle("");
    setBody("");
  };
  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeBody = (e) => setBody(e.target.value);
  return (
    <PageWrapper>
      <TodoContainer>
        <TodoHeader>🐢 SLOW TODO LIST 🐢</TodoHeader>
        <InputContainer>
          <span>제목: </span>
          <input
            value={title}
            placeholder="할 일 제목"
            onChange={onChangeTitle}
          />
          <span>내용: </span>
          <input
            value={body}
            placeholder="할 일 내용"
            onChange={onChangeBody}
          />

          <Button onClick={onAddTodo}>+ 추가하기</Button>
        </InputContainer>
        <TodoListContainer>
          {todos.map((todo) => (
            <TodoCard key={todo.id}>
              <span>제목: {todo.title}</span>
              <span>할 일: {todo.body}</span>
              <Button onClick={() => onDeleteTodo(todo.id)}>삭제하기</Button>
            </TodoCard>
          ))}
        </TodoListContainer>
      </TodoContainer>
    </PageWrapper>
  );
}

export default App;
