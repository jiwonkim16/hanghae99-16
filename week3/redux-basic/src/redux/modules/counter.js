// 초기 상태값(state)  보통 initalState 로 작명한다.
const initalState = {
  number: 0,
};
// const [number, setNumber] = useState(0) 와 같은 의미.

// 리듀서 : 'state에 변화를 일으키는' 함수이다.
// (1) state를 action의 type 에 따라 변경하는 함수이다.
// 리듀서의 인자로는 state와 action을 받는다.
const counter = (state = initalState, action) => {
  switch (action.type) {
    case "PLUS_ONE":
      return {
        number: state.number + 1,
      };
    case "MINUS_ONE":
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default counter;
