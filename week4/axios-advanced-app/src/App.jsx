// import axios from "axios";
import api from "./axios/api";
import { useEffect, useState } from "react";
import instance from "./axios/api";

function App() {
  const [todos, setTodos] = useState(null);
  const [inputValue, setInputValue] = useState({
    title: "",
  });
  const [targetId, setTargetId] = useState("");
  const [contents, setContents] = useState("");
  const onChange = (event) => {
    setInputValue({
      title: event.target.value,
    });
  };
  const onClick = async (event) => {
    event.preventDefault();
    // 버튼 클릭시 state를 이용하여 DB에 저장(post요청)
    instance.post("/todos", inputValue);
    fetchTodos();
  };

  const fetchTodos = async () => {
    // const { data } = await axios.get("http://localhost:4000/todos");
    const { data } = await instance.get("/todos");
    setTodos(data);
  };
  const onDeleteBtn = async (id) => {
    instance.delete(`/todos/${id}`);
    setTodos(
      todos.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const onUpdateBtn = async () => {
    instance.patch(`/todos/${targetId}`, {
      title: contents,
    });

    setTodos(
      todos.map((item) => {
        if (item.id == targetId) {
          return { ...item, title: contents };
        } else {
          return item;
        }
      })
    );
  };

  useEffect(() => {
    // app이 마운트될 때, db로부터 값을 가져올 것이다.
    fetchTodos();
  }, []);
  return (
    <div>
      <div>
        {/*수정 영역*/}
        <input
          type="text"
          value={targetId}
          onChange={(e) => {
            setTargetId(e.target.value);
          }}
          placeholder="수정할 아이디"
        />
        <input
          type="text"
          value={contents}
          onChange={(e) => {
            setContents(e.target.value);
          }}
          placeholder="수정할 내용"
        />
        <button onClick={onUpdateBtn}>수정</button>
        <br />
        <br />
      </div>
      <div>
        {/*input 영역*/}
        <form onSubmit={onClick}>
          <input type="text" value={inputValue.title} onChange={onChange} />
          <button type="submit">추가하기</button>
        </form>
      </div>
      <div>
        {/*데이터 영역*/}
        {todos?.map((item) => {
          return (
            <div key={item.id}>
              {item.id} : {item.title}
              &nbsp;<button onClick={() => onDeleteBtn(item.id)}>삭제</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
