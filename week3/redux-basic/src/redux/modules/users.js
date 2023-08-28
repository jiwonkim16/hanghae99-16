// 초기 상태값(state)  보통 initalState 로 작명한다.
const initalState = {
  userId: 123,
};

const users = (state = initalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default users;
