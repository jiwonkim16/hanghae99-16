import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 0,
      todo: "",
    },
  ]);
  const [todo, setTodo] = useState("");
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const onClick = () => {
    const newTodoList = {
      id: Date.now(),
      todo: todo,
    };
    setTodoList([...todoList, newTodoList]);
    setTodo("");
  };
  // console.log(todoList);

  return (
    <div>
      <div className={styles.header_style}>
        <input type="text" value={todo} onChange={onChange} />
        <button onClick={onClick}>추가하기</button>
      </div>
      <h1 className={styles.header_style}>Todo List</h1>
      <div>
        <div style={{ display: "flex", marginRight: "10px" }}>
          {todoList.map((item) =>
            item.todo == "" ? null : (
              <div className={styles.box_style} key={item.id}>
                {item.todo}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
