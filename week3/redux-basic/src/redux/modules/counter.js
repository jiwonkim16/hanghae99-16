// action value
const PLUS_ONE = "counter/PLUS_ONE";
const MINUS_ONE = "counter/MINUS_ONE";
const PLUS_N = "counter/PLUS_N";
const MINUS_N = "MINUS_N";

// action creator : action value를 return 하는 함수
export const plusOne = () => {
  return {
    type: PLUS_ONE,
  };
};
export const minusOne = () => {
  return {
    type: MINUS_ONE,
  };
};

export const plusN = (payload) => {
  return {
    type: PLUS_N,
    payload: payload,
  };
};

export const minusN = (payload) => {
  return {
    type: MINUS_N,
    payload: payload,
  };
};

// 초기 상태값(state)  보통 initalState 로 작명한다.
const initalState = {
  number: 0,
};
// const [number, setNumber] = useState(0) 와 같은 의미.

// 리듀서 : 'state에 변화를 일으키는' 함수이다.
// (1) state를 action의 type 에 따라 변경하는 함수이다.
// 리듀서의 인자로는 state와 action을 받는다.

// action 객체라는 것은 action type을 payload 만큼 처리하는 것이다.
// 예를 들어 payload가 3이다. 는 3만큼 plus를 해라 라는 의미?
const counter = (state = initalState, action) => {
  switch (action.type) {
    case PLUS_ONE:
      return {
        number: state.number + 1,
      };
    case MINUS_ONE:
      return { number: state.number - 1 };
    case PLUS_N:
      return {
        number: state.number + action.payload,
      };
    case MINUS_N:
      return {
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

export default counter;
