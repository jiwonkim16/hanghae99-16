import { useDispatch, useSelector } from "react-redux";
import { addNumber, minusNumber } from "./redux/modules/counter";
import { __addNumber, __minusNumber } from "./redux/modules/counter";
function App() {
  const number = useSelector((state) => {
    return state.counter.number;
  });
  const dispatch = useDispatch();
  const plus = () => {
    // dispatch(addNumber(parseInt(1)));
    dispatch(__addNumber(parseInt(1)));
  };
  const minus = () => {
    // dispatch(minusNumber(parseInt(1)));
    dispatch(__minusNumber(parseInt(1)));
  };

  return (
    <div>
      <div>{number}</div>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}

export default App;
