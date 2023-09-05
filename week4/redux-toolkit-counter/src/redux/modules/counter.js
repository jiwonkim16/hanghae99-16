import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

// thunk 안에는 2개의 input이 들어감.
// 1. 이름 : 의미는 크게 없음.
// 2. 함수
export const __addNumber = createAsyncThunk(
  "ADD_NUMBER_WAIT",
  (payload, thunkAPI) => {
    // 수행하고 싶은 동작 : 3초를 기다리게 할 예정.
    setTimeout(() => {
      thunkAPI.dispatch(addNumber(payload));
    }, 3000);
  }
);

export const __minusNumber = createAsyncThunk(
  "MINUS_NUMBER_WAIT",
  (payload, thunkAPI) => {
    // 수행하고 싶은 동작 : 3초를 기다리게 할 예정.
    setTimeout(() => {
      thunkAPI.dispatch(minusNumber(payload));
    }, 3000);
  }
);

const InitalState = {
  number: 0,
};

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

export default counterSlice.reducer;

export const { addNumber, minusNumber } = counterSlice.actions;
