import React from "react";

function SignUp() {
  return (
    <div>
      <div>
        <input type="text" placeholder="아이디 : " />
        <input type="text" placeholder="닉네임 : " />
        <input type="password" placeholder="비밀번호 : " />
        <input type="password" placeholder="비밀번호 확인 : " />
      </div>
      <div>
        <button>가입하기</button>
      </div>
    </div>
  );
}

export default SignUp;
