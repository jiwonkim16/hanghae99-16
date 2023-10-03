import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Mypage from "./components/Mypage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mypage />}></Route>
        <Route path="/signin" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
