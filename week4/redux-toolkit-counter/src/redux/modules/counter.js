import { createSlice } from "@reduxjs/toolkit";

// action value
// const PLUS_ONE = "PLUS_ONE";
// const MIN_ONE = "MiN_ONE";

// action Creator
// export const actionCreator1 = (payload) => {
//   return {
//     type: PLUS_ONE,
//     payload,
//   };
// };
// export const actionCreator2 = (payload) => {
//   return {
//     type: MIN_ONE,
//     payload,
//   };
// };

// Inital State
const InitalState = {
  number: 0,
};

// Reducer
// const counter = (state = InitalState, action) => {
//   switch (action.type) {
//     case PLUS_ONE:
//       return {
//         number: state.number + action.payload,
//       };
//     case MIN_ONE:
//       return {
//         number: state.number - action.payload,
//       };
//     default:
//       return state;
//   }
// };

// 바닐라 리덕스에서는 액션 value, 액션 creator, 리듀서 함수를 모두 따로 작성했는데
// 리덕스 툴킷에서는 createSlice() 라는 API를 통해서 액션크리에이터와 리듀서를 한번에 생성할 수 있게 됬다.

// counterSlice 라는 변수 안에 액션 크리에이터와 리듀서 함수가 담겨있다.
// () 안에는 객체가 들어가며, 그 객체의 key는 name과 초기값, reducers 이다.
// 그 중 reducers는 여러 개가 들어갈 수도 있기 때문에 value에 객체가 올 수도 있다.
const counterSlice = createSlice({
  name: "counter",
  initialState: InitalState,
  reducers: {
    addNumber: (state, action) => {
      state.number = state.number + action.payload;
    },
    minusNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

// export default counter;
export default counterSlice.reducer;
// 리듀서를 밖으로 내보내는 방법.
export const { addNumber, minusNumber } = counterSlice.actions;
// 여기서 action은 addNumber와 minusMumber를 가지고 있는 객체, 즉 reducers를 의미함.
// 그렇기 때문에 그 두개의 함수를 빼내기만 하면 액션 크리에이터로서도 동작할 수 있다.
// 액션 크리에이터를 내보내는 방법.
