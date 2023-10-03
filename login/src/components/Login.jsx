import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postLoginInfo, service, postUser } from "../api/api";

function Login() {
  // input에 대한 state
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const router = useNavigate();

  // onChange 이벤트핸들러 함수
  const handleChange = (e) => {
    const { name } = e.target;
    if (name === "id" ? setId(e.target.value) : setPassword(e.target.value));
  };

  // form submit 이벤트핸들러 함수
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // post 요청에 id와 password를 담아서 보내고 받은 response를 변수에 할당한다.
      const response = await postLoginInfo({ id, password });
      console.log(response);

      // status가 201 이면 받아온 reponse의 data안에 토큰을 accessToken이란 변수에 넣고
      if (response.status === 201) {
        const accessToken = response.data.token;

        // axios 인증정보에 설정.
        service.defaults.headers.common.Authorization = accessToken;
        // const refreshToken = response.headers.cookie;

        // 만약 엑세스 토큰을 로컬스토리지에 저장한다면
        localStorage.setItem("access", accessToken);
        // localStorage.setItem("refresh", refreshToken);

        // 유저 인증 확인 절차
        const postUsers = await postUser(accessToken);
        console.log(postUsers.data);
        // 다음 페이지로!
        alert("로그인 성공");
        router("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>로고</div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="아이디 :"
            name="id"
            onChange={handleChange}
          />
          <br />
          <input
            type="password"
            placeholder="비밀번호 :"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <button>로그인</button>
        </div>
      </form>
      <div>
        <button>비밀번호 찾기</button>
        <button>아이디 찾기</button>
        <Link to="/signup">회원가입</Link>
      </div>
    </div>
  );
}

export default Login;
