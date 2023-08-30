import { useDispatch, useSelector } from "react-redux";
import { plusOne, minusOne, plusN, minusN } from "./redux/modules/counter";
import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  // 여기에서 store에 접근하여, counter의 값을 읽어오고 싶다!
  // useSelector 라는 리덕스 훅을 사용.
  // 매개변수로는 함수가 들어간다.
  // 콜백함수의 인자인 state는 현재 중앙저장소 state 전체를 가지고 있다.
  const counter = useSelector((state) => {
    return state.counter;
  });
  // console.log(counter);

  // useEffect(() => {
  //   console.log(number);
  // }, [number]);

  // dispatch를 가져와보자.
  const dispatch = useDispatch();

  return (
    <>
      <div>현재 카운트 : {counter.number}</div>
      <div>
        <input
          type="number"
          value={number}
          onChange={(event) => {
            const { value } = event.target;
            setNumber(+value);
          }}
        />
      </div>
      <button
        onClick={() => {
          // +1 해주는 로직을 써주면 된다.
          // 액션 객체를 스토어에 던져주는 역할이 useDispatch
          // dispatch(plusOne());
          dispatch(plusN(number));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(minusN(number));
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
