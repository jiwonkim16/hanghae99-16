import { styled } from "styled-components";
import Input from "./Input";
import { useState } from "react";

export default function TestInput() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    // toLocaleString을 이용해서 숫자에 콤마를 표시하기 위해 value를 Number 타입으로 변환한다.
    // toLocaleString은 Number 타입을 입력 받아야 하기 때문이다.
    let value = parseInt(event.target.value.replaceAll(",", ""));

    // Input에 숫자가 하나도 입력되지 않았을 때는 0을 할당한다.
    // 그 외엔 콤마가 표시된 숫자를 할당한다.
    isNaN(value) ? setPrice(0) : setPrice(value.toLocaleString("ko-KR"));
  };

  const handleClick = (event) => {
    event.preventDefault();

    name === "" && price === 0
      ? alert("이름과 가격 모두 입력해주세요")
      : alert(`{name: ${name} price: ${price}}`);
  };

  return (
    <form onSubmit={handleClick}>
      <h1>Input</h1>

      <StyledDiv>
        <div>
          이름 <Input onChange={handleNameChange} />
        </div>

        <div>
          가격{" "}
          <Input value={price} onChange={handlePriceChange} placeholder={0} />
        </div>

        {/* 추후 지원님이 구현하신 버튼으로 변경 예정*/}
        <button type="submit">저장</button>
      </StyledDiv>
    </form>
  );
}
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
