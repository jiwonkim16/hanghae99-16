import React from "react";
import { useState } from "react";

function Input() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const changeName = (event) => {
    setName(event.target.value);
  };
  const changePrice = (event) => {
    const value = event.target.value.replace(/,/g, "");
    // 값이 숫자인지 확인하는 정규식.
    const regex = /^[0-9]+$/;
    if (regex.test(value)) {
      const pareseInt = parseInt(value);
      setPrice(pareseInt.toLocaleString("ko-KR"));
    }
  };
  const onClick = (event) => {
    event.preventDefault();
    alert(`{name : ${name}, price : ${price.replace(/,/g, "")}}`);
  };
  return (
    <div>
      <h1>Input</h1>
      <form>
        <label>이름</label>
        <input type="text" value={name} onChange={changeName} />
        <label>가격</label>
        <input type="text" value={price} onChange={changePrice} />
        <button onClick={onClick}>저장</button>
      </form>
    </div>
  );
}

export default Input;
