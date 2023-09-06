import React from "react";
import { useState } from "react";
import styled from "styled-components";

const NameInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  margin-right: 15px;
`;
const PriceInput = styled(NameInput)``;
const Button = styled.button`
  background-color: #55efc4;
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:active {
    background-color: rgba(28, 35, 51, 0.5);
    border: none;
  }
`;

function Input() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("0");
  const changeName = (event) => {
    setName(event.target.value);
  };
  const changePrice = (event) => {
    // const value = event.target.value.replace(/,/g, "");
    const value = event.target.value.replaceAll(",", ""); // ,를 지워줘!!!
    // 값이 숫자인지 확인하는 정규식.
    const regex = /^[0-9]+$/;
    if (regex.test(value)) {
      const pareseInt = parseInt(value);
      setPrice(pareseInt.toLocaleString("ko-KR"));
    }
  };
  const onClick = (event) => {
    event.preventDefault();
    name !== ""
      ? alert(`{name : ${name}, price : ${price.replace(/,/g, "")}}`)
      : alert("이름과 가격을 모두 입력해주세요");
    setName("");
    setPrice("");
  };
  return (
    <div>
      <h1>Input</h1>
      <form>
        <label>이름</label>
        <NameInput type="text" value={name} onChange={changeName} />
        <label>가격</label>
        <PriceInput type="text" value={price} onChange={changePrice} />
        <Button onClick={onClick}>저장</Button>
      </form>
    </div>
  );
}

export default Input;
