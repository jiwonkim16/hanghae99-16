import axios from "axios";

// axios 인스턴스 생성
export const service = axios.create({
  baseURL: `http://3.39.195.241:8080`,
});

// 로그인 버튼 클릭 시 실행되는 api요청
export const postLoginInfo = async (data) => {
  // data. 즉, {id, password}를 받아서 서버에 요청을 보내고 응답 받은 값을 response에 저장.
  // 이때, service는 axios 인스턴스.
  const response = await service.post(`/login`, data);

  // 그리고 reponse를 반환.
  return response;
};

// 유저 인증 절차 관련 api
export const postUser = async (data) => {
  // 헤더라는 변수에 data 즉, accessToken 값을 넣고 실제 headers에 그 값을 저장.
  const header = { authorization: `Bearer ${data}` };
  const response = await axios.get(`http://3.38.191.164/user`, {
    headers: header,
  });
  // 만약 status가 200 이라면 response를 그대로 반환하고 그게 아니면 response안에 message 반환
  if (response.status === 200) {
    return response;
  } else {
    return response.data.message;
  }
};
