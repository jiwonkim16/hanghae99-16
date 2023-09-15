import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://3.38.191.164/"; // 서버의 URL을 여기에 입력하세요.

function Login() {
  const [loginData, setLoginData] = useState({
    id: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    id: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/login`, loginData);
      // 로그인 성공 시에 수행할 작업
      console.log(response.data);
    } catch (error) {
      // 로그인 실패 시에 수행할 작업
      console.error(error);
    }
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post(`${API_URL}/signup`, signupData);
      // 회원 가입 성공 시에 수행할 작업
      console.log(response.data);
    } catch (error) {
      // 회원 가입 실패 시에 수행할 작업
      console.error(error);
    }
  };

  return (
    <div>
      <h1>로그인</h1>
      <input
        type="text"
        placeholder="사용자 이름"
        value={loginData.username}
        onChange={(e) =>
          setLoginData({ ...loginData, username: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={loginData.password}
        onChange={(e) =>
          setLoginData({ ...loginData, password: e.target.value })
        }
      />
      <button onClick={handleLogin}>로그인</button>

      <h1>회원 가입</h1>
      <input
        type="text"
        placeholder="사용자 이름"
        value={signupData.username}
        onChange={(e) =>
          setSignupData({ ...signupData, username: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={signupData.password}
        onChange={(e) =>
          setSignupData({ ...signupData, password: e.target.value })
        }
      />
      <button onClick={handleSignup}>회원 가입</button>
    </div>
  );
}

export default Login;
